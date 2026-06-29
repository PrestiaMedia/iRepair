export const repairServices = {
  smartphones: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Wir finden schnell heraus, wo das Problem liegt und beraten Sie." },
    { title: "Display Reparatur", icon: "fas fa-mobile-alt", description: "Schneller Austausch von gesprungenen oder defekten Displays." },
    { title: "Akku Austausch", icon: "fas fa-battery-half", description: "Ihr Akku hält nicht mehr lange? Wir bauen einen neuen ein." },
    { title: "Ladebuchse", icon: "fas fa-plug", description: "Das Gerät lädt nicht mehr? Wir reparieren den Anschluss." },
    { title: "Hörmuschel / Lautsprecher", icon: "fas fa-volume-up", description: "Sie hören beim Telefonieren nichts mehr? Wir helfen." },
    { title: "Kamera", icon: "fas fa-camera", description: "Die Kamera fokussiert nicht oder das Glas ist kaputt?" },
    { title: "Backcover", icon: "fas fa-tools", description: "Wir tauschen zersplitterte Rückseiten professionell aus." },
    { title: "Wasserschaden", icon: "fas fa-tint", description: "Schnelle Hilfe bei Flüssigkeitsschäden zur Datenrettung." }
  ],
  tablets: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Wir analysieren den Defekt Ihres Tablets." },
    { title: "Display Reparatur", icon: "fas fa-tablet-alt", description: "Austausch von gebrochenem Glas oder defekten LCDs." },
    { title: "Akku Austausch", icon: "fas fa-battery-half", description: "Neuer Akku für längere Laufzeiten Ihres Tablets." },
    { title: "Ladebuchse", icon: "fas fa-plug", description: "Reparatur des Lade- oder USB-Ports." },
    { title: "Knöpfe & Schalter", icon: "fas fa-toggle-on", description: "Defekte Power- oder Lautstärke-Tasten werden getauscht." },
    { title: "Kamera", icon: "fas fa-camera", description: "Austausch defekter Front- oder Hauptkameras." },
    { title: "Wasserschaden", icon: "fas fa-tint", description: "Erste Hilfe bei Wasserschäden am Tablet." },
    { title: "Software Probleme", icon: "fas fa-laptop-code", description: "Hilfe bei Abstürzen, Boot-Loops oder Updates." }
  ],
  laptops: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Umfassende Diagnose von Hard- und Software-Fehlern." },
    { title: "Display Reparatur", icon: "fas fa-desktop", description: "Austausch von defekten Laptop-Displays." },
    { title: "Akku / Netzteil", icon: "fas fa-battery-half", description: "Wir tauschen defekte Akkus und prüfen das Netzteil." },
    { title: "Tastatur Reparatur", icon: "fas fa-keyboard", description: "Einzelne Tasten klemmen oder die Tastatur reagiert nicht?" },
    { title: "Festplatte / Datenrettung", icon: "fas fa-hdd", description: "Upgrade auf SSD oder Rettung wichtiger Daten." },
    { title: "Lüfterreinigung", icon: "fas fa-fan", description: "Ihr Laptop wird zu heiß oder laut? Wir reinigen das Kühlsystem." },
    { title: "Anschlüsse", icon: "fas fa-plug", description: "Reparatur von USB, HDMI oder Netzbuchsen." },
    { title: "Software & Viren", icon: "fas fa-shield-alt", description: "Virenentfernung und Neuinstallation des Betriebssystems." }
  ],
  spielekonsolen: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Wir prüfen, warum Ihre Konsole nicht mehr startet." },
    { title: "HDMI Port", icon: "fas fa-tv", description: "Kein Bild? Wir löten defekte HDMI-Anschlüsse neu ein." },
    { title: "Laufwerk", icon: "fas fa-compact-disc", description: "Spiele werden nicht mehr gelesen oder stecken fest?" },
    { title: "Überhitzung", icon: "fas fa-thermometer-half", description: "Reinigung und Erneuerung der Wärmeleitpaste." },
    { title: "Festplatte", icon: "fas fa-hdd", description: "Speicher-Upgrade oder Austausch einer defekten HDD/SSD." },
    { title: "Software Update", icon: "fas fa-sync", description: "Hilfe bei fehlgeschlagenen Updates oder Software-Fehlern." },
    { title: "Netzteil", icon: "fas fa-plug", description: "Die Konsole bekommt keinen Strom mehr?" },
    { title: "Wasserschaden", icon: "fas fa-tint", description: "Spezielle Reinigung bei Flüssigkeit in der Konsole." }
  ],
  controller: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Wir prüfen alle Tasten, Sticks und Funktionen." },
    { title: "Stick Drift", icon: "fas fa-gamepad", description: "Die Figur bewegt sich von alleine? Wir tauschen die Analog-Sticks." },
    { title: "Trigger / Tasten", icon: "fas fa-hand-pointer", description: "Schultertasten (L/R) oder Buttons klemmen?" },
    { title: "Akku Austausch", icon: "fas fa-battery-half", description: "Der Controller muss ständig ans Kabel? Ein neuer Akku hilft." },
    { title: "Ladebuchse", icon: "fas fa-plug", description: "Austausch des USB-Ports am Controller." },
    { title: "Verbindungsprobleme", icon: "fas fa-wifi", description: "Der Controller verbindet sich nicht mehr mit der Konsole?" },
    { title: "Gehäuse", icon: "fas fa-tools", description: "Austausch von defekten oder zerkratzten Gehäuseteilen." },
    { title: "Wasserschaden", icon: "fas fa-tint", description: "Reinigung nach umgekippten Getränken." }
  ],
  smartwatches: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Wir überprüfen die Funktionen Ihrer Smartwatch." },
    { title: "Display Reparatur", icon: "fas fa-clock", description: "Austausch von gebrochenem Glas oder defektem Touchscreen." },
    { title: "Akku Austausch", icon: "fas fa-battery-half", description: "Die Uhr hält keinen ganzen Tag mehr durch?" },
    { title: "Sensoren", icon: "fas fa-heartbeat", description: "Puls- oder Schrittzähler funktionieren nicht richtig?" },
    { title: "Knöpfe / Krone", icon: "fas fa-toggle-on", description: "Reparatur von klemenden Bedienknöpfen." },
    { title: "Gehäuse", icon: "fas fa-tools", description: "Reparatur oder Austausch von beschädigten Gehäuseteilen." },
    { title: "Software", icon: "fas fa-sync", description: "Hilfe bei Synchronisations- oder Update-Problemen." },
    { title: "Wasserschaden", icon: "fas fa-tint", description: "Trotz Wasserdichtigkeit ist Wasser eingedrungen?" }
  ]
};

