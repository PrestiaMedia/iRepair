export interface DeviceBrand {
  name: string;
  models: string[];
}

export interface DeviceCategory {
  category: string;
  brands: DeviceBrand[];
  issues: string[];
}

export const deviceCatalog: DeviceCategory[] = [
  {
    category: "Smartphone",
    brands: [
      {
        name: "Apple",
        models: [
          "iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17 Plus", "iPhone 17", "iPhone 17 Air", "iPhone 16e",
          "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15 Pro",
          "iPhone 15 Plus", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
          "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13", "iPhone 12 Pro Max", "iPhone 12 Pro",
          "iPhone 12 mini", "iPhone 12", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone XR",
          "iPhone XS", "iPhone X", "iPhone SE"
        ]
      },
      {
        name: "Samsung",
        models: [
          "Galaxy S26 Ultra", "Galaxy S26+", "Galaxy S26", "Galaxy S25 Edge", "Galaxy S25 Ultra", "Galaxy S25+",
          "Galaxy S25", "Galaxy S25 FE", "Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra",
          "Galaxy S23+", "Galaxy S23", "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22", "Galaxy Z Fold 7",
          "Galaxy Z Flip 7", "Galaxy Z Flip 7 FE", "Galaxy Z Fold 6", "Galaxy Z Flip 6", "Galaxy Z Fold 5",
          "Galaxy Z Flip 5", "Galaxy A56", "Galaxy A55", "Galaxy A54", "Galaxy A36", "Galaxy A35", "Galaxy A34",
          "Galaxy A26", "Galaxy A25", "Galaxy A16", "Galaxy A15"
        ]
      },
      {
        name: "Google",
        models: [
          "Pixel 10 Pro XL", "Pixel 10 Pro", "Pixel 10", "Pixel 9 Pro Fold", "Pixel 9 Pro XL", "Pixel 9 Pro",
          "Pixel 9", "Pixel 9a", "Pixel 8 Pro", "Pixel 8", "Pixel 8a", "Pixel 7 Pro", "Pixel 7", "Pixel 7a",
          "Pixel 6 Pro", "Pixel 6", "Pixel 6a"
        ]
      },
      {
        name: "Xiaomi",
        models: ["Xiaomi 15 Ultra", "Xiaomi 15", "Xiaomi 14T Pro", "Xiaomi 14T", "Xiaomi 14 Ultra", "Xiaomi 14", "Xiaomi 13 Pro", "Xiaomi 13"]
      },
      {
        name: "Redmi",
        models: ["Redmi Note 14 Pro+", "Redmi Note 14 Pro", "Redmi Note 14", "Redmi Note 13 Pro+", "Redmi Note 13 Pro", "Redmi Note 13", "Redmi Note 12 Pro", "Redmi Note 12"]
      },
      {
        name: "Poco",
        models: ["Poco F7 Pro", "Poco F7", "Poco X7 Pro", "Poco X7", "Poco F6 Pro", "Poco F6", "Poco X6 Pro", "Poco X6"]
      },
      {
        name: "Huawei",
        models: ["Huawei Pura 80 Ultra", "Huawei Pura 80 Pro", "Huawei Pura 70 Ultra", "Huawei Pura 70 Pro", "Huawei Pura 70", "Huawei Mate 70 Pro", "Huawei Mate 70", "Huawei Mate X6", "Huawei Nova 13 Pro", "Huawei Nova 13"]
      },
      {
        name: "Honor",
        models: ["Honor Magic 7 Pro", "Honor Magic 7", "Honor Magic V3", "Honor 400 Pro", "Honor 400", "Honor 200 Pro", "Honor 200", "Honor 90", "Honor X9c", "Honor X8c"]
      },
      {
        name: "Oppo",
        models: ["Oppo Find X8 Pro", "Oppo Find X8", "Oppo Find N5", "Oppo Reno 13 Pro", "Oppo Reno 13", "Oppo Reno 12 Pro", "Oppo Reno 12", "Oppo A-Serie"]
      },
      {
        name: "OnePlus",
        models: ["OnePlus 13", "OnePlus 13R", "OnePlus 12", "OnePlus 12R", "OnePlus 11", "OnePlus 10 Pro", "OnePlus Nord 5", "OnePlus Nord 4", "OnePlus Nord CE 5", "OnePlus Nord CE 4", "OnePlus Nord 3", "OnePlus Nord 2"]
      },
      {
        name: "Nothing",
        models: ["Nothing Phone (3a) Pro", "Nothing Phone (3a)", "Nothing Phone (2a) Plus", "Nothing Phone (2a)", "Nothing Phone (2)", "Nothing Phone (1)", "CMF Phone 2 Pro", "CMF Phone 1"]
      },
      {
        name: "Realme",
        models: ["Realme GT 7 Pro", "Realme GT 6", "Realme GT 6T", "Realme 14 Pro+", "Realme 14 Pro", "Realme 13 Pro+", "Realme 13 Pro", "Realme Note Serie", "Realme C-Serie"]
      },
      {
        name: "Vivo",
        models: ["Vivo X200 Pro", "Vivo X200", "Vivo X100 Pro", "Vivo X100", "Vivo V50", "Vivo V40", "Vivo Y-Serie"]
      },
      {
        name: "Sony",
        models: ["Sony Xperia 1 VII", "Sony Xperia 1 VI", "Sony Xperia 5 V", "Sony Xperia 10 VII", "Sony Xperia 10 VI"]
      },
      {
        name: "Motorola",
        models: ["Motorola Edge 60 Pro", "Motorola Edge 60", "Motorola Edge 50 Ultra", "Motorola Edge 50 Pro", "Motorola Edge 50", "Motorola Razr 60 Ultra", "Motorola Razr 60", "Motorola Razr 50 Ultra", "Motorola Razr 50", "Moto G86", "Moto G85"]
      },
      {
        name: "Nokia",
        models: ["Nokia G-Serie", "Nokia X-Serie", "Nokia XR-Serie"]
      },
      {
        name: "Fairphone",
        models: ["Fairphone 6", "Fairphone 5", "Fairphone 4"]
      },
      {
        name: "Asus",
        models: ["Asus ROG Phone 9 Pro", "Asus ROG Phone 9", "Asus ROG Phone 8 Pro", "Asus ROG Phone 8", "Asus Zenfone 12 Ultra", "Asus Zenfone 11 Ultra", "Asus Zenfone 10"]
      },
      {
        name: "ZTE",
        models: ["ZTE Axon Serie"]
      },
      {
        name: "Nubia",
        models: ["Nubia Z70 Ultra", "Nubia Z60 Ultra", "Nubia RedMagic 10 Pro", "Nubia RedMagic 9 Pro", "Nubia RedMagic 8 Pro"]
      },
      {
        name: "TCL",
        models: ["TCL 50 Serie", "TCL 40 Serie"]
      },
      {
        name: "Blackview",
        models: ["Blackview Outdoor-Serie"]
      },
      {
        name: "Ulefone",
        models: ["Ulefone Armor Serie"]
      },
      {
        name: "Cat Phones",
        models: ["Cat Phones Outdoor-Serie"]
      }
    ],
    issues: [
      "Display kaputt", "Akku schwach", "Ladebuchse defekt", "Kamera defekt", "Rückseite beschädigt",
      "Lautsprecher defekt", "Mikrofon defekt", "Wasserschaden", "Gerät geht nicht mehr an",
      "Softwareproblem", "Datenrettung", "Sonstiges Problem"
    ]
  },
  {
    category: "Tablet / iPad",
    brands: [
      {
        name: "Apple",
        models: [
          "iPad Pro 13\" M4", "iPad Pro 11\" M4", "iPad Air 13\" M3", "iPad Air 11\" M3", "iPad Air 13\" M2",
          "iPad Air 11\" M2", "iPad 11. Generation", "iPad 10. Generation", "iPad mini 7. Generation", "iPad mini 6. Generation"
        ]
      },
      {
        name: "Samsung",
        models: [
          "Galaxy Tab S10 Ultra", "Galaxy Tab S10+", "Galaxy Tab S10 FE+", "Galaxy Tab S10 FE",
          "Galaxy Tab S9 Ultra", "Galaxy Tab S9+", "Galaxy Tab S9", "Galaxy Tab A9+", "Galaxy Tab A9"
        ]
      },
      {
        name: "Lenovo",
        models: ["Lenovo Tab P12 Pro", "Lenovo Tab P11 Pro", "Lenovo Tab M11", "Lenovo Tab M10"]
      },
      {
        name: "Huawei",
        models: ["Huawei MatePad Pro 13.2", "Huawei MatePad Pro 11", "Huawei MatePad 11.5", "Huawei MatePad SE"]
      },
      {
        name: "Microsoft",
        models: ["Microsoft Surface Pro 11", "Microsoft Surface Pro 10", "Microsoft Surface Pro 9", "Microsoft Surface Go 4", "Microsoft Surface Go 3"]
      },
      {
        name: "Xiaomi",
        models: ["Xiaomi Pad 6S Pro", "Xiaomi Pad 6", "Xiaomi Redmi Pad SE"]
      }
    ],
    issues: [
      "Display kaputt", "Akku schwach", "Ladebuchse defekt", "Kamera defekt", "Rückseite beschädigt",
      "Lautsprecher defekt", "Mikrofon defekt", "Wasserschaden", "Gerät geht nicht mehr an",
      "Softwareproblem", "Datenrettung", "Sonstiges Problem"
    ]
  },
  {
    category: "Laptop / MacBook",
    brands: [
      {
        name: "Apple",
        models: [
          "MacBook Air 13\" M4", "MacBook Air 15\" M4", "MacBook Pro 14\" M4", "MacBook Pro 14\" M4 Pro",
          "MacBook Pro 14\" M4 Max", "MacBook Pro 16\" M4 Pro", "MacBook Pro 16\" M4 Max", "MacBook Air 13\" M3",
          "MacBook Air 15\" M3", "MacBook Pro 14\" M3", "MacBook Pro 16\" M3", "MacBook Air M2", "MacBook Pro M2",
          "MacBook Air M1", "MacBook Pro M1"
        ]
      },
      {
        name: "Lenovo",
        models: ["Lenovo ThinkPad", "Lenovo IdeaPad", "Lenovo Yoga", "Lenovo Legion"]
      },
      {
        name: "HP",
        models: ["HP Pavilion", "HP Envy", "HP Spectre", "HP Omen"]
      },
      {
        name: "Dell",
        models: ["Dell XPS", "Dell Inspiron", "Dell Latitude", "Dell Alienware"]
      },
      {
        name: "Asus",
        models: ["Asus ZenBook", "Asus VivoBook", "Asus ROG", "Asus TUF Gaming"]
      },
      {
        name: "Acer",
        models: ["Acer Aspire", "Acer Swift", "Acer Predator"]
      },
      {
        name: "MSI",
        models: ["MSI Modern", "MSI Prestige", "MSI Katana", "MSI Stealth"]
      },
      {
        name: "Microsoft",
        models: ["Microsoft Surface Laptop"]
      }
    ],
    issues: [
      "Display defekt", "Akku schwach", "Tastatur defekt", "Ladeproblem", "Lüfter laut", "Gerät überhitzt",
      "SSD / Speicherproblem", "Wasserschaden", "Betriebssystem startet nicht", "Datenrettung", "Sonstiges Problem"
    ]
  },
  {
    category: "Spielekonsole",
    brands: [
      {
        name: "Sony PlayStation",
        models: ["PlayStation 5 Pro", "PlayStation 5 Slim", "PlayStation 5", "PlayStation 4 Pro", "PlayStation 4", "PlayStation 3", "PlayStation 2", "PlayStation Portable (PSP)", "PlayStation Vita"]
      },
      {
        name: "Microsoft Xbox",
        models: ["Xbox Series X", "Xbox Series S", "Xbox One X", "Xbox One S", "Xbox One", "Xbox 360", "Xbox (Original)"]
      },
      {
        name: "Nintendo",
        models: ["Nintendo Switch 2", "Nintendo Switch OLED", "Nintendo Switch", "Nintendo Switch Lite", "Wii U", "Wii", "Nintendo 3DS / 2DS", "Nintendo DS", "GameCube", "Nintendo 64", "SNES", "NES"]
      },
      {
        name: "Valve",
        models: ["Steam Deck OLED", "Steam Deck"]
      },
      {
        name: "Asus",
        models: ["Asus ROG Ally X", "Asus ROG Ally"]
      },
      {
        name: "Lenovo",
        models: ["Lenovo Legion Go"]
      }
    ],
    issues: [
      "HDMI-Anschluss defekt", "Konsole startet nicht", "Laufwerk defekt", "Überhitzung", "Lüfter laut",
      "Kein Bild", "Stromproblem", "Softwarefehler", "Reinigung / Wartung", "Sonstiges Problem"
    ]
  },
  {
    category: "Controller",
    brands: [
      {
        name: "Sony PlayStation",
        models: ["DualSense Edge Controller", "DualSense PS5 Controller", "DualShock 4 PS4 Controller", "DualShock 3 PS3 Controller", "DualShock 2 PS2 Controller"]
      },
      {
        name: "Microsoft Xbox",
        models: ["Xbox Elite Wireless Controller Series 2", "Xbox Wireless Controller", "Xbox 360 Controller"]
      },
      {
        name: "Nintendo",
        models: ["Nintendo Switch 2 Joy-Con", "Nintendo Switch 2 Pro Controller", "Nintendo Switch Joy-Con", "Nintendo Switch Pro Controller", "Wii Remote & Nunchuk", "GameCube Controller"]
      }
    ],
    issues: [
      "Stick Drift", "Taste reagiert nicht", "Ladeproblem", "Verbindung bricht ab", "Trigger defekt",
      "Akku defekt", "Sonstiges Problem"
    ]
  },
  {
    category: "Smartwatch",
    brands: [
      {
        name: "Apple",
        models: [
          "Apple Watch Series 11", "Apple Watch Series 10", "Apple Watch Series 9", "Apple Watch Series 8",
          "Apple Watch Ultra 3", "Apple Watch Ultra 2", "Apple Watch Ultra", "Apple Watch SE 3", "Apple Watch SE 2"
        ]
      },
      {
        name: "Samsung",
        models: [
          "Samsung Galaxy Watch 8 Classic", "Samsung Galaxy Watch 8", "Samsung Galaxy Watch Ultra",
          "Samsung Galaxy Watch 7", "Samsung Galaxy Watch 6", "Samsung Galaxy Watch 5"
        ]
      },
      {
        name: "Google",
        models: ["Google Pixel Watch 4", "Google Pixel Watch 3", "Google Pixel Watch 2"]
      },
      {
        name: "Huawei",
        models: ["Huawei Watch GT 5 Pro", "Huawei Watch GT 5", "Huawei Watch GT 4"]
      },
      {
        name: "Garmin",
        models: ["Garmin Fenix 8", "Garmin Fenix 7", "Garmin Forerunner Serie", "Garmin Venu Serie"]
      }
    ],
    issues: [
      "Display kaputt", "Akku schwach", "Touch reagiert nicht", "Wasserschaden", "Ladeproblem",
      "Gehäuse beschädigt", "Sonstiges Problem"
    ]
  },
  {
    category: "Sonstiges Gerät",
    brands: [],
    issues: ["Sonstiges Problem"]
  }
];
