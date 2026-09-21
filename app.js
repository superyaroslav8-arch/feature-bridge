const data = {
  ios: [
    {
      title: "Скачивание приложений из браузера (Sideloading)",
      status: "partial",
      statusText: "Частично",
      desc: "Apple не даёт свободно ставить приложения вне App Store (кроме ЕС). Полностью обойти это системно невозможно через сайт.",
      solution: `<strong>1. AltStore (самый популярный способ)</strong>
        <ul>
          <li>Скачай <a href="https://altstore.io" target="_blank">AltServer</a> на компьютер (Windows / Mac).</li>
          <li>Установи iTunes (Windows) или убедись, что Finder работает (Mac).</li>
          <li>Подключи iPhone/iPad кабелем, доверься компьютеру.</li>
          <li>Запусти AltServer → Install AltStore → выбери устройство.</li>
          <li>На iPhone появится AltStore. Открой его, войди в Apple ID (лучше создать отдельный).</li>
          <li>Через AltStore можно ставить любые .ipa файлы. Раз в 7 дней нужно обновлять через компьютер или через Wi-Fi (если AltServer запущен).</li>
        </ul>
        <strong>2. TrollStore (постоянная установка без срока)</strong>
        <ul>
          <li>Работает только на определённых версиях iOS (обычно 14.0 – 16.6.1, 17.0 и некоторые 15.x–16.x).</li>
          <li>Проверь совместимость на <a href="https://ios.cfw.guide" target="_blank">ios.cfw.guide</a>.</li>
          <li>Установка через TrollInstaller или другие эксплойты (инструкции зависят от точной версии iOS).</li>
        </ul>
        <strong>3. ЕС (iOS 17.4+)</strong>
        <ul>
          <li>В Европейском Союзе можно ставить сторонние магазины (AltStore PAL и др.) напрямую.</li>
        </ul>
        <strong>Важно:</strong> Использование сторонних сертификатов и enterprise-профилей несёт риск бана Apple ID и безопасности.`
    },
    {
      title: "Разделённый экран (Split Screen)",
      status: "impossible",
      statusText: "Невозможно на iPhone",
      desc: "На iPhone до сих пор нет нативного split-screen. На iPad — есть полноценный.",
      solution: `<strong>iPad (работает официально):</strong>
        <ul>
          <li>Открой приложение → свайп вверх, чтобы показать Dock.</li>
          <li>Зажми второе приложение в Dock и перетащи его к краю экрана.</li>
          <li>Или: открой первое приложение → свайп от правого края → Slide Over → перетащи вниз для Split View.</li>
          <li>Stage Manager (iPadOS 16+): Настройки → Многозадачность → Stage Manager. Можно выносить окна на внешний монитор.</li>
        </ul>
        <strong>iPhone:</strong>
        <ul>
          <li>Только Picture-in-Picture (видео) и быстрое переключение через App Switcher.</li>
          <li>Сторонние приложения с плавающими окнами почти не работают из-за ограничений iOS.</li>
        </ul>`
    },
    {
      title: "Обратная беспроводная зарядка",
      status: "impossible",
      statusText: "Невозможно",
      desc: "iPhone умеет только принимать зарядку (MagSafe / Qi), но не отдавать её другим устройствам.",
      solution: `<strong>Что делать:</strong>
        <ul>
          <li>Использовать внешний пауэрбанк с MagSafe (Anker, Belkin, Baseus и т.д.).</li>
          <li>Обычный powerbank + кабель.</li>
          <li>Аппаратная функция — программно добавить нельзя ни на одном iPhone.</li>
        </ul>`
    },
    {
      title: "Desktop Mode (как Samsung DeX)",
      status: "impossible",
      statusText: "Невозможно на iPhone",
      desc: "iPhone не умеет превращаться в полноценный ПК при подключении к монитору.",
      solution: `<strong>iPad (максимально близко):</strong>
        <ul>
          <li>Подключи iPad к монитору через USB-C / HDMI-адаптер.</li>
          <li>Включи Stage Manager (Настройки → Многозадачность и жесты → Stage Manager).</li>
          <li>Можно открывать несколько окон, перетаскивать, менять размер.</li>
        </ul>
        <strong>iPhone:</strong>
        <ul>
          <li>Только зеркалирование экрана (AirPlay или кабель). Полноценного Desktop Mode нет.</li>
        </ul>`
    },
    {
      title: "Клонирование приложений (два аккаунта)",
      status: "partial",
      statusText: "Частично",
      desc: "Нативного Dual Apps / App Twin на iOS нет.",
      solution: `<strong>Рабочие способы:</strong>
        <ul>
          <li><strong>Telegram:</strong> официально поддерживает несколько аккаунтов в одном приложении (Настройки → Добавить аккаунт).</li>
          <li><strong>WhatsApp / другие:</strong> использовать веб-версию в Safari + «Добавить на экран Домой» как отдельное приложение.</li>
          <li>Создать второй Apple ID и использовать его через «Выйти из Apple ID» (очень неудобно).</li>
          <li>На jailbreak — твики вроде Parallel Space / Dual App (рискованно).</li>
        </ul>`
    },
    {
      title: "Гостевой профиль / несколько пользователей",
      status: "impossible",
      statusText: "Невозможно",
      desc: "iOS не поддерживает гостевые аккаунты или несколько пользователей на одном устройстве.",
      solution: `<strong>Ближайшие варианты:</strong>
        <ul>
          <li><strong>Guided Access:</strong> Настройки → Универсальный доступ → Guided Access. Можно ограничить устройство одним приложением и поставить пароль.</li>
          <li><strong>Screen Time:</strong> можно ставить ограничения на приложения и контент.</li>
          <li>Полный выход из Apple ID + создание нового (теряются все данные и покупки).</li>
        </ul>`
    },
    {
      title: "Полный доступ к файловой системе",
      status: "partial",
      statusText: "Частично",
      desc: "Файлы ограничены песочницей приложений. Полного root-доступа нет.",
      solution: `<strong>Что доступно:</strong>
        <ul>
          <li>Приложение «Файлы» — видит iCloud Drive, «На моём iPhone», подключённые облака (Google Drive, Dropbox и т.д.).</li>
          <li>Через компьютер (Finder на Mac / iTunes/Finder на Windows) можно видеть больше папок при подключении.</li>
          <li>Полный доступ к системе — только через jailbreak (не рекомендуется для большинства пользователей).</li>
        </ul>`
    },
    {
      title: "Отдельные регуляторы громкости",
      status: "possible",
      statusText: "Есть / улучшается",
      desc: "В новых версиях iOS управление громкостью стало гибче.",
      solution: `<strong>Как настроить:</strong>
        <ul>
          <li>Настройки → Звуки и тактильные сигналы.</li>
          <li>Можно отдельно регулировать громкость звонка и уведомлений.</li>
          <li>В Control Center (свайп вниз справа) — медиа-громкость.</li>
          <li>В iOS 27+ появились дополнительные разделения (ближе к Android).</li>
        </ul>`
    }
  ],

  android: [
    {
      title: "Настоящий AirDrop + Handoff + Continuity",
      status: "partial",
      statusText: "Частично",
      desc: "Полной seamless-экосистемы как у Apple нет, но близкие аналоги есть.",
      solution: `<strong>1. Quick Share (Google)</strong>
        <ul>
          <li>Настройки → Google → Устройства и общий доступ → Quick Share.</li>
          <li>Включи «Все» или «Контакты». Работает с другими Android и частично с iPhone (на новых версиях).</li>
        </ul>
        <strong>2. Samsung</strong>
        <ul>
          <li>Quick Share + SmartThings + Multi Control (управление ПК с телефона).</li>
          <li>DeX — полноценный desktop-режим.</li>
        </ul>
        <strong>3. Универсальные инструменты</strong>
        <ul>
          <li><a href="https://localsend.org" target="_blank">LocalSend</a> — бесплатно, без интернета, кроссплатформенно.</li>
          <li>Snapdrop.net (в браузере).</li>
          <li>KDE Connect / GSConnect.</li>
          <li>Windows Phone Link / Link to Windows.</li>
        </ul>
        <strong>Clipboard между устройствами:</strong> Pushbullet, Join, Clipboard Sync.`
    },
    {
      title: "iMessage-уровень мессенджера",
      status: "partial",
      statusText: "Частично",
      desc: "RCS сильно улучшился, но до iMessage по удобству ещё есть разрыв.",
      solution: `<strong>Как включить лучший вариант:</strong>
        <ul>
          <li>Установи <strong>Google Messages</strong> как приложение по умолчанию.</li>
          <li>Настройки Messages → Чат-функции (RCS) → Включить.</li>
          <li>Убедись, что у собеседника тоже RCS (зелёные/синие галочки).</li>
          <li>Для максимальной совместимости с iPhone — оба должны иметь RCS.</li>
        </ul>
        Альтернативы с лучшим UX: Telegram, Signal, WhatsApp.`
    },
    {
      title: "LiDAR / точное 3D-сканирование",
      status: "impossible",
      statusText: "Невозможно",
      desc: "LiDAR — это физический датчик. На Android его нет в обычных смартфонах.",
      solution: `<strong>Что можно использовать вместо:</strong>
        <ul>
          <li>Приложения с ToF / стереокамерами (Measure от Google, AR Ruler, Magic Measure).</li>
          <li>На некоторых флагманах (Samsung, Xiaomi) есть улучшенные AR-измерения, но точность заметно ниже LiDAR.</li>
          <li>Аппаратно добавить LiDAR нельзя.</li>
        </ul>`
    },
    {
      title: "UWB Precision Finding (как AirTag)",
      status: "partial",
      statusText: "Частично",
      desc: "UWB есть только на части флагманов.",
      solution: `<strong>Какие устройства поддерживают UWB:</strong>
        <ul>
          <li>Google Pixel 6 Pro и новее (Pro-модели).</li>
          <li>Samsung Galaxy S21 Ultra / S22 Ultra / S23 Ultra / S24 Ultra / S25 Ultra и некоторые Fold/Flip.</li>
          <li>Отдельные модели Xiaomi, OnePlus, Honor.</li>
        </ul>
        <strong>Как проверить:</strong> ищи «UWB» или «Ultra Wideband» в характеристиках или в Настройках → Подключения.
        <strong>Трекеры:</strong> Samsung SmartTag+ / Galaxy SmartTag 2, Moto Tag — работают с UWB только на поддерживаемых телефонах. На остальных — обычный Bluetooth.`
    },
    {
      title: "Live Activities / Dynamic Island",
      status: "partial",
      statusText: "Частично",
      desc: "Похожие функции есть, но выглядят и работают по-разному.",
      solution: `<strong>Samsung:</strong>
        <ul>
          <li>Now Bar (на экране блокировки и Always On Display).</li>
          <li>Live Notifications / Edge Panels.</li>
        </ul>
        <strong>Google Pixel:</strong>
        <ul>
          <li>At a Glance на экране блокировки и главном экране.</li>
          <li>Ongoing notifications в статус-баре.</li>
        </ul>
        <strong>Другие:</strong> сторонние лаунчеры (Niagara, Nova) + виджеты могут приблизить эффект Dynamic Island.`
    },
    {
      title: "Полный бэкап «как клон» (уровень iCloud)",
      status: "partial",
      statusText: "Частично",
      desc: "Android-бэкапы стали лучше, но всё ещё не идеальны как у Apple.",
      solution: `<strong>Лучшие способы:</strong>
        <ul>
          <li><strong>Samsung:</strong> Smart Switch (через кабель или Wi-Fi) — один из самых полных переносов.</li>
          <li><strong>Google:</strong> Настройки → Google → Резервное копирование. Включить всё.</li>
          <li><strong>Xiaomi / HyperOS:</strong> Mi Mover / встроенный перенос.</li>
          <li>Сторонние: Swift Backup (нужен root для полного), Migrate, Helium (ограниченно без root).</li>
        </ul>
        Полного «клона» как при восстановлении из iCloud пока нет.`
    },
    {
      title: "Face ID-уровень безопасности биометрии",
      status: "partial",
      statusText: "Частично",
      desc: "3D Face Unlock есть не у всех производителей.",
      solution: `<strong>Где лучше всего:</strong>
        <ul>
          <li>Google Pixel (особенно новые) — один из лучших 3D Face Unlock.</li>
          <li>Некоторые флагманы Samsung, Xiaomi, Oppo — есть 3D-сканеры.</li>
          <li>Большинство Android используют 2D-камеру (менее безопасно в темноте и при фото).</li>
        </ul>
        Рекомендация: всегда оставляй отпечаток пальца как основной или запасной метод.`
    },
    {
      title: "Приватность и контроль разрешений уровня Apple",
      status: "partial",
      statusText: "Частично",
      desc: "Android даёт больше свободы, но контроль сложнее и менее прозрачный.",
      solution: `<strong>Как приблизиться к уровню Apple:</strong>
        <ul>
          <li>Настройки → Приложения → Специальный доступ / Разрешения приложений — проверяй каждое.</li>
          <li>Используй <strong>Permission Manager</strong> или App Ops (если доступно на прошивке).</li>
          <li>Для максимальной приватности: GrapheneOS или CalyxOS (на Pixel).</li>
          <li>Отключай ненужные разрешения, особенно геолокацию, микрофон и камеру в фоне.</li>
        </ul>`
    }
  ]
};

function setPlatform(platform) {
  document.getElementById('btn-ios').classList.toggle('active', platform === 'ios');
  document.getElementById('btn-android').classList.toggle('active', platform === 'android');

  const list = data[platform];
  const container = document.getElementById('content');

  container.innerHTML = list.map(item => `
    <div class="feature">
      <h2>${item.title} <span class="badge ${item.status}">${item.statusText}</span></h2>
      <p>${item.desc}</p>
      <div class="solution">${item.solution}</div>
    </div>
  `).join('');
}

// Init
setPlatform('ios');