export const repairCategories = [
  { id: "smartphones", name: "Smartphones", slug: "smartphones", icon: "fas fa-mobile-alt", subtext: "+ weitere Android-Modelle" },
  { id: "tablets", name: "Tablets & iPads", slug: "tablets", icon: "fas fa-tablet-alt", subtext: "+ weitere Tablet-Modelle" },
  { id: "laptops", name: "Laptops & MacBooks", slug: "laptops", icon: "fas fa-laptop", subtext: "+ Diagnose, Reinigung & Datenrettung" },
  { id: "spielekonsolen", name: "Spielekonsolen", slug: "spielekonsolen", icon: "fas fa-gamepad", subtext: "+ HDMI, Überhitzung & Laufwerke" },
  { id: "controller", name: "Controller", slug: "controller", icon: "fas fa-headset", subtext: "+ Stick Drift, Trigger & Akku" },
  { id: "smartwatches", name: "Smartwatches", slug: "smartwatches", icon: "fas fa-clock", subtext: "+ Akku, Display & Ladeprobleme" }
];

export const repairBrands = {
  smartphones: [
    {
      name: "iPhone",
      slug: "iphone",
      brandIcon: "fab fa-apple",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/iphone-reparatur.png",
      models: ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13", "iPhone 12", "iPhone 11", "iPhone SE"]
    },
    {
      name: "Samsung Galaxy",
      slug: "samsung",
      brandIconSlug: "samsung",
      brandIconColor: "1428A0",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur.png",
      models: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S22 Ultra", "Galaxy S22", "Galaxy Z Fold 5", "Galaxy Z Flip 5", "Galaxy A54", "Galaxy A34", "Galaxy A14"]
    },
    {
      name: "Google Pixel",
      slug: "google",
      brandIcon: "fab fa-google",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur.png",
      models: ["Pixel 8 Pro", "Pixel 8", "Pixel 7a", "Pixel 7 Pro", "Pixel 7", "Pixel 6a", "Pixel 6 Pro", "Pixel 6", "Pixel Fold"]
    },
    {
      name: "Xiaomi / Redmi / Poco",
      slug: "xiaomi",
      brandIconSlug: "xiaomi",
      brandIconColor: "FF6900",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur.png",
      models: ["Xiaomi 14 Ultra", "Xiaomi 14", "Xiaomi 13 Pro", "Xiaomi 13", "Redmi Note 13 Pro", "Redmi Note 12", "Poco X6 Pro", "Poco F5"]
    },
    {
      name: "Huawei / Honor",
      slug: "huawei",
      brandIconSlug: "huawei",
      brandIconColor: "FF0000",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur.png",
      models: ["P60 Pro", "Mate 50 Pro", "P50 Pro", "P40 Pro", "P30 Pro", "Honor Magic6 Pro", "Honor 90", "Honor Magic5 Pro"]
    },
    {
      name: "OnePlus / Oppo / Sony",
      slug: "weitere",
      brandIcon: "fas fa-mobile",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur.png",
      models: ["OnePlus 12", "OnePlus 11", "OnePlus Nord 3", "Oppo Find X5 Pro", "Oppo Reno 10", "Sony Xperia 1 V", "Sony Xperia 5 V", "Sony Xperia 10 V"]
    }
  ],
  tablets: [
    {
      name: "iPad",
      slug: "ipad",
      brandIcon: "fab fa-apple",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/tablet-reparatur.png",
      models: ["iPad Pro 12.9 (M2)", "iPad Pro 11 (M2)", "iPad Air (5. Gen)", "iPad (10. Gen)", "iPad mini (6. Gen)", "iPad Pro 2021", "iPad Pro 2020", "iPad Air 4", "iPad 9"]
    },
    {
      name: "Samsung Galaxy Tab",
      slug: "samsung-tab",
      brandIconSlug: "samsung",
      brandIconColor: "1428A0",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/tablet-reparatur.png",
      models: ["Galaxy Tab S9 Ultra", "Galaxy Tab S9+", "Galaxy Tab S9", "Galaxy Tab S8 Ultra", "Galaxy Tab S8", "Galaxy Tab A8", "Galaxy Tab S7 FE", "Galaxy Tab S6 Lite"]
    },
    {
      name: "Microsoft Surface",
      slug: "surface",
      brandIcon: "fab fa-microsoft",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/tablet-reparatur.png",
      models: ["Surface Pro 9", "Surface Pro 8", "Surface Pro 7", "Surface Go 3", "Surface Go 2", "Surface Book 3", "Surface Pro X"]
    },
    {
      name: "Lenovo Tab",
      slug: "lenovo-tab",
      brandIconSlug: "lenovo",
      brandIconColor: "E2231A",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/tablet-reparatur.png",
      models: ["Lenovo Tab P12 Pro", "Lenovo Tab P11 Pro", "Lenovo Tab M10 Plus", "Lenovo Yoga Tab 13", "Lenovo Tab M8"]
    },
    {
      name: "Huawei MatePad",
      slug: "matepad",
      brandIconSlug: "huawei",
      brandIconColor: "FF0000",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/tablet-reparatur.png",
      models: ["MatePad Pro 13.2", "MatePad Pro 11", "MatePad 11.5", "MatePad Paper", "MatePad T10s"]
    }
  ],
  laptops: [
    {
      name: "MacBook Air / Pro",
      slug: "macbook",
      brandIcon: "fab fa-apple",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/notebook-reparatur.png",
      models: ["MacBook Pro 16 (M3 Max)", "MacBook Pro 14 (M3 Pro)", "MacBook Pro 14 (M3)", "MacBook Air 15 (M2)", "MacBook Air 13 (M2)", "MacBook Pro 16 (M2 Pro/Max)", "MacBook Pro 14 (M1 Pro/Max)", "MacBook Air (M1)", "MacBook Pro (Intel)"]
    },
    {
      name: "Windows Laptops",
      slug: "windows",
      brandIcon: "fab fa-windows",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/notebook-reparatur.png",
      models: ["Windows 11 Laptops", "Windows 10 Laptops", "Gaming Laptops", "Ultrabooks", "Convertibles", "Business Notebooks"]
    },
    {
      name: "Lenovo / HP / Dell",
      slug: "business-laptops",
      brandIcon: "fas fa-laptop",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/notebook-reparatur.png",
      models: ["Lenovo ThinkPad X1 Carbon", "Lenovo ThinkPad T-Serie", "Lenovo IdeaPad", "HP Spectre x360", "HP Envy", "HP EliteBook", "Dell XPS 15", "Dell XPS 13", "Dell Latitude"]
    },
    {
      name: "Asus / Acer / MSI",
      slug: "gaming-laptops",
      brandIcon: "fas fa-laptop",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/notebook-reparatur.png",
      models: ["Asus ROG Zephyrus", "Asus ZenBook", "Asus TUF Gaming", "Acer Predator", "Acer Swift", "Acer Nitro", "MSI Stealth", "MSI Raider", "MSI Katana"]
    },
    {
      name: "Surface Laptop",
      slug: "surface-laptop",
      brandIcon: "fab fa-microsoft",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/notebook-reparatur.png",
      models: ["Surface Laptop Studio 2", "Surface Laptop 5", "Surface Laptop Go 3", "Surface Laptop 4", "Surface Book 3", "Surface Laptop Go 2"]
    }
  ],
  spielekonsolen: [
    {
      name: "PlayStation",
      slug: "playstation",
      brandIcon: "fab fa-playstation",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/konsolen-reparatur-2.png",
      models: ["PlayStation 5 Pro", "PlayStation 5 Slim", "PlayStation 5 (Disc Edition)", "PlayStation 5 (Digital Edition)", "PlayStation 4 Pro", "PlayStation 4 Slim", "PlayStation 4 (Fat)"]
    },
    {
      name: "Xbox",
      slug: "xbox",
      brandIcon: "fab fa-xbox",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/konsolen-reparatur-2.png",
      models: ["Xbox Series X", "Xbox Series S", "Xbox One X", "Xbox One S", "Xbox One (Original)", "Xbox 360"]
    },
    {
      name: "Nintendo Switch",
      slug: "switch",
      brandIconSlug: "nintendoswitch",
      brandIconColor: "E60012",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/konsolen-reparatur-2.png",
      models: ["Nintendo Switch OLED", "Nintendo Switch (V2)", "Nintendo Switch Lite", "Nintendo Switch (V1)", "Switch 2 (kommend)"]
    },
    {
      name: "Steam Deck",
      slug: "steam-deck",
      brandIcon: "fab fa-steam",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/konsolen-reparatur-2.png",
      models: ["Steam Deck OLED 1TB", "Steam Deck OLED 512GB", "Steam Deck LCD 512GB", "Steam Deck LCD 256GB", "Steam Deck LCD 64GB"]
    },
    {
      name: "ROG Ally",
      slug: "rog-ally",
      brandIcon: "fas fa-gamepad",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/konsolen-reparatur-2.png",
      models: ["ASUS ROG Ally (Ryzen Z1 Extreme)", "ASUS ROG Ally (Ryzen Z1)", "ROG Ally X"]
    }
  ],
  controller: [
    {
      name: "PlayStation Controller",
      slug: "playstation-controller",
      brandIcon: "fab fa-playstation",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/konsolen-reparatur-2.png",
      models: ["DualSense Edge (PS5)", "DualSense (PS5)", "DualShock 4 V2 (PS4)", "DualShock 4 V1 (PS4)"]
    },
    {
      name: "Xbox Controller",
      slug: "xbox-controller",
      brandIcon: "fab fa-xbox",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/konsolen-reparatur-2.png",
      models: ["Xbox Elite Wireless Controller Series 2", "Xbox Elite Wireless Controller", "Xbox Wireless Controller (Series X/S)", "Xbox One Controller"]
    },
    {
      name: "Nintendo Controller",
      slug: "nintendo-controller",
      brandIconSlug: "nintendoswitch",
      brandIconColor: "E60012",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/konsolen-reparatur-2.png",
      models: ["Joy-Con (Links/Rechts)", "Nintendo Switch Pro Controller", "Nintendo GameCube Controller (Smash Bros Edition)"]
    }
  ],
  smartwatches: [
    {
      name: "Apple Watch",
      slug: "apple-watch",
      brandIcon: "fab fa-apple",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur.png",
      models: ["Apple Watch Ultra 2", "Apple Watch Ultra", "Apple Watch Series 9", "Apple Watch Series 8", "Apple Watch SE (2. Gen)", "Apple Watch Series 7", "Apple Watch Series 6", "Apple Watch SE", "Apple Watch Series 5", "Apple Watch Series 4"]
    },
    {
      name: "Samsung Galaxy Watch",
      slug: "galaxy-watch",
      brandIconSlug: "samsung",
      brandIconColor: "1428A0",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur.png",
      models: ["Galaxy Watch6 Classic", "Galaxy Watch6", "Galaxy Watch5 Pro", "Galaxy Watch5", "Galaxy Watch4 Classic", "Galaxy Watch4", "Galaxy Watch3", "Galaxy Watch Active2"]
    },
    {
      name: "Google Pixel Watch",
      slug: "pixel-watch",
      brandIcon: "fab fa-google",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur.png",
      models: ["Pixel Watch 2", "Pixel Watch (1. Gen)"]
    },
    {
      name: "Huawei Watch",
      slug: "huawei-watch",
      brandIconSlug: "huawei",
      brandIconColor: "FF0000",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur.png",
      models: ["Huawei Watch 4 Pro", "Huawei Watch 4", "Huawei Watch Ultimate", "Huawei Watch GT 4", "Huawei Watch GT 3 Pro", "Huawei Watch GT 3"]
    },
    {
      name: "Garmin Smartwatch",
      slug: "garmin",
      brandIconSlug: "garmin",
      brandIconColor: "000000",
      heroImage: "https://handy-reparatur-ingolstadt.de/wp-content/uploads/handy-reparatur.png",
      models: ["Fenix 7 Pro", "Fenix 7", "Epix Pro (Gen 2)", "Epix (Gen 2)", "Venu 3", "Venu 2 Plus", "Forerunner 965", "Forerunner 265", "Instinct 2X"]
    }
  ]
};

