export const repairServices = {
  smartphones: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Wir finden schnell heraus, wo das Problem liegt und beraten Sie umfassend." },
    { title: "Display Reparatur", icon: "fas fa-mobile-alt", description: "Austausch von gesprungenen OLED/LCD-Displays in Rekordzeit." },
    { title: "Akku Austausch", icon: "fas fa-battery-half", description: "Neuer Premium-Akku für maximale Laufzeit Ihres Geräts." },
    { title: "Ladebuchse", icon: "fas fa-plug", description: "Das Gerät lädt nicht mehr? Wir tauschen den USB-C/Lightning Port." },
    { title: "Hörmuschel / Lautsprecher", icon: "fas fa-volume-up", description: "Reinigung oder Austausch der Lautsprecher für klaren Klang." },
    { title: "Kamera", icon: "fas fa-camera", description: "Reparatur von zerkratztem Kameraglas oder defekten Linsen." },
    { title: "Backcover", icon: "fas fa-tools", description: "Professioneller Austausch der Glas-Rückseite mit Spezial-Laser." },
    { title: "Wasserschaden", icon: "fas fa-tint", description: "Platinenreinigung und Datenrettung nach Flüssigkeitsschäden." }
  ],
  tablets: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Detaillierte Hardware-Prüfung Ihres Tablets." },
    { title: "Display Reparatur", icon: "fas fa-tablet-alt", description: "Fachgerechter Tausch von zerbrochenen Tablet-Gläsern." },
    { title: "Akku Austausch", icon: "fas fa-battery-half", description: "Frische Batterie für lange Serien-Marathons und Arbeitstage." },
    { title: "Ladebuchse", icon: "fas fa-plug", description: "Reparatur von wackeligen Ladebuchsen." },
    { title: "Knöpfe & Schalter", icon: "fas fa-toggle-on", description: "Klemmende Buttons werden gereinigt oder ersetzt." },
    { title: "Kamera", icon: "fas fa-camera", description: "Austausch defekter Front- für klare Videocalls." },
    { title: "Wasserschaden", icon: "fas fa-tint", description: "Ultraschallbad für oxidierte Tablet-Platinen." },
    { title: "Software Probleme", icon: "fas fa-laptop-code", description: "Bootloops und Update-Fehler beheben." }
  ],
  laptops: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Strukturiertes Troubleshooting für Hard- und Software." },
    { title: "Display Reparatur", icon: "fas fa-desktop", description: "Austausch von flackernden oder gebrochenen Laptop-Displays." },
    { title: "Akku / Netzteil", icon: "fas fa-battery-half", description: "Neue Akkus und Überprüfung der Ladeelektronik." },
    { title: "Tastatur Reparatur", icon: "fas fa-keyboard", description: "Austausch defekter Tasten oder des ganzen Topcase." },
    { title: "Festplatte / Datenrettung", icon: "fas fa-hdd", description: "SSD-Upgrades und professionelle Datenwiederherstellung." },
    { title: "Lüfterreinigung", icon: "fas fa-fan", description: "Erneuerung der Wärmeleitpaste gegen laute Lüfter." },
    { title: "Anschlüsse", icon: "fas fa-plug", description: "Defekte USB, USB-C oder HDMI Ports werden neu verlötet." },
    { title: "Software & Viren", icon: "fas fa-shield-alt", description: "Entfernung von Malware und Windows/macOS Neuinstallation." }
  ],
  spielekonsolen: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Tiefgehende Prüfung von Mainboard und Netzteil." },
    { title: "HDMI Port", icon: "fas fa-tv", description: "Wir löten abgerissene oder defekte HDMI-Anschlüsse neu." },
    { title: "Laufwerk", icon: "fas fa-compact-disc", description: "Laser-Austausch, wenn keine Discs mehr gelesen werden." },
    { title: "Überhitzung", icon: "fas fa-thermometer-half", description: "Professionelle Innenreinigung und Liquid-Metal Erneuerung." },
    { title: "Speicher Upgrade", icon: "fas fa-hdd", description: "Mehr Platz für Ihre Spiele durch größere NVMe-SSDs." },
    { title: "Software Update", icon: "fas fa-sync", description: "Behebung von Fehlercodes und Update-Abstürzen." },
    { title: "Netzteil", icon: "fas fa-plug", description: "Austausch defekter interner Stromversorgungen." },
    { title: "Wasserschaden", icon: "fas fa-tint", description: "Rettung nach verschütteten Getränken." }
  ],
  controller: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Platinenprüfung und Tasten-Check." },
    { title: "Stick Drift", icon: "fas fa-gamepad", description: "Einlöten neuer, hochwertiger Analog-Stick-Module (ALPS/Hall)." },
    { title: "Trigger / Tasten", icon: "fas fa-hand-pointer", description: "Austausch von gebrochenen Schultertasten und Federn." },
    { title: "Akku Austausch", icon: "fas fa-battery-half", description: "Mehr kabellose Spielzeit durch neue Akkus." },
    { title: "Ladebuchse", icon: "fas fa-plug", description: "Neuer USB-C oder Micro-USB Port für Ihren Controller." },
    { title: "Verbindungsprobleme", icon: "fas fa-wifi", description: "Reparatur der Bluetooth-Antennen." },
    { title: "Gehäuse", icon: "fas fa-tools", description: "Optisches Tuning oder Austausch zerkratzter Shells." },
    { title: "Wasserschaden", icon: "fas fa-tint", description: "Reinigung verklebter Tasten nach Cola-Unfällen." }
  ],
  smartwatches: [
    { title: "Fehlerdiagnose", icon: "fas fa-search", description: "Prüfung aller Sensoren und Dichtungen." },
    { title: "Display Reparatur", icon: "fas fa-clock", description: "Präziser Glastausch bei zersplitterten Smartwatches." },
    { title: "Akku Austausch", icon: "fas fa-battery-half", description: "Neuer Akku für den perfekten Begleiter am Handgelenk." },
    { title: "Sensoren", icon: "fas fa-heartbeat", description: "Reparatur von Pulsmessern und EKG-Sensoren." },
    { title: "Knöpfe / Krone", icon: "fas fa-toggle-on", description: "Austausch der Digital Crown oder Seitentasten." },
    { title: "Gehäuse", icon: "fas fa-tools", description: "Beseitigung von tiefen Kratzern im Aluminium/Edelstahl." },
    { title: "Software", icon: "fas fa-sync", description: "Pairing-Probleme mit dem Smartphone lösen." },
    { title: "Wasserschaden", icon: "fas fa-tint", description: "Trocknung nach versehentlichem Tauchgang." }
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
      name: "Apple iPhone",
      slug: "iphone",
      brandColor: "#1d1d1f",
      description: "Apple iPhones sind Meisterwerke der Technik. Ob das brandneue iPhone 17 Pro Max oder ein treues iPhone 11: Unsere KI-gestützten Diagnosetools und praxiserfahrenen Techniker sorgen dafür, dass Face ID, True Tone und alle Apple-Spezialfunktionen nach der Reparatur makellos funktionieren. Wir verbauen nur höchste Qualität.",
      brandIcon: "fab fa-apple",
      heroImage: "/images/apple_repair.png",
      models: ["iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17 Plus", "iPhone 17", "iPhone 17 Air", "iPhone 16e", "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13", "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone XR", "iPhone XS", "iPhone X", "iPhone SE", "... und noch mehr"]
    },
    {
      name: "Samsung Galaxy",
      slug: "samsung",
      brandColor: "#1428A0",
      description: "Ein Samsung Galaxy (egal ob das futuristische Z Fold 7 oder das leistungsstarke S26 Ultra) besticht durch sein brillantes Dynamic AMOLED Display. Bricht dieses Glas, sieht das nicht nur unschön aus, sondern gefährdet das Panel. Wir reparieren Ihr Galaxy mit höchster Präzision, damit die Farbbrillanz erhalten bleibt.",
      brandIconSlug: "samsung",
      brandIconColor: "1428A0",
      heroImage: "/images/samsung_repair.png",
      models: ["Galaxy S26 Ultra", "Galaxy S26+", "Galaxy S26", "Galaxy S25 Edge", "Galaxy S25 Ultra", "Galaxy S25+", "Galaxy S25", "Galaxy S25 FE", "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy Z Fold 7", "Galaxy Z Flip 7", "Galaxy Z Fold 6", "Galaxy Z Flip 6", "Galaxy A56", "Galaxy A55", "Galaxy A36", "Galaxy A35", "... und noch mehr"]
    },
    {
      name: "Google Pixel",
      slug: "google",
      brandColor: "#4285F4",
      description: "Google Pixel Geräte, bis hin zum neuesten Pixel 10 Pro XL, sind für ihre unglaublichen KI-Kameras bekannt. Ein Kratzer auf der Linse oder ein gesplittertes Display trüben dieses Erlebnis enorm. Unsere Werkstatt bringt Ihr Pixel wieder in den Originalzustand – bereit für den nächsten perfekten Schnappschuss.",
      brandIcon: "fab fa-google",
      heroImage: "/images/google_repair.png",
      models: ["Pixel 10 Pro XL", "Pixel 10 Pro", "Pixel 10", "Pixel 9 Pro Fold", "Pixel 9 Pro XL", "Pixel 9 Pro", "Pixel 9", "Pixel 9a", "Pixel 8 Pro", "Pixel 8", "Pixel 8a", "Pixel 7 Pro", "Pixel 7", "Pixel 7a", "Pixel 6 Pro", "Pixel 6", "Pixel 6a", "... und noch mehr"]
    },
    {
      name: "Xiaomi / Redmi / Poco",
      slug: "xiaomi",
      brandColor: "#FF6900",
      description: "Die Leistungswunder von Xiaomi (wie das Xiaomi 15 Ultra), Redmi und Poco bieten Highend-Specs zum fairen Preis. Genau so fair kalkulieren wir unsere Reparaturen. Ob defekte Ladebuchse nach intensiver Nutzung oder Glasbruch – wir richten das für Sie, ohne dass ein Neukauf nötig wird.",
      brandIconSlug: "xiaomi",
      brandIconColor: "FF6900",
      heroImage: "/images/xiaomi_repair.png",
      models: ["Xiaomi 15 Ultra", "Xiaomi 15", "Xiaomi 14T Pro", "Xiaomi 14T", "Xiaomi 14 Ultra", "Xiaomi 14", "Redmi Note 14 Pro+", "Redmi Note 14 Pro", "Redmi Note 14", "Redmi Note 13 Pro+", "Poco F7 Pro", "Poco F7", "Poco X7 Pro", "Poco X7", "... und noch mehr"]
    },
    {
      name: "Huawei / Honor",
      slug: "huawei",
      brandColor: "#FF0000",
      description: "Modelle wie das Huawei Pura 80 Ultra oder das Honor Magic 7 Pro sind absolute Design-Highlights mit gebogenen Displays. Diese sogenannten Waterfall-Displays erfordern beim Austausch eine ruhige Hand und viel Erfahrung. Unsere Spezialisten wissen genau, worauf es ankommt.",
      brandIconSlug: "huawei",
      brandIconColor: "FF0000",
      heroImage: "/images/huawei_repair.png",
      models: ["Huawei Pura 80 Ultra", "Huawei Pura 80 Pro", "Huawei Pura 70 Ultra", "Huawei Pura 70 Pro", "Huawei Mate 70 Pro", "Huawei Mate 70", "Huawei Mate X6", "Honor Magic 7 Pro", "Honor Magic 7", "Honor Magic V3", "Honor 400 Pro", "Honor 200 Pro", "... und noch mehr"]
    },
    {
      name: "OnePlus / Oppo / Sony",
      slug: "weitere",
      brandColor: "#0056b3",
      description: "Egal ob das rasante OnePlus 13, das innovative Oppo Find X8 oder das filmreife Sony Xperia 1 VII: Auch wenn diese Premium-Smartphones seltener auf der Straße zu sehen sind als ein iPhone, haben wir in Ingolstadt die passenden Werkzeuge, Ersatzteile und das Know-how für eine professionelle Rettung.",
      brandIcon: "fas fa-mobile",
      heroImage: "/images/oppo_repair.jpg",
      models: ["OnePlus 13", "OnePlus 13R", "OnePlus 12", "OnePlus 11", "Oppo Find X8 Pro", "Oppo Find X8", "Oppo Find N5", "Sony Xperia 1 VII", "Sony Xperia 1 VI", "Motorola Edge 60 Ultra", "Nothing Phone (3a)", "Fairphone 6", "Nano Banana Pro", "... und noch mehr"]
    }
  ],
  tablets: [
    {
      name: "Apple iPad",
      slug: "ipad",
      brandColor: "#1d1d1f",
      description: "Ob für die Schule, das Studium oder als Kassen-System im Café – ein Ausfall des iPads schmerzt. Wir wechseln gebrochene Digitizer (Touchscreens) oder festverbaute Akkus bei allen Generationen, vom iPad mini bis zum neuesten iPad Pro M4, mit höchster Sorgfalt.",
      brandIcon: "fab fa-apple",
      heroImage: "/images/ipad_repair.png",
      models: ["iPad Pro (M4)", "iPad Pro 12.9 (M2)", "iPad Pro 11 (M2)", "iPad Air (M2)", "iPad Air (5. Gen)", "iPad (10. Gen)", "iPad mini (6. Gen)", "iPad Pro 2021", "iPad 9", "... und noch mehr"]
    },
    {
      name: "Samsung Galaxy Tab",
      slug: "samsung-tab",
      brandColor: "#1428A0",
      description: "Samsung Galaxy Tablets sind dank S-Pen wahre Produktivitäts-Wunder. Fällt das Gerät auf den Boden, reißt oft das große OLED-Panel. Wir reparieren Ihr Tab fachmännisch, sodass der Stift danach wieder absolut präzise und ohne Aussetzer über das Glas gleitet.",
      brandIconSlug: "samsung",
      brandIconColor: "1428A0",
      heroImage: "/images/samsung_tab_repair.png",
      models: ["Galaxy Tab S9 Ultra", "Galaxy Tab S9+", "Galaxy Tab S9", "Galaxy Tab S8 Ultra", "Galaxy Tab S8", "Galaxy Tab A9+", "Galaxy Tab A9", "Galaxy Tab S7 FE", "Galaxy Tab S6 Lite", "... und noch mehr"]
    },
    {
      name: "Microsoft Surface",
      slug: "surface",
      brandColor: "#00A4EF",
      description: "Die Microsoft Surface Pro Reihe verbindet Laptop-Power mit Tablet-Format. Sie sind extrem verklebt und gelten als schwer reparierbar – doch nicht für uns! Unsere Techniker lösen das Glas mit speziellen Wärmeplatten und reparieren das Innenleben ohne Spuren zu hinterlassen.",
      brandIcon: "fab fa-microsoft",
      heroImage: "/images/surface_repair.png",
      models: ["Surface Pro 11", "Surface Pro 10", "Surface Pro 9", "Surface Pro 8", "Surface Pro 7", "Surface Go 4", "Surface Go 3", "Surface Pro X", "... und noch mehr"]
    },
    {
      name: "Lenovo Tab",
      slug: "lenovo-tab",
      brandColor: "#E2231A",
      description: "Lenovo Tablets sind verlässliche Begleiter für die ganze Familie. Häufige Defekte wie eingedrückte Ladebuchsen (weil am Ladekabel hängen geblieben wurde) oder zersplitterte Gläser reparieren wir rasch, damit der Familienfrieden schnell wiederhergestellt ist.",
      brandIconSlug: "lenovo",
      brandIconColor: "E2231A",
      heroImage: "/images/lenovo_tab_repair.png",
      models: ["Lenovo Tab P12 Pro", "Lenovo Tab P12", "Lenovo Tab P11 Pro", "Lenovo Tab M11", "Lenovo Tab M10 Plus", "Lenovo Yoga Tab 13", "Lenovo Tab M9", "... und noch mehr"]
    }
  ],
  laptops: [
    {
      name: "MacBook Air / Pro",
      slug: "macbook",
      brandColor: "#333333",
      description: "Ihr MacBook ist Ihr wichtigstes Arbeitswerkzeug. Wenn das Display 'Staingate' aufweist, gerissen ist, die Tasten klemmen oder der Akku die Meldung 'Service empfohlen' zeigt, bringen wir Ihr Apple-Notebook wieder auf 100% Leistung. Auch Datenrettung nach Wasserschäden gehört zu unserer Expertise.",
      brandIcon: "fab fa-apple",
      heroImage: "/images/macbook_repair.png",
      models: ["MacBook Pro 16 (M3 Max/Pro)", "MacBook Pro 14 (M3 Max/Pro)", "MacBook Pro 14 (M3)", "MacBook Air 15 (M3)", "MacBook Air 13 (M3)", "MacBook Air 15 (M2)", "MacBook Air 13 (M2)", "MacBook Pro (M2)", "MacBook Pro (M1)", "MacBook (Intel)", "... und noch mehr"]
    },
    {
      name: "Windows Laptops",
      slug: "windows",
      brandColor: "#00A4EF",
      description: "Ob HP, Dell, Acer oder Asus – wir reparieren Windows-Laptops aller Marken. Von gebrochenen Scharnieren über defekte Displays bis hin zu extrem langsamen Systemen (HDD zu SSD Upgrade): Wir machen Ihren Rechner wieder fit für Office, Uni und Alltag.",
      brandIcon: "fab fa-windows",
      heroImage: "/images/gaming_laptop_repair.png",
      models: ["Alle Windows 11 Laptops", "Alle Windows 10 Laptops", "HP Pavilion / Envy / Spectre", "Dell XPS / Inspiron / Latitude", "Acer Aspire / Swift", "Asus VivoBook / ZenBook", "Lenovo IdeaPad / ThinkPad", "... und noch mehr"]
    },
    {
      name: "Gaming Laptops",
      slug: "gaming-laptops",
      brandColor: "#E60012",
      description: "Gaming Laptops von Razer, MSI oder Alienware leisten Schwerstarbeit und entwickeln enorme Hitze. Wenn der Laptop beim Spielen abstürzt oder extrem laut wird, reinigen wir das Kühlsystem professionell und tragen Premium-Wärmeleitpaste auf, um FPS-Drops zu verhindern.",
      brandIcon: "fas fa-laptop",
      heroImage: "/images/gaming_laptop_repair.png",
      models: ["Asus ROG Zephyrus / Strix", "Acer Predator Helios / Triton", "MSI Stealth / Raider / Katana", "Razer Blade 14 / 15 / 16 / 18", "Lenovo Legion Pro / Slim", "Alienware m16 / m18 / x14", "HP Omen", "... und noch mehr"]
    }
  ],
  spielekonsolen: [
    {
      name: "PlayStation",
      slug: "playstation",
      brandColor: "#003791",
      description: "Ein abgerissener HDMI-Port an der PS5 (BLOD - Blue Light of Death), ein defektes Laufwerk oder eine Konsole, die wegen Überhitzung laut piept und ausgeht: Wir kennen alle Kinderkrankheiten der Sony PlayStations und beheben sie schnell und zuverlässig mit Profi-Lötequipment.",
      brandIcon: "fab fa-playstation",
      heroImage: "/images/playstation_repair.png",
      models: ["PlayStation 5 Pro", "PlayStation 5 Slim", "PlayStation 5 (Disc Edition)", "PlayStation 5 (Digital Edition)", "PlayStation 4 Pro", "PlayStation 4 Slim", "PlayStation 4 (Fat)", "... und noch mehr"]
    },
    {
      name: "Xbox",
      slug: "xbox",
      brandColor: "#107C10",
      description: "Die Xbox Series X ist ein massiver Power-Tower. Geht das Netzteil kaputt, liest sie keine Discs mehr oder gibt kein Bild mehr aus, kümmern wir uns darum. Auch ältere Modelle mit Festplattenfehlern oder Software-Crashes bringen wir wieder ins Spiel.",
      brandIcon: "fab fa-xbox",
      heroImage: "/images/xbox_repair.png",
      models: ["Xbox Series X", "Xbox Series S", "Xbox One X", "Xbox One S", "Xbox One", "Xbox 360", "... und noch mehr"]
    },
    {
      name: "Nintendo Switch",
      slug: "switch",
      brandColor: "#E60012",
      description: "Die Switch ist ideal für unterwegs, fällt aber dadurch auch leichter mal runter. Defekte Ladebuchsen (USB-C), zerkratzte Displays, Bluescreens (BSOD) oder abgebrochene Joy-Con-Schienen reparieren wir in kürzester Zeit, damit Mario und Zelda nicht lange warten müssen.",
      brandIconSlug: "nintendoswitch",
      brandIconColor: "E60012",
      heroImage: "/images/switch_repair.png",
      models: ["Nintendo Switch OLED", "Nintendo Switch (V2)", "Nintendo Switch Lite", "Nintendo Switch (V1)", "Switch 2 (kommend)", "... und noch mehr"]
    },
    {
      name: "Handheld PC (Steam Deck / ROG)",
      slug: "steam-deck",
      brandColor: "#1a1a1a",
      description: "Steam Deck, Asus ROG Ally oder Lenovo Legion Go sind High-End-PCs im Hosentaschenformat. Kaputte Analog-Sticks, Risse im Display oder der Wunsch nach einem Speicher-Upgrade (z.B. auf 2TB SSD) – wir sind die Experten für Handheld-Reparaturen in Ingolstadt.",
      brandIcon: "fab fa-steam",
      heroImage: "/images/steamdeck_repair.png",
      models: ["Valve Steam Deck OLED", "Valve Steam Deck LCD", "ASUS ROG Ally X", "ASUS ROG Ally (Z1 Extreme)", "Lenovo Legion Go", "MSI Claw", "... und noch mehr"]
    }
  ],
  controller: [
    {
      name: "PlayStation Controller",
      slug: "playstation-controller",
      brandColor: "#003791",
      description: "Der DualSense der PS5 leidet leider häufig unter Stick-Drift (die Figur bewegt sich von alleine) oder gebrochenen R2-Federn der adaptiven Trigger. Wir löten neue Potentiometer oder Hall-Effect-Sensoren ein, damit Sie wieder maximale Präzision beim Aiming haben.",
      brandIcon: "fab fa-playstation",
      heroImage: "/images/ps_controller_repair.png",
      models: ["DualSense Edge (PS5)", "DualSense (PS5)", "DualShock 4 V2 (PS4)", "DualShock 4 V1 (PS4)", "... und noch mehr"]
    },
    {
      name: "Xbox Controller",
      slug: "xbox-controller",
      brandColor: "#107C10",
      description: "Ein klemmender Bumper (RB/LB) beim Elite Series 2 Controller oder abgenutzte Gummierungen stören das Spielgefühl massiv. Warum neu kaufen, wenn eine Reparatur viel günstiger ist? Wir machen Ihren Xbox Controller wieder wettbewerbsfähig.",
      brandIcon: "fab fa-xbox",
      heroImage: "/images/xbox_repair.png", // Reusing Xbox generic image due to rate limit
      models: ["Xbox Elite Wireless Controller Series 2", "Xbox Elite Wireless Controller", "Xbox Wireless Controller (Series X/S)", "Xbox One Controller", "... und noch mehr"]
    },
    {
      name: "Nintendo Controller",
      slug: "nintendo-controller",
      brandColor: "#E60012",
      description: "Der legendäre Joy-Con-Drift bringt selbst den ruhigsten Gamer zur Weißglut. Wir tauschen die fehlerhaften Analog-Sticks gegen verbesserte Versionen aus. Auch defekte Tasten am Switch Pro Controller reparieren wir fachgerecht.",
      brandIconSlug: "nintendoswitch",
      brandIconColor: "E60012",
      heroImage: "/images/switch_repair.png", // Reusing Switch image
      models: ["Joy-Con (Links/Rechts)", "Nintendo Switch Pro Controller", "Nintendo GameCube Controller (Smash Bros)", "... und noch mehr"]
    }
  ],
  smartwatches: [
    {
      name: "Apple Watch",
      slug: "apple-watch",
      brandColor: "#1d1d1f",
      description: "Die Apple Watch ist ein filigranes Meisterwerk. Ein Kratzer im Saphirglas oder ein geblähte Akku können die teure Uhr unbrauchbar machen. Wir öffnen die Watch mit Spezialwerkzeug, tauschen defekte Teile aus und versiegeln sie danach wieder sorgfältig.",
      brandIcon: "fab fa-apple",
      heroImage: "/images/apple_repair.png", // Reusing Apple image
      models: ["Apple Watch Ultra 2", "Apple Watch Ultra", "Apple Watch Series 9", "Apple Watch Series 8", "Apple Watch SE (2. Gen)", "Apple Watch Series 7", "Apple Watch Series 6", "Apple Watch Series 5", "... und noch mehr"]
    },
    {
      name: "Weitere Smartwatches",
      slug: "weitere-smartwatches",
      brandColor: "#1428A0",
      description: "Egal ob Samsung Galaxy Watch, Google Pixel Watch, Garmin Fenix oder Huawei Watch: Wenn das Display nach dem Sport gerissen ist oder die Sensorik spinnt, haben wir die Lösung. Wir verlängern die Lebensdauer Ihrer smarten Uhr deutlich.",
      brandIcon: "fas fa-clock",
      heroImage: "/images/samsung_repair.png", // Reusing Samsung image
      models: ["Samsung Galaxy Watch6 / 7", "Samsung Galaxy Watch5 Pro", "Google Pixel Watch 3 / 2", "Garmin Fenix 8 / 7 / Epix", "Huawei Watch 4 Pro", "Huawei Watch GT 4", "... und noch mehr"]
    }
  ]
};

