(function () {
  let currentFilter = 'all';
  let currentQuery = '';

  function normalize(str) {
    return (str || '').toLowerCase()
      .replace(/ё/g, 'е')
      .replace(/[^a-zа-я0-9\s]/gi, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  const synonyms = {
    'передать': ['отправить', 'перекинуть', 'скинуть', 'share', 'airdrop', 'localsend', 'файл', 'фото'],
    'файл': ['фото', 'видео', 'документ', 'картинка', 'передача'],
    'два': ['клонирование', 'dual', 'parallel', 'второй', 'аккаунт', 'клон'],
    'whatsapp': ['ватсап', 'вацап', 'вотсап'],
    'телеграм': ['telegram', 'тг'],
    'split': ['разделённый', 'разделенный', 'два окна', 'многозадачность'],
    'dex': ['desktop', 'рабочий стол', 'монитор', 'пк режим', 'компьютер'],
    'зарядка': ['заряд', 'powershare', 'обратная', 'беспроводная'],
    'бэкап': ['backup', 'резерв', 'копия', 'перенос данных', 'восстановление'],
    'sideload': ['ipa', 'вне app store', 'установка приложения', 'altstore', 'стороннее'],
    'уведомления': ['notification', 'оповещения'],
    'яркость': ['автояркость', 'brightness', 'экран', 'адаптивная'],
    'звук': ['громкость', 'volume', 'аудио'],
    'биометрия': ['лицо', 'отпечаток', 'face id', 'fingerprint', 'hello'],
    'гость': ['гостевой', 'пользователь'],
    'samsung': ['самсунг', 'galaxy'],
    'xiaomi': ['сяоми', 'redmi', 'poco', 'hyperos', 'miui'],
    'iphone': ['айфон', 'apple', 'эпл'],
    'настройка': ['настроить', 'включить', 'выключить', 'сделать', 'как']
  };

  function expandQuery(query) {
    const words = normalize(query).split(' ').filter(Boolean);
    const extra = [];
    words.forEach(function (w) {
      Object.keys(synonyms).forEach(function (key) {
        if (w.indexOf(key) !== -1 || key.indexOf(w) !== -1) {
          synonyms[key].forEach(function (s) { extra.push(s); });
        }
      });
    });
    return Array.from(new Set(words.concat(extra)));
  }

  function scoreItem(item, query) {
    if (!query) return 1;
    const words = expandQuery(query);
    if (!words.length) return 1;
    const title = normalize(item.title);
    const desc = normalize(item.desc);
    const tags = (item.tags || []).map(normalize).join(' ');
    const solution = normalize((item.solution || '').replace(/<[^>]+>/g, ' '));
    const brand = normalize(item.brand || '');
    let score = 0;
    words.forEach(function (w) {
      if (title.indexOf(w) !== -1) score += 14;
      if (tags.indexOf(w) !== -1) score += 10;
      if (brand.indexOf(w) !== -1) score += 9;
      if (desc.indexOf(w) !== -1) score += 5;
      if (solution.indexOf(w) !== -1) score += 2;
    });
    return score;
  }

  function getFiltered() {
    var list = (typeof knowledge !== 'undefined' ? knowledge.slice() : []);
    if (currentFilter !== 'all') {
      list = list.filter(function (i) { return i.platform === currentFilter; });
    }
    if (currentQuery.trim()) {
      list = list
        .map(function (i) { return { item: i, score: scoreItem(i, currentQuery) }; })
        .filter(function (x) { return x.score > 0; })
        .sort(function (a, b) { return b.score - a.score; })
        .map(function (x) { return x.item; });
    }
    return list;
  }

  function render() {
    var list = getFiltered();
    var container = document.getElementById('content');
    var info = document.getElementById('results-info');
    if (!container || !info) return;

    if (list.length === 0) {
      container.innerHTML = '<div class="feature"><p class="desc">Ничего не найдено. Попробуй: «два WhatsApp», «передать файл», «DeX», «автояркость», «sideload», «бэкап Samsung».</p></div>';
      info.textContent = 'Ничего не найдено';
      return;
    }

    info.textContent = currentQuery.trim()
      ? 'Найдено: ' + list.length + ' · «' + currentQuery + '»'
      : 'Показано: ' + list.length;

    container.innerHTML = list.map(function (item) {
      return '<div class="feature">' +
        '<h2>' + item.title +
          ' <span class="badge ' + (item.status || 'possible') + '">' + (item.statusText || '') + '</span>' +
          ' <span class="badge platform">' + (item.platform || '').toUpperCase() + '</span>' +
        '</h2>' +
        '<p class="desc">' + (item.desc || '') + '</p>' +
        '<div class="solution">' + (item.solution || '') + '</div>' +
      '</div>';
    }).join('');
  }

  function doSearch() {
    var input = document.getElementById('searchInput');
    if (input) currentQuery = input.value;
    render();
  }

  function setFilter(platform) {
    currentFilter = platform;
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-platform') === platform);
    });
    render();
  }

  // Events
  var input = document.getElementById('searchInput');
  var btn = document.getElementById('searchBtn');
  if (btn) btn.addEventListener('click', doSearch);
  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') doSearch();
    });
    input.addEventListener('input', function () {
      clearTimeout(window._searchTimer);
      window._searchTimer = setTimeout(function () {
        currentQuery = input.value;
        render();
      }, 160);
    });
  }
  document.querySelectorAll('.filter-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setFilter(btn.getAttribute('data-platform'));
    });
  });

  // Start
  if (typeof knowledge === 'undefined') {
    document.getElementById('content').innerHTML = '<div class="feature"><p class="desc">Ошибка загрузки базы. Обнови страницу.</p></div>';
  } else {
    render();
  }
})();