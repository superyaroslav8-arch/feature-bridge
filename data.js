const knowledge = [
  // ========== iOS ==========
  {
    id: 1, platform: "ios", tags: ["sideload", "установка", "ipa", "app store", "скачать приложение", "вне app store", "altstore", "trollstore"],
    title: "Установка приложений вне App Store (Sideloading)",
    status: "partial", statusText: "Частично",
    desc: "Apple ограничивает установку приложений вне App Store. Полностью обойти системно нельзя.",
    solution: `<strong>1. AltStore (самый надёжный способ)</strong>
      <ul>
        <li>Скачай AltServer с <a href="https://altstore.io" target="_blank">altstore.io</a> на компьютер (Windows/Mac).</li>
        <li>Windows: поставь iTunes. Mac: используй Finder.</li>
        <li>Подключи iPhone/iPad кабелем → «Доверять».</li>
        <li>AltServer → Install AltStore → выбери устройство.</li>
        <li>На iPhone открой AltStore → войди в Apple ID (лучше создать отдельный).</li>
        <li>Через AltStore ставь любые .ipa. Раз в 7 дней нужно обновлять (компьютер или Wi-Fi + запущенный AltServer).</li>
      </ul>
      <strong>2. TrollStore (без срока)</strong>
      <ul>
        <li>Работает на определённых версиях iOS (в основном 14.0–16.6.1 и некоторые 17.0).</li>
        <li>Проверь совместимость на <a href="https://ios.cfw.guide" target="_blank">ios.cfw.guide</a>.</li>
      </ul>
      <strong>3. ЕС (iOS 17.4+)</strong> — можно ставить сторонние магазины напрямую.`
  },
  {
    id: 2, platform: "ios", tags: ["split screen", "разделённый экран", "многозадачность", "два приложения", "split view", "ipad"],
    title: "Разделённый экран (Split View)",
    status: "partial", statusText: "Только iPad",
    desc: "На iPhone нативного split-screen нет. На iPad — полноценный.",
    solution: `<strong>iPad:</strong>
      <ul>
        <li>Открой приложение → свайп вверх (появляется Dock) → зажми второе приложение и перетащи к левому или правому краю.</li>
        <li>Альтернатива: свайп от правого края экрана → Slide Over → потяни окно вниз для Split View.</li>
        <li>Stage Manager: Настройки → Многозадачность и жесты → Stage Manager. Можно выносить окна на внешний монитор.</li>
      </ul>
      <strong>iPhone:</strong> только Picture-in-Picture и переключение через App Switcher.`
  },
  {
    id: 3, platform: "ios", tags: ["обратная зарядка", "wireless power", "отдать зарядку", "зарядить наушники", "powershare"],
    title: "Обратная беспроводная зарядка",
    status: "impossible", statusText: "Невозможно",
    desc: "iPhone принимает зарядку, но не отдаёт её другим устройствам.",
    solution: `Аппаратная функция. Программно добавить нельзя.<br>Используй MagSafe-пауэрбанк или обычный powerbank.`
  },
  {
    id: 4, platform: "ios", tags: ["desktop mode", "dex", "монитор", "как компьютер", "stage manager", "внешний экран"],
    title: "Режим рабочего стола (Desktop Mode)",
    status: "partial", statusText: "Только iPad",
    desc: "iPhone не умеет работать как ПК. iPad — через Stage Manager.",
    solution: `<strong>iPad:</strong>
      <ul>
        <li>Подключи к монитору через USB-C или HDMI-адаптер.</li>
        <li>Включи Stage Manager (Настройки → Многозадачность).</li>
        <li>Открывай несколько окон, меняй размер, перетаскивай.</li>
      </ul>
      <strong>iPhone:</strong> только зеркалирование экрана.`
  },
  {
    id: 5, platform: "ios", tags: ["два аккаунта", "клонирование", "dual app", "второй whatsapp", "два телеграм"],
    title: "Клонирование приложений / два аккаунта",
    status: "partial", statusText: "Частично",
    desc: "Нативного Dual Apps на iOS нет.",
    solution: `<ul>
      <li>Telegram — официально поддерживает несколько аккаунтов (Настройки → Добавить аккаунт).</li>
      <li>WhatsApp и другие: открой веб-версию в Safari → «На экран Домой» (получится почти отдельное приложение).</li>
      <li>Второй Apple ID (очень неудобно).</li>
      <li>Jailbreak-твики (рискованно и не для всех версий).</li>
    </ul>`
  },
  {
    id: 6, platform: "ios", tags: ["гость", "гостевой режим", "несколько пользователей", "дать телефон"],
    title: "Гостевой режим / несколько пользователей",
    status: "impossible", statusText: "Невозможно",
    desc: "iOS не поддерживает несколько пользователей на одном устройстве.",
    solution: `<ul>
      <li>Guided Access: Настройки → Универсальный доступ → Guided Access — ограничивает устройство одним приложением + пароль.</li>
      <li>Screen Time — можно ставить ограничения на приложения и контент.</li>
    </ul>`
  },
  {
    id: 7, platform: "ios", tags: ["файлы", "файловая система", "доступ к файлам", "проводник"],
    title: "Полный доступ к файлам",
    status: "partial", statusText: "Частично",
    desc: "Песочница приложений ограничивает доступ.",
    solution: `<ul>
      <li>Приложение «Файлы» + подключённые облака (iCloud, Google Drive, Dropbox).</li>
      <li>При подключении к Mac (Finder) или Windows доступ к папкам шире.</li>
      <li>Полный root-доступ — только через jailbreak.</li>
    </ul>`
  },
  {
    id: 8, platform: "ios", tags: ["громкость", "звук", "регулятор", "отдельная громкость"],
    title: "Отдельные регуляторы громкости",
    status: "possible", statusText: "Есть",
    desc: "В новых iOS управление стало гибче.",
    solution: `Настройки → Звуки и тактильные сигналы. В Пункте управления (свайп справа сверху) — медиа-громкость. В свежих версиях iOS разделение улучшилось.`
  },
  {
    id: 9, platform: "ios", tags: ["apple pay", "nfc", "оплата", "платежи", "россия", "карта"],
    title: "NFC-платежи / Apple Pay в России",
    status: "impossible", statusText: "Не работает",
    desc: "Apple Pay с российскими картами не работает.",
    solution: `Официально невозможно из-за ограничений. Альтернативы: оплата по QR, карты других систем, Android с Mir Pay / СБПэй.`
  },
  {
    id: 10, platform: "ios", tags: ["airdrop", "передать файл", "отправка рядом", "быстрая передача"],
    title: "AirDrop — быстрая передача файлов",
    status: "possible", statusText: "Есть",
    desc: "Встроенная функция между устройствами Apple.",
    solution: `<ul>
      <li>Пункт управления → зажми сеть → AirDrop → «Все» или «Только контакты».</li>
      <li>В приложении «Файлы» / Фото / любом месте → Поделиться → AirDrop.</li>
      <li>Убедись, что Wi-Fi и Bluetooth включены, устройства рядом.</li>
    </ul>`
  },

  // ========== Android ==========
  {
    id: 20, platform: "android", tags: ["airdrop", "quick share", "передать файл", "nearby share", "отправка рядом"],
    title: "Быстрая передача файлов (аналог AirDrop)",
    status: "possible", statusText: "Есть",
    desc: "На Android есть несколько хороших способов.",
    solution: `<strong>Quick Share (Google)</strong>
      <ul>
        <li>Настройки → Google → Устройства и общий доступ → Quick Share.</li>
        <li>Поставь видимость «Все» или «Контакты».</li>
        <li>На новых версиях частично работает с iPhone.</li>
      </ul>
      <strong>Лучший кроссплатформенный вариант</strong>
      <ul>
        <li><a href="https://localsend.org" target="_blank">LocalSend</a> — бесплатно, без интернета, работает с Windows, iOS, macOS, Linux.</li>
      </ul>
      <strong>Samsung:</strong> свой Quick Share + SmartThings.`
  },
  {
    id: 21, platform: "android", tags: ["rcs", "сообщения", "imessage", "чат", "google messages"],
    title: "RCS / сообщения уровня iMessage",
    status: "partial", statusText: "Частично",
    desc: "RCS сильно улучшился, но зависит от оператора и собеседника.",
    solution: `<ul>
      <li>Установи Google Messages и сделай приложением по умолчанию.</li>
      <li>Настройки Messages → Чат-функции (RCS) → Включить.</li>
      <li>У собеседника тоже должен быть включён RCS.</li>
      <li>Альтернативы с лучшим UX: Telegram, Signal, WhatsApp.</li>
    </ul>`
  },
  {
    id: 22, platform: "android", tags: ["lidar", "3d", "сканирование", "измерение", "room scan"],
    title: "LiDAR / точное 3D-сканирование",
    status: "impossible", statusText: "Невозможно",
    desc: "LiDAR — физический датчик. На Android его нет в обычных смартфонах.",
    solution: `Используй ToF-камеры и приложения: Measure (Google), AR Ruler, Magic Measure и аналоги. Точность заметно ниже настоящего LiDAR.`
  },
  {
    id: 23, platform: "android", tags: ["uwb", "airtag", "трекер", "precision finding", "поиск предмета"],
    title: "UWB Precision Finding (как AirTag)",
    status: "partial", statusText: "Только флагманы",
    desc: "UWB есть не на всех Android-устройствах.",
    solution: `<strong>Поддерживают UWB:</strong>
      <ul>
        <li>Google Pixel 6 Pro и новее (Pro-модели).</li>
        <li>Samsung Galaxy S21 Ultra и новее Ultra, некоторые Fold/Flip.</li>
        <li>Отдельные модели Xiaomi, OnePlus, Honor.</li>
      </ul>
      Проверь в характеристиках «UWB» или «Ultra Wideband». Трекеры: Samsung SmartTag+, Moto Tag.`
  },
  {
    id: 24, platform: "android", tags: ["live activities", "dynamic island", "now bar", "живой виджет", "уведомление на экране"],
    title: "Live Activities / Dynamic Island-аналоги",
    status: "partial", statusText: "Частично",
    desc: "Похожие функции есть у производителей.",
    solution: `<ul>
      <li>Samsung: Now Bar на экране блокировки и Always On Display + Live Notifications.</li>
      <li>Google Pixel: At a Glance + Ongoing notifications.</li>
      <li>Сторонние лаунчеры и виджеты могут приблизить эффект Dynamic Island.</li>
    </ul>`
  },
  {
    id: 25, platform: "android", tags: ["бэкап", "backup", "перенос данных", "клон", "smart switch", "восстановление"],
    title: "Полный бэкап и перенос данных",
    status: "partial", statusText: "Частично",
    desc: "Лучше, чем раньше, но не всегда «как клон» iCloud.",
    solution: `<ul>
      <li><strong>Samsung:</strong> Smart Switch (кабель или Wi-Fi) — один из самых полных.</li>
      <li><strong>Google:</strong> Настройки → Google → Резервное копирование.</li>
      <li>Xiaomi / HyperOS: Mi Mover и встроенный перенос.</li>
      <li>Сторонние: Swift Backup (нужен root для полного), Migrate.</li>
    </ul>`
  },
  {
    id: 26, platform: "android", tags: ["два аккаунта", "клонирование", "dual app", "parallel", "второй whatsapp", "два телеграм"],
    title: "Клонирование приложений (Dual Apps)",
    status: "possible", statusText: "Есть",
    desc: "На большинстве Android есть встроенная функция.",
    solution: `<ul>
      <li>Samsung: Настройки → Дополнительные функции → Dual Messenger / Dual App.</li>
      <li>Xiaomi / HyperOS: Dual Apps в настройках приложений.</li>
      <li>OnePlus, Realme, Oppo, vivo — Parallel Apps / App Cloner.</li>
      <li>Сторонние: Island, Shelter, Parallel Space (работают почти на любом Android).</li>
    </ul>`
  },
  {
    id: 27, platform: "android", tags: ["гость", "гостевой", "несколько пользователей", "второй пользователь"],
    title: "Гостевой режим / несколько пользователей",
    status: "possible", statusText: "Есть",
    desc: "Есть почти на всех современных Android.",
    solution: `Настройки → Система → Несколько пользователей (или Пользователи и аккаунты). Можно создать гостя или полноценного второго пользователя.`
  },
  {
    id: 28, platform: "android", tags: ["обратная зарядка", "powershare", "wireless power share", "отдать зарядку", "зарядить наушники"],
    title: "Обратная беспроводная зарядка",
    status: "partial", statusText: "На многих флагманах",
    desc: "Есть у Samsung, Xiaomi, OnePlus, Google (часть моделей) и других.",
    solution: `Обычно называется Wireless PowerShare / Battery Share / Обратная зарядка. Включается в шторке быстрых настроек или в меню батареи. Положи другое устройство на заднюю крышку.`
  },
  {
    id: 29, platform: "android", tags: ["dex", "desktop mode", "монитор", "как компьютер", "режим пк"],
    title: "Desktop Mode (DeX и аналоги)",
    status: "possible", statusText: "Есть",
    desc: "Samsung DeX и нативный Desktop Mode в новых Android.",
    solution: `<ul>
      <li>Samsung: DeX — подключи к монитору кабелем или беспроводно. Полноценный рабочий стол.</li>
      <li>В новых версиях Android / Pixel и других — Desktop Mode при подключении к дисплею.</li>
      <li>Сторонние: scrcpy (через компьютер), SecondScreen.</li>
    </ul>`
  },
  {
    id: 30, platform: "android", tags: ["разделённый экран", "split screen", "два приложения", "многозадачность"],
    title: "Разделённый экран (Split Screen)",
    status: "possible", statusText: "Есть",
    desc: "Нативная функция Android с версии 7.",
    solution: `<ul>
      <li>Открой кнопку недавних приложений → нажми на иконку приложения сверху → «Разделить» / Split screen.</li>
      <li>Или зажми кнопку недавних на некоторых оболочках.</li>
      <li>Можно менять размер окон и открывать плавающие окна (на Samsung, Xiaomi и др.).</li>
    </ul>`
  },

  // ========== Windows ==========
  {
    id: 40, platform: "windows", tags: ["phone link", "связь с телефоном", "android", "уведомления", "смс"],
    title: "Связь с телефоном (Phone Link)",
    status: "possible", statusText: "Есть",
    desc: "Официальный способ связать Android (и ограниченно iPhone) с Windows.",
    solution: `<strong>Android:</strong>
      <ul>
        <li>На телефоне установи «Связь с Windows» (Link to Windows).</li>
        <li>На ПК открой приложение «Связь с телефоном» (Phone Link).</li>
        <li>Можно видеть уведомления, SMS, звонки, фото, запускать приложения (особенно глубоко на Samsung).</li>
      </ul>
      <strong>iPhone:</strong> поддержка есть, но функционал заметно скромнее.`
  },
  {
    id: 41, platform: "windows", tags: ["передать файл", "airdrop", "localsend", "быстрая передача"],
    title: "Быстрая передача файлов",
    status: "possible", statusText: "Есть",
    desc: "Несколько удобных способов.",
    solution: `<ul>
      <li><a href="https://localsend.org" target="_blank">LocalSend</a> — лучший бесплатный кроссплатформенный вариант.</li>
      <li>Snapdrop / Pairdrop в браузере.</li>
      <li>Nearby Share / Quick Share (если рядом Android).</li>
      <li>OneDrive, общая сетевая папка.</li>
    </ul>`
  },
  {
    id: 42, platform: "windows", tags: ["буфер", "clipboard", "копировать", "вставить между устройствами"],
    title: "Облачный буфер обмена",
    status: "possible", statusText: "Есть",
    desc: "Можно синхронизировать скопированное между устройствами Microsoft.",
    solution: `<ul>
      <li>Параметры → Система → Буфер обмена → включи «Журнал буфера обмена» и «Синхронизация между устройствами».</li>
      <li>Win + V — открывает историю буфера.</li>
      <li>Нужен аккаунт Microsoft.</li>
    </ul>`
  },
  {
    id: 43, platform: "windows", tags: ["управление телефоном", "scrcpy", "зеркало", "удалённый доступ"],
    title: "Управление Android с компьютера",
    status: "possible", statusText: "Есть",
    desc: "Можно полностью управлять телефоном с ПК.",
    solution: `<ul>
      <li><strong>scrcpy</strong> — бесплатно, отличное качество, через USB или Wi-Fi. Скачать: github.com/Genymobile/scrcpy</li>
      <li>Phone Link — базовый уровень.</li>
      <li>Samsung DeX + Multi Control — очень глубокая интеграция.</li>
    </ul>`
  },
  {
    id: 44, platform: "windows", tags: ["виртуальные столы", "многозадачность", "snap", "окна"],
    title: "Виртуальные рабочие столы и Snap",
    status: "possible", statusText: "Есть",
    desc: "Мощная многозадачность Windows.",
    solution: `<ul>
      <li>Win + Tab — виртуальные рабочие столы.</li>
      <li>Наведи курсор на кнопку «Развернуть» — появятся Snap Layouts.</li>
      <li>PowerToys (FancyZones) — ещё более гибкие зоны окон (бесплатно от Microsoft).</li>
    </ul>`
  },
  {
    id: 45, platform: "windows", tags: ["windows hello", "лицо", "отпечаток", "биометрия", "вход"],
    title: "Windows Hello (биометрия)",
    status: "possible", statusText: "Есть",
    desc: "Вход по лицу или отпечатку.",
    solution: `Параметры → Учётные записи → Варианты входа → Windows Hello. Нужна совместимая камера с ИК или сканер отпечатка.`
  },

  // ========== macOS ==========
  {
    id: 50, platform: "macos", tags: ["airdrop", "continuity", "handoff", "universal clipboard", "передать"],
    title: "Continuity, Handoff и Universal Clipboard",
    status: "possible", statusText: "Есть",
    desc: "Экосистема Apple работает между Mac, iPhone и iPad.",
    solution: `<ul>
      <li>На всех устройствах должен быть один Apple ID, включены Wi-Fi, Bluetooth и Handoff (Настройки → Основные → AirPlay и Handoff).</li>
      <li>Universal Clipboard: копируешь на одном устройстве — вставляешь на другом.</li>
      <li>Handoff: начинаешь задачу на iPhone — продолжаешь на Mac (иконка в Dock).</li>
      <li>AirDrop работает так же, как на iPhone.</li>
    </ul>`
  },
  {
    id: 51, platform: "macos", tags: ["sidecar", "ipad как монитор", "второй экран"],
    title: "iPad как второй монитор (Sidecar)",
    status: "possible", statusText: "Есть",
    desc: "Можно использовать iPad как дополнительный дисплей для Mac.",
    solution: `<ul>
      <li>На Mac: Control Center → Screen Mirroring / Зеркалирование → подключи iPad.</li>
      <li>Или Системные настройки → Дисплеи.</li>
      <li>Работает по кабелю и по беспроводной сети (лучше кабель).</li>
    </ul>`
  },
  {
    id: 52, platform: "macos", tags: ["universal control", "одна мышь", "клавиатура", "ipad"],
    title: "Universal Control (одна мышь и клавиатура)",
    status: "possible", statusText: "Есть",
    desc: "Управляй Mac и iPad одной мышью и клавиатурой.",
    solution: `Системные настройки → Дисплеи → Universal Control. Устройства должны быть рядом, с одним Apple ID, Wi-Fi и Bluetooth.`
  },

  // ========== Cross-platform ==========
  {
    id: 60, platform: "cross", tags: ["localsend", "передать файл", "между устройствами", "кроссплатформ", "airdrop аналог"],
    title: "Передача файлов между любыми устройствами",
    status: "possible", statusText: "Есть",
    desc: "Лучшие кроссплатформенные решения.",
    solution: `<ul>
      <li><strong>LocalSend</strong> (<a href="https://localsend.org" target="_blank">localsend.org</a>) — бесплатно, без интернета, открытый код. Windows, macOS, Linux, Android, iOS.</li>
      <li>Snapdrop / Pairdrop — прямо в браузере.</li>
      <li>KDE Connect (Android + Linux/Windows/macOS).</li>
      <li>Облака: Google Drive, OneDrive, Dropbox, iCloud.</li>
    </ul>`
  },
  {
    id: 61, platform: "cross", tags: ["буфер обмена", "clipboard", "копировать между", "синхронизация буфера"],
    title: "Общий буфер обмена между устройствами",
    status: "partial", statusText: "Частично",
    desc: "Можно синхронизировать текст и изображения.",
    solution: `<ul>
      <li>Между Apple-устройствами — встроенный Universal Clipboard.</li>
      <li>Microsoft: облачный буфер + Phone Link.</li>
      <li>Кроссплатформенно: Pushbullet, Join, некоторые функции LocalSend.</li>
    </ul>`
  },
  {
    id: 62, platform: "cross", tags: ["уведомления на компьютере", "звонки на пк", "phone link", "continuity"],
    title: "Уведомления и звонки телефона на компьютере",
    status: "possible", statusText: "Есть",
    desc: "Можно получать уведомления и отвечать на звонки с ПК.",
    solution: `<ul>
      <li>Windows + Android: Phone Link.</li>
      <li>macOS + iPhone: Continuity (встроено).</li>
      <li>Windows + iPhone: ограниченная поддержка в новых Windows.</li>
      <li>Кроссплатформенно: KDE Connect, Pushbullet, AirDroid.</li>
    </ul>`
  },
  {
    id: 63, platform: "cross", tags: ["одна мышь", "клавиатура", "несколько компьютеров", "barrier", "synergy", "logitech flow"],
    title: "Одна мышь и клавиатура на несколько устройств",
    status: "possible", statusText: "Есть",
    desc: "Управляй несколькими компьютерами и планшетами одной парой устройств ввода.",
    solution: `<ul>
      <li>Logitech Flow / Unifying — если мышь и клавиатура Logitech.</li>
      <li>Microsoft Mouse without Borders — бесплатно, только Windows.</li>
      <li>Barrier / Synergy — открытый код, Windows + macOS + Linux.</li>
      <li>Apple Universal Control — Mac + iPad.</li>
      <li>Samsung Multi Control — телефон Samsung + ПК.</li>
    </ul>`
  },
  {
    id: 64, platform: "cross", tags: ["зеркало экрана", "screen mirror", "scrcpy", "airplay", "chromecast"],
    title: "Зеркалирование экрана",
    status: "possible", statusText: "Есть",
    desc: "Показать экран телефона/планшета на компьютере или ТВ.",
    solution: `<ul>
      <li>Android → Windows/Linux/Mac: <strong>scrcpy</strong> (лучшее качество).</li>
      <li>iPhone → Mac: встроено (AirPlay или кабель).</li>
      <li>iPhone → Windows: сторонние AirPlay-приёмники.</li>
      <li>На телевизор: AirPlay, Chromecast, Miracast, Smart View (Samsung).</li>
    </ul>`
  },
  {
    id: 65, platform: "cross", tags: ["мессенджер", "telegram", "whatsapp", "один аккаунт", "везде"],
    title: "Единый мессенджер на всех устройствах",
    status: "possible", statusText: "Есть",
    desc: "Один аккаунт работает везде.",
    solution: `<ul>
      <li>Telegram, WhatsApp, Signal, Discord — отлично работают на телефонах, планшетах, Windows, macOS, в браузере.</li>
      <li>Для SMS: Google Messages for Web, Phone Link, iMessage (только внутри Apple).</li>
    </ul>`
  },

  // ========== Software ==========
  {
    id: 70, platform: "software", tags: ["localsend", "передача файлов", "программа"],
    title: "LocalSend — лучшая программа для передачи файлов",
    status: "possible", statusText: "Рекомендуется",
    desc: "Бесплатная, без интернета, открытый код, все платформы.",
    solution: `Скачай с <a href="https://localsend.org" target="_blank">localsend.org</a> на все свои устройства. Устройства должны быть в одной Wi-Fi сети. Выбираешь файл → отправляешь на нужное устройство. Работает быстро и без регистрации.`
  },
  {
    id: 71, platform: "software", tags: ["scrcpy", "управление android", "зеркало", "программа"],
    title: "scrcpy — управление Android с компьютера",
    status: "possible", statusText: "Рекомендуется",
    desc: "Бесплатная утилита с отличным качеством изображения и низкой задержкой.",
    solution: `<ul>
      <li>Скачай с GitHub: Genymobile/scrcpy.</li>
      <li>Включи отладку по USB на Android.</li>
      <li>Подключи кабель (или настрой беспроводной режим).</li>
      <li>Запусти scrcpy — экран телефона появится на компьютере, можно управлять мышью и клавиатурой.</li>
    </ul>`
  },
  {
    id: 72, platform: "software", tags: ["powertoys", "windows", "зоны", "fancyzones", "утилиты"],
    title: "Microsoft PowerToys",
    status: "possible", statusText: "Рекомендуется",
    desc: "Набор бесплатных утилит от Microsoft для Windows.",
    solution: `Скачай из Microsoft Store или с GitHub. Самые полезные: FancyZones (зоны окон), PowerToys Run (быстрый запуск), Color Picker, Text Extractor, Always on Top.`
  },
  {
    id: 73, platform: "software", tags: ["altstore", "sideload", "ipa", "ios"],
    title: "AltStore — установка IPA на iOS",
    status: "possible", statusText: "Рекомендуется",
    desc: "Самый популярный легальный способ ставить приложения вне App Store.",
    solution: `Скачай AltServer с <a href="https://altstore.io" target="_blank">altstore.io</a>, установи на компьютер, подключи iPhone и поставь AltStore. Дальше через него ставишь любые .ipa.`
  },
  {
    id: 74, platform: "software", tags: ["kde connect", "связь", "уведомления", "android", "linux", "windows"],
    title: "KDE Connect",
    status: "possible", statusText: "Рекомендуется",
    desc: "Связывает Android с компьютером (особенно хорошо с Linux, есть и на Windows/macOS).",
    solution: `Установи KDE Connect на телефон и на компьютер. Можно передавать файлы, видеть уведомления, управлять медиа, использовать телефон как тачпад и многое другое.`
  }
];