const data = {
  ios: [
    {
      title: "Скачивание приложений из браузера (Sideloading)",
      status: "partial",
      statusText: "Частично",
      desc: "Apple не даёт свободно ставить приложения вне App Store (кроме ЕС). Полностью обойти это системно невозможно.",
      solution: `<strong>Рабочие способы:</strong>
        <ul>
          <li><a href="https://altstore.io" target="_blank">AltStore</a> + AltServer (через компьютер) — самый популярный метод.</li>
          <li><a href="https://github.com/TrollStore" target="_blank">TrollStore</a> (на поддерживаемых версиях iOS) — постоянная установка без срока.</li>
          <li>В ЕС (с iOS 17.4+) — сторонние магазины (AltStore PAL и др.).</li>
          <li>Enterprise-сертификаты и сторонние IPA-установщики (риск бана и безопасности).</li>
        </ul>
        Через обычный сайт установить системно нельзя — это ограничение Apple.`
    },
    {
      title: "Разделённый экран (Split Screen)",
      status: "impossible",
      statusText: "Невозможно",
      desc: "На iPhone до сих пор нет нативного split-screen. На iPad — есть.",
      solution: `<strong>Что можно сделать:</strong>
        <ul>
          <li>Использовать Picture-in-Picture + Slide Over на iPad.</li>
          <li>Сторонние приложения с плавающими окнами (ограниченно).</li>
          <li>Ждать — Apple может добавить в будущих версиях, особенно на больших экранах.</li>
        </ul>`
    },
    {
      title: "Обратная беспроводная зарядка",
      status: "impossible",
      statusText: "Невозможно",
      desc: "iPhone умеет принимать зарядку, но не отдавать её другим устройствам.",
      solution: `Аппаратная функция. Программным путём добавить нельзя. Единственный вариант — внешний пауэрбанк с MagSafe или обычный powerbank.`
    },
    {
      title: "Desktop Mode (как DeX)",
      status: "impossible",
      statusText: "Невозможно",
      desc: "iPhone не умеет превращаться в полноценный ПК при подключении к монитору.",
      solution: `Можно использовать Stage Manager на iPad + внешний монитор. На iPhone — только зеркалирование экрана.`
    },
    {
      title: "Клонирование приложений (два аккаунта)",
      status: "partial",
      statusText: "Частично",
      desc: "Нативного Dual Apps нет.",
      solution: `<strong>Решения:</strong>
        <ul>
          <li>Использовать веб-версии мессенджеров в Safari.</li>
          <li>Сторонние клиенты (Telegram X, Web-версии).</li>
          <li>На jailbreak — инструменты вроде Parallel Space аналоги.</li>
        </ul>`
    },
    {
      title: "Гостевой профиль / несколько пользователей",
      status: "impossible",
      statusText: "Невозможно",
      desc: "iOS не поддерживает гостевые аккаунты.",
      solution: `Единственный безопасный вариант — Screen Time + Guided Access или полный выход из Apple ID (очень неудобно).`
    },
    {
      title: "Полный доступ к файловой системе",
      status: "partial",
      statusText: "Частично",
      desc: "Файлы ограничены песочницей приложений.",
      solution: `Приложение «Файлы» + облачные сервисы. Через компьютер (Finder) доступ чуть шире. Полный root-доступ только через jailbreak.`
    },
    {
      title: "Отдельные регуляторы громкости",
      status: "possible",
      statusText: "Есть / улучшается",
      desc: "В новых iOS уже появились более гибкие настройки громкости.",
      solution: `Проверьте Настройки → Звуки и тактильные сигналы. В iOS 27+ управление стало ближе к Android.`
    }
  ],

  android: [
    {
      title: "Настоящий AirDrop + Handoff + Continuity",
      status: "partial",
      statusText: "Частично",
      desc: "Экосистема Apple работает seamless. На Android — близкие аналоги, но не идеально.",
      solution: `<strong>Лучшие решения:</strong>
        <ul>
          <li><strong>Quick Share</strong> (бывший Nearby Share) — теперь частично совместим с AirDrop на новых устройствах.</li>
          <li>Samsung: SmartThings + DeX + Multi Control.</li>
          <li>Сторонние: Snapdrop, LocalSend, KDE Connect, Windows Phone Link.</li>
          <li>Полный Handoff (копировать на одном — вставить на другом) — через clipboard-синхронизаторы (Pushbullet, Join и т.п.).</li>
        </ul>`
    },
    {
      title: "iMessage-уровень мессенджера",
      status: "partial",
      statusText: "Частично",
      desc: "RCS сильно улучшился, но до iMessage ещё есть разрыв.",
      solution: `Google Messages с RCS + end-to-end. Для максимальной совместимости с iPhone — RCS должен быть включён у обоих. Альтернативы: Telegram, Signal, WhatsApp.`
    },
    {
      title: "LiDAR / точное 3D-сканирование",
      status: "impossible",
      statusText: "Невозможно",
      desc: "LiDAR — это железо. На Android его нет в потребительских смартфонах.",
      solution: `Можно использовать камерные ToF-сенсоры + приложения для измерения (Measure, AR-приложения). Качество заметно ниже LiDAR.`
    },
    {
      title: "UWB Precision Finding (как AirTag)",
      status: "partial",
      statusText: "Частично",
      desc: "UWB есть только на части флагманов (Pixel Pro, Galaxy S Ultra и некоторые другие).",
      solution: `<ul>
          <li>Проверьте, есть ли UWB в вашем устройстве (в характеристиках).</li>
          <li>Samsung SmartTag+ / Moto Tag работают с UWB на поддерживаемых телефонах.</li>
          <li>На большинстве Android — только Bluetooth-трекеры.</li>
        </ul>`
    },
    {
      title: "Live Activities / Dynamic Island",
      status: "partial",
      statusText: "Частично",
      desc: "На Android есть похожие вещи, но реализация разная.",
      solution: `Samsung — Now Bar / Live Notifications. Pixel — At a Glance + Ongoing notifications. Сторонние лаунчеры и виджеты могут приблизить эффект.`
    },
    {
      title: "Полный бэкап «как клон» (уровень iCloud)",
      status: "partial",
      statusText: "Частично",
      desc: "Android-бэкапы стали лучше, но всё ещё не идеальны.",
      solution: `<ul>
          <li>Google One / автоматический бэкап.</li>
          <li>Samsung Smart Switch — один из лучших.</li>
          <li>Сторонние: Swift Backup (root), Migrate, Helium (ограниченно).</li>
        </ul>`
    },
    {
      title: "Face ID-уровень безопасности биометрии",
      status: "partial",
      statusText: "Частично",
      desc: "3D Face Unlock есть у части производителей, но не везде.",
      solution: `Лучшие реализации — у Pixel и некоторых флагманов Samsung/ Xiaomi. В остальном — 2D-камеры + fingerprint.`
    },
    {
      title: "Приватность и контроль разрешений уровня Apple",
      status: "partial",
      statusText: "Частично",
      desc: "Android даёт больше свободы, но контроль сложнее.",
      solution: `Используйте Permission Manager, App Ops (если доступно), GrapheneOS / CalyxOS для максимальной приватности. На стоке — внимательно проверяйте разрешения.`
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