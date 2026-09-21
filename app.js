let currentFilter = 'all';
let currentQuery = '';

function normalize(str) {
  return (str || '').toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[^a-zа-я0-9\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function scoreItem(item, query) {
  if (!query) return 1;
  const q = normalize(query);
  const words = q.split(' ').filter(Boolean);
  if (words.length === 0) return 1;

  const title = normalize(item.title);
  const desc = normalize(item.desc);
  const tags = (item.tags || []).map(normalize).join(' ');
  const solution = normalize(item.solution.replace(/<[^>]+>/g, ' '));

  let score = 0;
  words.forEach(w => {
    if (title.includes(w)) score += 10;
    if (tags.includes(w)) score += 8;
    if (desc.includes(w)) score += 4;
    if (solution.includes(w)) score += 2;
  });
  return score;
}

function getFiltered() {
  let list = knowledge.slice();

  if (currentFilter !== 'all') {
    list = list.filter(i => i.platform === currentFilter);
  }

  if (currentQuery.trim()) {
    list = list
      .map(i => ({ item: i, score: scoreItem(i, currentQuery) }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(x => x.item);
  }

  return list;
}

function render() {
  const list = getFiltered();
  const container = document.getElementById('content');
  const info = document.getElementById('results-info');

  if (list.length === 0) {
    container.innerHTML = '<div class="feature"><p class="desc">Ничего не найдено. Попробуй другие слова: «передать файл», «два аккаунта», «split screen», «DeX», «бэкап», «sideload» и т.д.</p></div>';
    info.textContent = 'Ничего не найдено';
    return;
  }

  info.textContent = currentQuery.trim()
    ? 'Найдено: ' + list.length + ' по запросу «' + currentQuery + '»'
    : 'Показано: ' + list.length;

  container.innerHTML = list.map(item =>
    '<div class="feature">' +
      '<h2>' + item.title +
        ' <span class="badge ' + item.status + '">' + item.statusText + '</span>' +
        ' <span class="badge platform">' + item.platform.toUpperCase() + '</span>' +
      '</h2>' +
      '<p class="desc">' + item.desc + '</p>' +
      '<div class="solution">' + item.solution + '</div>' +
    '</div>'
  ).join('');
}

function doSearch() {
  currentQuery = document.getElementById('searchInput').value;
  render();
}

function setFilter(platform) {
  currentFilter = platform;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.platform === platform);
  });
  render();
}

document.getElementById('searchInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') doSearch();
});

document.getElementById('searchInput').addEventListener('input', function() {
  clearTimeout(window._searchTimer);
  window._searchTimer = setTimeout(function() {
    currentQuery = document.getElementById('searchInput').value;
    render();
  }, 200);
});

// Старт
render();