export const repairDefects = {
  smartphones: [
    "Gebrochenes oder gesplittertes Display (OLED/LCD)",
    "Beschädigte oder wackelige Ladebuchse (USB-C/Lightning)",
    "Mikrofon oder Hörmuschel funktioniert nicht",
    "Backcover (Rückseite) ist zersplittert",
    "Lautsprecher ist leise oder kratzt",
    "Haupt- oder Frontkamera fokussiert nicht",
    "Power- oder Lautstärke-Button klemmt",
    "Akku entlädt sich rasend schnell"
  ],
  tablets: [
    "Gesplitterter oder gebrochener Touchscreen (Digitizer)",
    "Akku hält keinen ganzen Film mehr durch",
    "Ladeanschluss ist verbogen",
    "Kamera ist unscharf oder schwarz",
    "WLAN-Verbindung bricht ständig ab",
    "Software hängt sich regelmäßig auf",
    "Tablet reagiert stellenweise nicht auf Touch",
    "Gehäuse ist nach Sturz verbogen"
  ],
  laptops: [
    "Bildschirm bleibt komplett schwarz oder flackert",
    "Akku lädt nicht mehr auf 100%",
    "Flüssigkeit über Tastatur verschüttet",
    "Laptop wird extrem heiß und Lüfter dröhnt",
    "Festplatte klackert oder Windows bootet nicht",
    "Scharniere des Displays sind gebrochen",
    "WLAN oder Bluetooth wird nicht erkannt",
    "USB- oder HDMI-Port ohne Funktion"
  ],
  spielekonsolen: [
    "Konsole geht sofort nach dem Einschalten wieder aus (BLOD)",
    "HDMI-Port ist herausgebrochen (kein Bild am TV)",
    "Laufwerk zieht Spiele nicht ein oder rattert",
    "Lüfter dreht auf Maximum (Überhitzung/Wärmeleitpaste)",
    "Controller lässt sich nicht mehr via Bluetooth verbinden",
    "System-Software hängt in einem Bootloop",
    "Konsole stürzt mitten im Spiel ab",
    "Fehlercodes werden auf dem Bildschirm angezeigt"
  ],
  controller: [
    "Analog-Stick bewegt sich von selbst (Stick Drift)",
    "R2 / L2 Schultertasten (Trigger) haben keinen Widerstand mehr",
    "Akku hält nur noch wenige Minuten",
    "Steuerkreuz oder Action-Tasten reagieren nicht",
    "Bluetooth-Verbindung zur Konsole reißt ab",
    "USB-C Port wackelt beim Laden",
    "Controller geht gar nicht mehr an",
    "Vibrations-Motoren klingen komisch"
  ],
  smartwatches: [
    "Displayglas ist nach Aufprall zersplittert",
    "Touchscreen reagiert gar nicht mehr",
    "Akku hält nicht mal einen halben Tag",
    "Pulsmesser oder EKG-Sensoren ohne Funktion",
    "Digital Crown / Drehrad klemmt fest",
    "Uhr vibriert nicht mehr bei Benachrichtigungen",
    "Feuchtigkeit hinter dem Glas (Wasserschaden)",
    "Uhr bleibt beim Hersteller-Logo hängen"
  ]
};
