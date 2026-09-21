const data = {
  ios: [
    {
      title: "Скачивание приложений вне App Store (Sideloading)",
      status: "partial",
      statusText: "Частично",
      desc: "Apple ограничивает установку приложений вне App Store. Полностью обойти системно нельзя.",
      solution: `<strong>1. AltStore (рекомендуется)</strong>
        <ul>
          <li>Скачай AltServer с <a href="https://altstore.io" target="_blank">altstore.io</a> на компьютер.</li>
          <li>Windows: установи iTunes. Mac: используй Finder.</li>
          <li>Подключи iPhone/iPad кабелем → доверься компьютеру.</li>
          <li>AltServer → Install AltStore → выбери устройство.</li>
          <li>На устройстве открой AltStore → войди в Apple ID (лучше отдельный).</li>
          <li>Ставь любые .ipa. Раз в 7 дней обновляй через компьютер или Wi-Fi (AltServer должен быть запущен).</li>
        </ul>
        <strong>2. TrollStore (без срока действия)</strong>
        <ul>
          <li>Только на поддерживаемых версиях iOS (в основном 14–16.6.1 и некоторые 17.0).</li>
          <li>Проверь совместимость: <a href="https://ios.cfw.guide" target="_blank">ios.cfw.guide</a>.</li>
          <li>Установка через эксплойты (TrollInstaller и аналоги) — инструкция зависит от точной версии.</li>
        </ul>
        <strong>3. Европейский Союз (iOS 17.4+)</strong>
        <ul>
          <li>Можно ставить сторонние магазины напрямую (AltStore PAL и др.).</li>
        </ul>`
    },
    {
      title: "Разделённый экран (Split View)",
      status: "partial",
      statusText: "Только iPad",
      desc: "На iPhone нативного split-screen нет. На iPad — полноценный.",
      solution: `<strong>iPad:</strong>
        <ul>
          <li>Открой приложение → свайп вверх (Dock) → зажми второе приложение и перетащи к краю экрана.</li>
          <li>Или: свайп от правого края → Slide Over → потяни вниз для Split View.</li>
          <li>Stage Manager: Настройки → Многозадачность и жесты → Stage Manager. Окна можно выносить на внешний монитор.</li>
        </ul>
        <strong>iPhone:</strong>
        <ul>
          <li>Только Picture-in-Picture и App Switcher. Полноценного split-screen нет.</li>
        </ul>`
    },
    {
      title: "Обратная беспроводная зарядка",
      status: "impossible",
      statusText: "Невозможно",
      desc: "iPhone принимает зарядку, но не отдаёт её другим устройствам.",
      solution: `Аппаратная функция. Программно добавить нельзя.<br>
        Используй MagSafe-пауэрбанк или обычный powerbank.`
    },
    {
      title: "Desktop Mode (как DeX)",
      status: "partial",
      statusText: "Только iPad",
      desc: "iPhone не умеет работать как ПК. iPad — ближе всего через Stage Manager.",
      solution: `<strong>iPad:</strong>
        <ul>
          <li>Подключи к монитору (USB-C / HDMI).</li>
          <li>Включи Stage Manager.</li>
          <li>Можно открывать несколько окон, менять размер, работать почти как на Mac.</li>
        </ul>
        <strong>iPhone:</strong> только зеркалирование экрана.`
    },
    {
      title: "Клонирование приложений (два аккаунта)",
      status: "partial",
      statusText: "Частично",
      desc: "Нативного Dual Apps нет.",
      solution: `<ul>
          <li>Telegram — официально поддерживает несколько аккаунтов.</li>
          <li>WhatsApp и другие: веб-версия в Safari + «На экран Домой».</li>
          <li>Второй Apple ID (очень неудобно).</li>
          <li>Jailbreak-твики (рискованно).</li>
        </ul>`
    },
    {
      title: "Гостевой режим / несколько пользователей",
      status: "impossible",
      statusText: "Невозможно",
      desc: "iOS не поддерживает несколько пользователей.",
      solution: `<ul>
          <li>Guided Access (Настройки → Универсальный доступ) — ограничить одним приложением.</li>
          <li>Screen Time — ограничения по приложениям и времени.</li>
        </ul>`
    },
    {
      title: "Полный доступ к файлам",
      status: "partial",
      statusText: "Частично",
      desc: "Песочница приложений ограничивает доступ.",
      solution: `<ul>
          <li>Приложение «Файлы» + облака.</li>
          <li>Через Finder (Mac) / проводник при подключении к ПК доступ шире.</li>
          <li>Полный root — только jailbreak.</li>
        </ul>`
    },
    {
      title: "Отдельные регуляторы громкости",
      status: "possible",
      statusText: "Есть",
      desc: "В новых iOS управление стало гибче.",
      solution: `Настройки → Звуки и тактильные сигналы. В Control Center — медиа. В iOS 27+ разделение улучшилось.`
    },
    {
      title: "NFC-платежи (в России)",
      status: "impossible",
      statusText: "Не работает",
      desc: "Apple Pay с российскими картами не работает.",
      solution: `Официально невозможно. Альтернативы: карта в других сервисах, QR-оплата, Mir Pay на Android.`
    }
  ],

  android: [
    {
      title: "AirDrop + Handoff + Continuity",
      status: "partial",
      statusText: "Частично",
      desc: "Полной экосистемы как у Apple нет, но близкие аналоги есть.",
      solution: `<strong>Quick Share (Google)</strong>
        <ul>
          <li>Настройки → Google → Устройства и общий доступ → Quick Share.</li>
          <li>Поставь «Все» или «Контакты». Частично работает с iPhone на новых версиях.</li>
        </ul>
        <strong>Samsung</strong>
        <ul>
          <li>Quick Share + SmartThings + Multi Control + DeX.</li>
        </ul>
        <strong>Универсальные</strong>
        <ul>
          <li><a href="https://localsend.org" target="_blank">LocalSend</a> — лучший бесплатный кроссплатформенный вариант.</li>
          <li>Snapdrop.net, KDE Connect, Windows Phone Link.</li>
        </ul>`
    },
    {
      title: "RCS / мессенджер уровня iMessage",
      status: "partial",
      statusText: "Частично",
      desc: "RCS сильно улучшился, но не идеален.",
      solution: `<ul>
          <li>Google Messages → сделать приложением по умолчанию.</li>
          <li>Настройки → Чат-функции (RCS) → Включить.</li>
          <li>У собеседника тоже должен быть RCS.</li>
          <li>Альтернативы: Telegram, Signal, WhatsApp.</li>
        </ul>`
    },
    {
      title: "LiDAR / точное 3D-сканирование",
      status: "impossible",
      statusText: "Невозможно",
      desc: "LiDAR — железо. На Android его нет.",
      solution: `Используй ToF-камеры + приложения Measure, AR Ruler и аналоги. Точность ниже.`
    },
    {
      title: "UWB Precision Finding",
      status: "partial",
      statusText: "Только флагманы",
      desc: "UWB есть не на всех устройствах.",
      solution: `<strong>Поддерживают:</strong>
        <ul>
          <li>Pixel 6 Pro и новее (Pro).</li>
          <li>Galaxy S21 Ultra и новее Ultra / некоторые Fold.</li>
          <li>Отдельные Xiaomi, OnePlus, Honor.</li>
        </ul>
        Проверь в характеристиках «UWB». Трекеры: SmartTag+, Moto Tag.`
    },
    {
      title: "Live Activities / Dynamic Island",
      status: "partial",
      statusText: "Частично",
      desc: "Похожие функции есть у производителей.",
      solution: `<ul>
          <li>Samsung: Now Bar + Live Notifications.</li>
          <li>Pixel: At a Glance + Ongoing notifications.</li>
          <li>Сторонние лаунчеры и виджеты могут приблизить эффект.</li>
        </ul>`
    },
    {
      title: "Полный бэкап «как клон»",
      status: "partial",
      statusText: "Частично",
      desc: "Лучше, чем раньше, но не как iCloud.",
      solution: `<ul>
          <li>Samsung Smart Switch — один из лучших.</li>
          <li>Google One / резервное копирование.</li>
          <li>Xiaomi Mi Mover, встроенные средства других брендов.</li>
          <li>Swift Backup (root), Migrate.</li>
        </ul>`
    },
    {
      title: "Клонирование приложений",
      status: "possible",
      statusText: "Есть",
      desc: "На большинстве Android есть Dual Apps / Parallel Apps.",
      solution: `<ul>
          <li>Samsung: Настройки → Доп. функции → Dual Messenger.</li>
          <li>Xiaomi / HyperOS: Dual Apps.</li>
          <li>OnePlus, Realme, Oppo — Parallel Apps / App Cloner.</li>
          <li>Сторонние: Island, Shelter, Parallel Space.</li>
        </ul>`
    },
    {
      title: "Гостевой режим / несколько пользователей",
      status: "possible",
      statusText: "Есть",
      desc: "На большинстве Android есть.",
      solution: `Настройки → Система → Несколько пользователей (или Пользователи и аккаунты). Можно создать гостя или второго пользователя.`
    },
    {
      title: "Обратная беспроводная зарядка",
      status: "partial",
      statusText: "На многих флагманах",
      desc: "Есть у Samsung, Xiaomi, OnePlus, Google (на части моделей) и др.",
      solution: `Обычно называется Wireless PowerShare / Battery Share. Включается в быстрых настройках или в меню батареи. Клади устройство на заднюю крышку.`
    },
    {
      title: "Desktop Mode (DeX и аналоги)",
      status: "possible",
      statusText: "Есть",
      desc: "Samsung DeX, и теперь нативный режим в Android на многих устройствах.",
      solution: `<ul>
          <li>Samsung: DeX — подключи к монитору или беспроводно.</li>
          <li>В новых Android / Pixel / других — Desktop Mode при подключении к дисплею.</li>
          <li>Сторонние: scrcpy (через компьютер), SecondScreen.</li>
        </ul>`
    }
  ],

  windows: [
    {
      title: "Синхронизация с телефоном (Phone Link)",
      status: "possible",
      statusText: "Есть",
      desc: "Официальный способ связать Android или iPhone с Windows.",
      solution: `<strong>Android:</strong>
        <ul>
          <li>Установи «Связь с Windows» (Link to Windows) на телефон.</li>
          <li>На ПК открой «Связь с телефоном» (Phone Link).</li>
          <li>Можно видеть уведомления, SMS, звонки, фото, управлять приложениями (на Samsung — почти полный доступ).</li>
        </ul>
        <strong>iPhone:</strong>
        <ul>
          <li>Поддержка ограничена (уведомления, звонки, SMS через iCloud в новых версиях Windows).</li>
          <li>Полный функционал пока слабее, чем с Android.</li>
        </ul>`
    },
    {
      title: "Быстрая передача файлов (аналог AirDrop)",
      status: "possible",
      statusText: "Есть",
      desc: "Несколько хороших способов.",
      solution: `<ul>
          <li><a href="https://localsend.org" target="_blank">LocalSend</a> — лучший бесплатный вариант (Windows, Android, iOS, macOS, Linux).</li>
          <li>Snapdrop.net в браузере.</li>
          <li>Nearby Share / Quick Share (если есть Android-телефон рядом).</li>
          <li>Кэш (OneDrive, Google Drive) или общая папка по сети.</li>
        </ul>`
    },
    {
      title: "Непрерывность работы (Handoff-аналог)",
      status: "partial",
      statusText: "Частично",
      desc: "Полного Handoff как у Apple нет.",
      solution: `<ul>
          <li>Phone Link + приложения Microsoft (Edge, Office) синхронизируют вкладки и документы.</li>
          <li>Chrome / Edge — синхронизация вкладок и паролей.</li>
          <li>Clipboard History (Win+V) + облачный буфер в аккаунте Microsoft.</li>
        </ul>`
    },
    {
      title: "Управление телефоном с ПК",
      status: "possible",
      statusText: "Есть",
      desc: "Особенно хорошо работает с Samsung.",
      solution: `<ul>
          <li>Phone Link / Your Phone — базовый уровень.</li>
          <li>Samsung: полное управление через DeX и Multi Control.</li>
          <li>scrcpy — бесплатное зеркалирование и управление Android с ПК (через USB или Wi-Fi).</li>
          <li>Для iPhone: ограниченно (QuickTime на Mac, сторонние инструменты на Windows).</li>
        </ul>`
    },
    {
      title: "Виртуальные рабочие столы и многозадачность",
      status: "possible",
      statusText: "Есть",
      desc: "Windows имеет мощную многозадачность.",
      solution: `<ul>
          <li>Win+Tab — виртуальные рабочие столы.</li>
          <li>Snap Layouts (наведи на кнопку развернуть) — раскладки окон.</li>
          <li>PowerToys (FancyZones) — ещё более гибкие зоны.</li>
        </ul>`
    },
    {
      title: "Биометрия (Windows Hello)",
      status: "possible",
      statusText: "Есть",
      desc: "Лицо или отпечаток.",
      solution: `Параметры → Учётные записи → Варианты входа → Windows Hello. Нужна совместимая камера или сканер.`
    }
  ],

  cross: [
    {
      title: "Передача файлов между любыми устройствами",
      status: "possible",
      statusText: "Есть",
      desc: "Лучшие кроссплатформенные решения.",
      solution: `<ul>
          <li><strong>LocalSend</strong> — бесплатно, без интернета, открытый код. Работает на Windows, macOS, Linux, Android, iOS.</li>
          <li>Snapdrop / Pairdrop — в браузере.</li>
          <li>KDE Connect (Android + Linux/Windows/macOS).</li>
          <li>Облака: Google Drive, OneDrive, Dropbox, iCloud.</li>
        </ul>`
    },
    {
      title: "Общий буфер обмена (Clipboard)",
      status: "partial",
      statusText: "Частично",
      desc: "Можно синхронизировать текст и изображения между устройствами.",
      solution: `<ul>
          <li>Microsoft: облачный буфер (нужен аккаунт Microsoft) + Phone Link.</li>
          <li>Pushbullet, Join, Clipboard Sync.</li>
          <li>LocalSend тоже умеет отправлять текст.</li>
          <li>Между Apple-устройствами — встроенный Universal Clipboard.</li>
        </ul>`
    },
    {
      title: "Уведомления и звонки на компьютере",
      status: "possible",
      statusText: "Есть",
      desc: "Можно получать уведомления телефона на ПК.",
      solution: `<ul>
          <li>Windows + Android: Phone Link.</li>
          <li>Windows + iPhone: ограниченная поддержка в новых Windows.</li>
          <li>macOS + iPhone: Continuity (встроено).</li>
          <li>Кроссплатформенно: Pushbullet, KDE Connect, AirDroid.</li>
        </ul>`
    },
    {
      title: "Управление мышью/клавиатурой между устройствами",
      status: "possible",
      statusText: "Есть",
      desc: "Одна мышь и клавиатура на несколько устройств.",
      solution: `<ul>
          <li><strong>Logitech Flow / Unifying</strong> — если мышь Logitech.</li>
          <li><strong>Microsoft Mouse without Borders</strong> (бесплатно, только Windows).</li>
          <li><strong>Barrier</strong> / Synergy — открытый код, кроссплатформенно.</li>
          <li>Samsung Multi Control (телефон + ПК Samsung/Windows).</li>
          <li>Apple Universal Control (Mac + iPad).</li>
        </ul>`
    },
    {
      title: "Зеркалирование экрана",
      status: "possible",
      statusText: "Есть",
      desc: "Показать экран телефона/планшета на компьютере или телевизоре.",
      solution: `<ul>
          <li>Android → Windows: scrcpy (лучшее качество), Phone Link, Samsung DeX.</li>
          <li>iPhone → Mac: встроено (AirPlay / кабель).</li>
          <li>iPhone → Windows: сторонние (AirPlay-приёмники, платные/бесплатные).</li>
          <li>На телевизор: AirPlay, Chromecast, Miracast, Smart View.</li>
        </ul>`
    },
    {
      title: "Единый мессенджер и звонки",
      status: "possible",
      statusText: "Есть",
      desc: "Один аккаунт на всех устройствах.",
      solution: `<ul>
          <li>Telegram, WhatsApp, Signal, Discord — отлично работают на всех платформах.</li>
          <li>Для SMS: Google Messages for Web, Phone Link, iMessage (только Apple).</li>
        </ul>`
    }
  ]
};

function setPlatform(platform) {
  ['ios', 'android', 'windows', 'cross'].forEach(p => {
    const btn = document.getElementById('btn-' + p);
    if (btn) btn.classList.toggle('active', p === platform);
  });

  const list = data[platform] || [];
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