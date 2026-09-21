let currentFilter = 'all';
let currentQuery = '';

function normalize(str) {
  return (str || '').toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[^a-zа-я0-9\s]/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Синонимы и расширение запроса для умного поиска
const synonyms = {
  'передать': ['отправить', 'перекинуть', 'скинуть', 'share', 'airdrop', 'localsend', 'файл'],
  'файл': ['фото', 'видео', 'документ', 'картинка', 'передача'],
  'два': ['клонирование', 'dual', 'parallel', 'второй', 'аккаунт'],
  'whatsapp': ['ватсап', 'вацап', 'вотсап'],
  'телеграм': ['telegram', 'тг'],
  'split': ['разделённый', 'разделенный', 'два окна', 'многозадачность'],
  'dex': ['desktop', 'рабочий стол', 'монитор', 'пк режим'],
  'зарядка': ['заряд', 'powershare', 'обратная', 'беспроводная'],
  'бэкап': ['backup', 'резерв', 'копия', 'перенос данных'],
  'sideload': ['ipa', 'вне app store', 'установка приложения', 'altstore'],
  'уведомления': ['notification', 'оповещения'],
  'яркость': ['автояркость', 'brightness', 'экран'],
  'звук': ['громкость', 'volume', 'аудио'],
  'биометрия': ['лицо', 'отпечаток', 'face id', 'fingerprint', 'hello'],
  'гость': ['гостевой', 'пользователь', 'второй аккаунт устройства']
};

function expandQuery(query) {
  const q = normalize(query);
  let words = q.split(' ').filter(Boolean);
  const extra = [];
  words.forEach(w => {
    Object.keys(synonyms).forEach(key => {
      if (w.includes(key) || key.includes(w)) {
        synonyms[key].forEach(s => extra.push(s));
      }
    });
  });
  return [...new Set([...words, ...extra])];
}

function scoreItem(item, query) {
  if (!query) return 1;
  const words = expandQuery(query);
  if (words.length === 0) return 1;

  const title = normalize(item.title);
  const desc = normalize(item.desc);
  const tags = (item.tags || []).map(normalize).join(' ');
  const solution = normalize((item.solution || '').replace(/<[^>]+>/g, ' '));
  const brand = normalize(item.brand || '');

  let score = 0;
  words.forEach(w => {
    if (title.includes(w)) score += 12;
    if (tags.includes(w)) score += 9;
    if (brand.includes(w)) score += 8;
    if (desc.includes(w)) score += 5;
    if (solution.includes(w)) score += 2;
  });
  return score;
}

function getFiltered() {
  let list = knowledge.slice();

  if (currentFilter !== 'all') {
    if (currentFilter === 'brand') {
      list = list.filter(i => i.platform === 'brand');
    } else {
      list = list.filter(i => i.platform === currentFilter);
    }
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
    container.innerHTML = '<div class="feature"><p class="desc">Ничего не найдено. Попробуй другими словами: «передать файл», «два аккаунта», «DeX», «автояркость», «sideload», «бэкап Samsung».</p></div>';
    info.textContent = 'Ничего не найдено';
    return;
  }

  info.textContent = currentQuery.trim()
    ? 'Найдено: ' + list.length + ' · «' + currentQuery + '»'
    : 'Показано: ' + list.length;

  container.innerHTML = list.map(item =>
    '<div class="feature">' +
      '<h2>' + item.title +
        ' <span class="badge ' + item.status + '">' + item.statusText + '</span>' +
        ' <span class="badge platform">' + (item.platform || '').toUpperCase() + '</span>' +
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
  }, 180);
});

render();