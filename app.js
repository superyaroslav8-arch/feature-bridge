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
  if (!words.length) return 1;

  const title = normalize(item.title);
  const desc = normalize(item.desc);
  const tags = (item.tags || []).map(normalize).join(' ');
  const solution = normalize((item.solution || '').replace(/<[^>]+>/g, ' '));

  let score = 0;
  words.forEach(w => {
    if (title.includes(w)) score += 12;
    if (tags.includes(w)) score += 9;
    if (desc.includes(w)) score += 5;
    if (solution.includes(w)) score += 2;
    // бонус за точное начало
    if (title.startsWith(w) || tags.split(' ').some(t => t.startsWith(w))) score += 3;
  });
  return score;
}

function getFiltered() {
  let list = (typeof knowledge !== 'undefined' ? knowledge : []).slice();

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

  if (!list.length) {
    container.innerHTML = '<div class="feature"><p class="desc">Ничего не найдено. Попробуй: «передать файл», «два аккаунта», «DeX», «split screen», «бэкап», «sideload», «LocalSend».</p></div>';
    info.textContent = 'Ничего не найдено';
    return;
  }

  info.textContent = currentQuery.trim()
    ? 'Найдено: ' + list.length + ' · «' + currentQuery + '»'
    : 'Показано: ' + list.length + ' решений';

  container.innerHTML = list.map(item =>
    '<article class="feature">' +
      '<h2>' + item.title +
        ' <span class="badge ' + item.status + '">' + item.statusText + '</span>' +
        ' <span class="badge platform">' + (item.platform || '').toUpperCase() + '</span>' +
      '</h2>' +
      '<p class="desc">' + item.desc + '</p>' +
      '<div class="solution">' + item.solution + '</div>' +
    '</article>'
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

const input = document.getElementById('searchInput');
input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
input.addEventListener('input', () => {
  clearTimeout(window._searchTimer);
  window._searchTimer = setTimeout(() => {
    currentQuery = input.value;
    render();
  }, 180);
});

render();