export const repairDefects = {
  smartphones: [
    "Gebrochenes oder gesplittertes Display",
    "Beschädigte Ladebuchse",
    "Mikrofon funktioniert nicht mehr",
    "Homebutton ist defekt",
    "Lautsprecher funktioniert nicht",
    "Innen-/Außenkamera ist defekt",
    "Power-Button geht nicht",
    "Akku-Leistung ist zu niedrig"
  ],
  tablets: [
    "Gesplitterter oder gebrochener Touchscreen",
    "Akku entlädt sich ungewöhnlich schnell",
    "Ladeanschluss hat Wackelkontakt",
    "Kamera fokussiert nicht",
    "WLAN-Verbindung bricht ab",
    "Software hängt sich regelmäßig auf",
    "Tablet reagiert nicht auf Eingaben",
    "Lautstärkewippe ist verklemmt"
  ],
  laptops: [
    "Bildschirm bleibt schwarz oder flackert",
    "Akku lädt nicht mehr auf",
    "Tastatur reagiert teilweise nicht",
    "Laptop wird extrem heiß und laut",
    "Festplatte klackert oder wird nicht erkannt",
    "Betriebssystem startet nicht",
    "WLAN wird nicht gefunden",
    "Scharniere des Bildschirms gebrochen"
  ],
  spielekonsolen: [
    "Konsole geht sofort nach Start wieder aus",
    "HDMI-Port ist beschädigt (kein Bild)",
    "Laufwerk zieht Spiele nicht ein",
    "Lüfter ist extrem laut (Überhitzung)",
    "Controller lässt sich nicht verbinden",
    "Software-Update schlägt fehl",
    "Konsole stürzt mitten im Spiel ab",
    "Fehlercodes werden angezeigt"
  ],
  controller: [
    "Analog-Stick bewegt sich von selbst (Stick Drift)",
    "R2 / L2 Trigger klemmt",
    "Akku lädt nicht mehr",
    "Tasten reagieren nicht beim Drücken",
    "Bluetooth-Verbindung bricht ab",
    "USB-Port hat Wackelkontakt",
    "Steuerkreuz funktioniert nur teilweise",
    "Controller geht nach wenigen Minuten aus"
  ],
  smartwatches: [
    "Displayglas ist zersplittert",
    "Touchscreen reagiert nicht",
    "Akku hält nicht mal einen halben Tag",
    "Pulsmesser oder Sensoren defekt",
    "Gehäuse oder Armband-Verschluss kaputt",
    "Uhr vibriert nicht mehr",
    "Wasserschaden trotz IP-Zertifizierung",
    "Software hängt in einer Boot-Schleife"
  ]
};
