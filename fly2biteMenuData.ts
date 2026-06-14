// Fly2Bite menu data for React/Claude import.
// All item images are optimized low-resolution WebP thumbnails under /public/assets/menu/.
// For public release, replace prototype/brand images with approved licensed assets and POS-driven pricing.

export const fly2biteMenuData = {
  "version": "2026-06-14",
  "project": "Fly2Bite",
  "scope": "IAH Terminal C prototype menu data for Claude/GitHub import",
  "defaultDemoContext": {
    "flight": "LH 441",
    "route": "IAH → BER",
    "terminal": "C",
    "gate": "C8"
  },
  "imagePolicy": {
    "format": "WEBP",
    "maxPixelSize": "260x260",
    "quality": "low-to-medium prototype thumbnails",
    "instruction": "Use local imageUrl for each item. Do not hotlink restaurant websites. Replace with approved/licensed brand assets before production."
  },
  "restaurants": [
    {
      "id": "starbucks-iah-terminal-c",
      "slug": "starbucks",
      "name": "Starbucks",
      "airport": "IAH",
      "terminal": "C",
      "nearGate": "C2",
      "deliverToGate": "C8",
      "prepTimeMinutes": {
        "min": 10,
        "max": 15
      },
      "deliveryEstimateToGateC8Minutes": 25,
      "description": "Coffee, espresso, refreshers, tea, and light beverages.",
      "badge": "Fastest",
      "assetFolder": "/assets/menu/starbucks/",
      "categories": [
        "Promotional Feature",
        "Coffeehouse Classics",
        "Starbucks Favorites",
        "Frappuccino® Blended Beverages",
        "Protein Beverages",
        "Starbucks Refreshers® Beverages",
        "Lemonade Refreshers",
        "Energy Refreshers"
      ],
      "items": [
        {
          "id": "sb-horchata-frappuccino",
          "name": "Horchata Frappuccino®",
          "category": "Promotional Feature",
          "description": "Blended beverage with cinnamon, vanilla, and toasted rice notes.",
          "price": 8.85,
          "priceDisplay": "$8.85",
          "calories": 400,
          "size": "Grande",
          "badges": [
            "NEW",
            "Featured"
          ],
          "imageUrl": "/assets/menu/starbucks/starbucks_horchata_frappuccino.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/40517/iced"
        },
        {
          "id": "sb-iced-horchata-shaken-espresso",
          "name": "Iced Horchata Shaken Espresso",
          "category": "Promotional Feature",
          "description": "Starbucks Blonde Espresso with horchata syrup, shaken with ice and topped with oatmilk.",
          "price": 7.75,
          "priceDisplay": "$7.75",
          "calories": 150,
          "size": "Grande",
          "badges": [
            "Featured"
          ],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/27497/iced"
        },
        {
          "id": "sb-freshly-brewed-coffee",
          "name": "Freshly Brewed Coffee",
          "category": "Coffeehouse Classics",
          "description": "Coffee & Espresso",
          "price": 4.95,
          "priceDisplay": "$4.95",
          "calories": 5,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/480/hot"
        },
        {
          "id": "sb-caff-americano",
          "name": "Caffè Americano",
          "category": "Coffeehouse Classics",
          "description": "Coffee & Espresso",
          "price": 6.25,
          "priceDisplay": "$6.25",
          "calories": 15,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/406/hot"
        },
        {
          "id": "sb-caff-latte",
          "name": "Caffè Latte",
          "category": "Coffeehouse Classics",
          "description": "Coffee & Espresso",
          "price": 7.55,
          "priceDisplay": "$7.55",
          "calories": 190,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/407/hot"
        },
        {
          "id": "sb-cappuccino",
          "name": "Cappuccino",
          "category": "Coffeehouse Classics",
          "description": "Coffee & Espresso",
          "price": 7.55,
          "priceDisplay": "$7.55",
          "calories": 140,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/409/hot"
        },
        {
          "id": "sb-flat-white",
          "name": "Flat White",
          "category": "Coffeehouse Classics",
          "description": "Coffee & Espresso",
          "price": 7.75,
          "priceDisplay": "$7.75",
          "calories": 220,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/565/hot"
        },
        {
          "id": "sb-caff-mocha",
          "name": "Caffè Mocha",
          "category": "Coffeehouse Classics",
          "description": "Coffee & Espresso",
          "price": 8.15,
          "priceDisplay": "$8.15",
          "calories": 370,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/408/hot"
        },
        {
          "id": "sb-white-chocolate-mocha",
          "name": "White Chocolate Mocha",
          "category": "Coffeehouse Classics",
          "description": "Coffee & Espresso",
          "price": 8.15,
          "priceDisplay": "$8.15",
          "calories": 390,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/420/hot"
        },
        {
          "id": "sb-caramel-macchiato",
          "name": "Caramel Macchiato",
          "category": "Coffeehouse Classics",
          "description": "Coffee & Espresso",
          "price": 8.15,
          "priceDisplay": "$8.15",
          "calories": 250,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/413/hot"
        },
        {
          "id": "sb-cortado",
          "name": "Cortado",
          "category": "Coffeehouse Classics",
          "description": "Coffee & Espresso",
          "price": 6.85,
          "priceDisplay": "$6.85",
          "calories": 90,
          "size": "Short 8 fl oz",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/2124649/hot"
        },
        {
          "id": "sb-iced-coffee",
          "name": "Iced Coffee",
          "category": "Starbucks Favorites",
          "description": "Cold Coffee, Espresso & Tea",
          "price": 5.85,
          "priceDisplay": "$5.85",
          "calories": 5,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/2123863/iced"
        },
        {
          "id": "sb-vanilla-sweet-cream-cold-brew",
          "name": "Vanilla Sweet Cream Cold Brew",
          "category": "Starbucks Favorites",
          "description": "Cold Coffee, Espresso & Tea",
          "price": 6.85,
          "priceDisplay": "$6.85",
          "calories": 110,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/2121859/iced"
        },
        {
          "id": "sb-iced-brown-sugar-oatmilk-shaken-espresso",
          "name": "Iced Brown Sugar Oatmilk Shaken Espresso",
          "category": "Starbucks Favorites",
          "description": "Cold Coffee, Espresso & Tea",
          "price": 8.45,
          "priceDisplay": "$8.45",
          "calories": 150,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/2123431/iced"
        },
        {
          "id": "sb-chai-latte",
          "name": "Chai Latte",
          "category": "Starbucks Favorites",
          "description": "Cold Coffee, Espresso & Tea",
          "price": 7.75,
          "priceDisplay": "$7.75",
          "calories": 190,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/466/hot"
        },
        {
          "id": "sb-matcha-latte",
          "name": "Matcha Latte",
          "category": "Starbucks Favorites",
          "description": "Cold Coffee, Espresso & Tea",
          "price": 7.75,
          "priceDisplay": "$7.75",
          "calories": 220,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/468/iced"
        },
        {
          "id": "sb-horchata",
          "name": "Horchata",
          "category": "Frappuccino® Blended Beverages",
          "description": "Starbucks beverage.",
          "price": 8.85,
          "priceDisplay": "$8.85",
          "calories": 400,
          "size": "Grande",
          "badges": [
            "NEW"
          ],
          "imageUrl": "/assets/menu/starbucks/starbucks_horchata_frappuccino.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/40517/iced"
        },
        {
          "id": "sb-caramel-ribbon-crunch",
          "name": "Caramel Ribbon Crunch",
          "category": "Frappuccino® Blended Beverages",
          "description": "Starbucks beverage.",
          "price": 9.05,
          "priceDisplay": "$9.05",
          "calories": 470,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_horchata_frappuccino.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/1044/iced"
        },
        {
          "id": "sb-caramel-protein-latte",
          "name": "Caramel Protein Latte",
          "category": "Protein Beverages",
          "description": "Starbucks beverage.",
          "price": 9.35,
          "priceDisplay": "$9.35",
          "calories": 320,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/28576/hot"
        },
        {
          "id": "sb-iced-caramel-protein-matcha",
          "name": "Iced Caramel Protein Matcha",
          "category": "Protein Beverages",
          "description": "Starbucks beverage.",
          "price": 9.45,
          "priceDisplay": "$9.45",
          "calories": 270,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_iced_horchata.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/28731/iced"
        },
        {
          "id": "sb-tropical-butterfly-lemonade",
          "name": "Tropical Butterfly Lemonade",
          "category": "Starbucks Refreshers® Beverages",
          "description": "New Summer Flavors",
          "price": 9.05,
          "priceDisplay": "$9.05",
          "calories": 140,
          "size": "Grande",
          "badges": [
            "NEW"
          ],
          "imageUrl": "/assets/menu/starbucks/starbucks_tropical_butterfly_lemonade_refresher.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/40579/iced"
        },
        {
          "id": "sb-tropical-butterfly",
          "name": "Tropical Butterfly",
          "category": "Starbucks Refreshers® Beverages",
          "description": "New Summer Flavors",
          "price": 8.45,
          "priceDisplay": "$8.45",
          "calories": 90,
          "size": "Grande",
          "badges": [
            "NEW"
          ],
          "imageUrl": "/assets/menu/starbucks/starbucks_tropical_butterfly_refresher.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/40577/iced"
        },
        {
          "id": "sb-butterfly-drink",
          "name": "Butterfly Drink",
          "category": "Starbucks Refreshers® Beverages",
          "description": "New Summer Flavors",
          "price": 9.05,
          "priceDisplay": "$9.05",
          "calories": 120,
          "size": "Grande",
          "badges": [
            "NEW"
          ],
          "imageUrl": "/assets/menu/starbucks/starbucks_butterfly_drink.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/40578/iced"
        },
        {
          "id": "sb-strawberry-a-a-lemonade",
          "name": "Strawberry Açaí Lemonade",
          "category": "Lemonade Refreshers",
          "description": "Starbucks beverage.",
          "price": 7.55,
          "priceDisplay": "$7.55",
          "calories": 140,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_tropical_butterfly_lemonade_refresher.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/2122677/iced"
        },
        {
          "id": "sb-mango-dragonfruit-lemonade",
          "name": "Mango Dragonfruit Lemonade",
          "category": "Lemonade Refreshers",
          "description": "Starbucks beverage.",
          "price": 7.55,
          "priceDisplay": "$7.55",
          "calories": 140,
          "size": "Grande",
          "badges": [],
          "imageUrl": "/assets/menu/starbucks/starbucks_tropical_butterfly_lemonade_refresher.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/2122756/iced"
        },
        {
          "id": "sb-strawberry-a-a-energy",
          "name": "Strawberry Açaí Energy",
          "category": "Energy Refreshers",
          "description": "Starbucks beverage.",
          "price": 7.75,
          "priceDisplay": "$7.75",
          "calories": 100,
          "size": "Grande",
          "badges": [
            "NEW"
          ],
          "imageUrl": "/assets/menu/starbucks/starbucks_tropical_butterfly_refresher.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/40500/iced"
        },
        {
          "id": "sb-mango-strawberry-energy",
          "name": "Mango Strawberry Energy",
          "category": "Energy Refreshers",
          "description": "Starbucks beverage.",
          "price": 7.75,
          "priceDisplay": "$7.75",
          "calories": 130,
          "size": "Grande",
          "badges": [
            "NEW"
          ],
          "imageUrl": "/assets/menu/starbucks/starbucks_tropical_butterfly_refresher.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/40502/iced"
        },
        {
          "id": "sb-pink-energy-drink",
          "name": "Pink Energy Drink",
          "category": "Energy Refreshers",
          "description": "Starbucks beverage.",
          "price": 8.45,
          "priceDisplay": "$8.45",
          "calories": 140,
          "size": "Grande",
          "badges": [
            "NEW"
          ],
          "imageUrl": "/assets/menu/starbucks/starbucks_tropical_butterfly_refresher.webp",
          "sourceProductUrl": "https://www.starbucks.com/menu/product/40498/iced"
        }
      ],
      "usageNote": "Low-resolution local images are included for prototype menu cards. Replace with approved brand assets for production."
    },
    {
      "id": "velvet_taco_iah_terminal_c",
      "slug": "velvet-taco",
      "name": "Velvet Taco",
      "airport": "IAH",
      "terminal": "C",
      "nearGate": "C5",
      "deliverToGate": "C8",
      "prepTimeMinutes": {
        "min": 15,
        "max": 20
      },
      "deliveryEstimateToGateC8Minutes": 35,
      "description": "Bold tacos, bowls, sides, margaritas, and red velvet cake.",
      "badge": "Popular",
      "brandColor": "#EC00B8",
      "logoUrl": "/assets/menu/velvet-taco/logo.webp",
      "assetFolder": "/assets/menu/velvet-taco/",
      "categories": [
        "Bundles",
        "Bowls",
        "Quesadillas",
        "Tacos",
        "Breakfast",
        "Sides",
        "Boozy Libations",
        "Cake"
      ],
      "items": [
        {
          "id": "vt_bundle_two_tacos_side",
          "name": "Bundle",
          "category": "Bundles",
          "subcategory": "Combo",
          "description": "Choose any two tacos and one side. Board note: +$1.50 per taco for beef or shrimp. Side choices shown: classic guac, elote, or queso blanco.",
          "price": 17.45,
          "priceDisplay": "$17.45",
          "calories": null,
          "badges": [],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_bundle_two_tacos_side.webp"
        },
        {
          "id": "vt_bowl_brisket",
          "name": "Slow-Roasted Angus Brisket Bowl",
          "category": "Bowls",
          "subcategory": null,
          "description": "Queso blanco, corn pico, black beans, guacamole, red chile aioli, cheese encrusted tortilla halves, micro cilantro, basmati rice.",
          "price": 17.15,
          "priceDisplay": "$17.15",
          "calories": "1090–1410",
          "badges": [],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_bowl_brisket.webp"
        },
        {
          "id": "vt_bowl_spicy_tikka_chicken",
          "name": "Spicy Tikka Chicken Bowl",
          "category": "Bowls",
          "subcategory": null,
          "description": "Crisp tenders, tikka sauce, raita crema, red cabbage, cucumber, Thai basil, basmati rice.",
          "price": 14.65,
          "priceDisplay": "$14.65",
          "calories": "500–970",
          "badges": [
            "Halal",
            "Fan Favorite"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_bowl_spicy_tikka_chicken.webp"
        },
        {
          "id": "vt_bowl_mexi_cali_shrimp",
          "name": "Mexi-Cali Shrimp Bowl",
          "category": "Bowls",
          "subcategory": null,
          "description": "Blackened shrimp, napa slaw, corn pico, sriracha aioli, guacamole, micro cilantro, basmati rice.",
          "price": 15.9,
          "priceDisplay": "$15.90",
          "calories": "460–870",
          "badges": [
            "Halal",
            "Fan Favorite"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_bowl_mexi_cali_shrimp.webp"
        },
        {
          "id": "vt_bowl_seasonal_veggie",
          "name": "Seasonal Veggie Bowl",
          "category": "Bowls",
          "subcategory": null,
          "description": "Roasted veggies, guacamole, corn pico, avocado crema, pickled onion, queso blanco, napa slaw, basmati rice.",
          "price": 14.65,
          "priceDisplay": "$14.65",
          "calories": "630–1040",
          "badges": [
            "Vegetarian",
            "Gluten Friendly"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_bowl_seasonal_veggie.webp"
        },
        {
          "id": "vt_quesadilla_brisket",
          "name": "Slow-Roasted Angus Brisket Quesadilla",
          "category": "Quesadillas",
          "subcategory": null,
          "description": "Barbacoa style brisket, cheese blend, flour tortilla, mayo crema, classic guac, corn pico.",
          "price": 16.85,
          "priceDisplay": "$16.85",
          "calories": "845",
          "badges": [],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_quesadilla_brisket.webp"
        },
        {
          "id": "vt_quesadilla_chicken",
          "name": "Chicken Quesadilla",
          "category": "Quesadillas",
          "subcategory": null,
          "description": "Crispy chicken, cheese blend, flour tortilla, mayo crema, classic guac, corn pico.",
          "price": 15.15,
          "priceDisplay": "$15.15",
          "calories": "900",
          "badges": [
            "Halal"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_quesadilla_chicken.webp"
        },
        {
          "id": "vt_quesadilla_cheese",
          "name": "Cheese Quesadilla",
          "category": "Quesadillas",
          "subcategory": null,
          "description": "Cheese blend, flour tortilla, mayo crema, classic guac, corn pico.",
          "price": 12.25,
          "priceDisplay": "$12.25",
          "calories": "765",
          "badges": [
            "Vegetarian"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_quesadilla_cheese.webp"
        },
        {
          "id": "vt_taco_spicy_tikka_chicken",
          "name": "Spicy Tikka Chicken Taco",
          "category": "Tacos",
          "subcategory": "Chick",
          "description": "Crisp tenders, tikka sauce, basmati rice, raita crema, Thai basil, flour tortilla.",
          "price": 7.19,
          "priceDisplay": "$7.19",
          "calories": "420",
          "badges": [
            "Halal",
            "Fan Favorite"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_taco_spicy_tikka_chicken.webp"
        },
        {
          "id": "vt_taco_buffalo_chicken",
          "name": "Buffalo Chicken Taco",
          "category": "Tacos",
          "subcategory": "Chick",
          "description": "Crisp tenders, buffalo sauce, carrots, bleu cheese, ranch crema, flour tortilla.",
          "price": 7.19,
          "priceDisplay": "$7.19",
          "calories": "390",
          "badges": [
            "Halal"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_taco_buffalo_chicken.webp"
        },
        {
          "id": "vt_taco_chicken_waffle",
          "name": "Chicken & Waffle Taco",
          "category": "Tacos",
          "subcategory": "Chick",
          "description": "Crisp tenders, bacon, peppercorn gravy, apple slaw, maple syrup, red chile aioli, scallions, waffle tortilla.",
          "price": 7.55,
          "priceDisplay": "$7.55",
          "calories": "490",
          "badges": [],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_taco_chicken_waffle.webp"
        },
        {
          "id": "vt_taco_brisket",
          "name": "Slow-Roasted Angus Brisket Taco",
          "category": "Tacos",
          "subcategory": "Beef",
          "description": "Red chile aioli, avocado, corn pico, queso blanco, micro cilantro, cheese encrusted flour tortilla.",
          "price": 8.1,
          "priceDisplay": "$8.10",
          "calories": "510",
          "badges": [],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_taco_brisket.webp"
        },
        {
          "id": "vt_taco_bacon_smash_burger",
          "name": "Bacon Smash Burger Taco",
          "category": "Tacos",
          "subcategory": "Beef",
          "description": "Bacon, cheese blend, lettuce, red onion, tomato, pickles, velvet sauce, flour tortilla.",
          "price": 7.7,
          "priceDisplay": "$7.70",
          "calories": "390",
          "badges": [
            "Fan Favorite"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_taco_bacon_smash_burger.webp"
        },
        {
          "id": "vt_taco_mexi_cali_shrimp",
          "name": "Mexi-Cali Shrimp Taco",
          "category": "Tacos",
          "subcategory": "Sea",
          "description": "Blackened shrimp, napa slaw, sriracha aioli, avocado, corn pico, micro cilantro, flour tortilla.",
          "price": 7.7,
          "priceDisplay": "$7.70",
          "calories": "280",
          "badges": [
            "Fan Favorite",
            "Halal"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_taco_mexi_cali_shrimp.webp"
        },
        {
          "id": "vt_taco_grilled_salmon",
          "name": "Grilled Salmon Taco",
          "category": "Tacos",
          "subcategory": "Sea",
          "description": "Napa slaw, lime crema, pickled fresnos, corn pico, avocado crema, micro cilantro, corn tortilla.",
          "price": 8.1,
          "priceDisplay": "$8.10",
          "calories": "220",
          "badges": [
            "Gluten Friendly"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_taco_grilled_salmon.webp"
        },
        {
          "id": "vt_taco_sweet_chili_shrimp",
          "name": "Sweet Chili Shrimp Taco",
          "category": "Tacos",
          "subcategory": "Sea",
          "description": "Panko fried shrimp, sweet chile sauce, kimchee slaw, sriracha aioli, carrots, pickled fresnos, scallions, flour tortilla.",
          "price": 7.7,
          "priceDisplay": "$7.70",
          "calories": "390",
          "badges": [],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_taco_sweet_chili_shrimp.webp"
        },
        {
          "id": "vt_taco_beer_battered_cauliflower",
          "name": "Beer Battered Cauliflower Taco",
          "category": "Tacos",
          "subcategory": "Veg",
          "description": "Queso blanco, sabor hot sauce, avocado, corn pico, candied pepitas, flour tortilla.",
          "price": 6.85,
          "priceDisplay": "$6.85",
          "calories": "300",
          "badges": [
            "Vegetarian",
            "Fan Favorite"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_taco_beer_battered_cauliflower.webp"
        },
        {
          "id": "vt_taco_crispy_avocado",
          "name": "Crispy Avocado Taco",
          "category": "Tacos",
          "subcategory": "Veg",
          "description": "Scrambled egg, red chile aioli, grilled onion and poblanos, sabor hot sauce, queso fresco, flour tortilla.",
          "price": 6.75,
          "priceDisplay": "$6.75",
          "calories": "440",
          "badges": [
            "Vegetarian"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_taco_crispy_avocado.webp"
        },
        {
          "id": "vt_breakfast_velvet_griddle",
          "name": "Velvet Griddle Taco",
          "category": "Breakfast",
          "subcategory": null,
          "description": "Candied bacon, tater tots, scrambled egg, maple syrup, French toast tortilla.",
          "price": 5.95,
          "priceDisplay": "$5.95",
          "calories": "530",
          "badges": [],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_breakfast_velvet_griddle.webp"
        },
        {
          "id": "vt_breakfast_hangover",
          "name": "Hangover Breakfast Taco",
          "category": "Breakfast",
          "subcategory": null,
          "description": "Barbacoa style brisket, peppered bacon, crispy potatoes, scrambled egg, red chile aioli, cheese blend, flour tortilla.",
          "price": 6.95,
          "priceDisplay": "$6.95",
          "calories": "520",
          "badges": [],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_breakfast_hangover.webp"
        },
        {
          "id": "vt_breakfast_farmhouse",
          "name": "Farmhouse Taco",
          "category": "Breakfast",
          "subcategory": null,
          "description": "Jalapeno cheddar sausage, crispy chicken tender, scrambled egg, cheese blend, chimichurri hollandaise, flour tortilla.",
          "price": 6.75,
          "priceDisplay": "$6.75",
          "calories": "530",
          "badges": [],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_breakfast_farmhouse.webp"
        },
        {
          "id": "vt_breakfast_side_crisp_tots_sunny_egg",
          "name": "Side Crisp Tots & Sunny Egg",
          "category": "Breakfast",
          "subcategory": null,
          "description": "Herb goat cheese, smoked cheddar, avocado crema, chile butter, peppered bacon, scallions.",
          "price": 8.1,
          "priceDisplay": "$8.10",
          "calories": "525",
          "badges": [
            "Gluten Friendly"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_breakfast_side_crisp_tots_sunny_egg.webp"
        },
        {
          "id": "vt_side_queso_blanco",
          "name": "Queso Blanco",
          "category": "Sides",
          "subcategory": null,
          "description": "Chimichurri, Velvet Taco heat sauce, cilantro, blue corn tortilla chips.",
          "price": 8.1,
          "priceDisplay": "$8.10",
          "calories": "670",
          "badges": [
            "Vegetarian",
            "Gluten Friendly"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_side_queso_blanco.webp"
        },
        {
          "id": "vt_side_elote",
          "name": "Elote",
          "category": "Sides",
          "subcategory": null,
          "description": "Queso listo, Valentina, citrus lime crema, queso fresco, lime, blue corn tortilla chips.",
          "price": 8.1,
          "priceDisplay": "$8.10",
          "calories": "595",
          "badges": [
            "Vegetarian",
            "Gluten Friendly"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_side_elote.webp"
        },
        {
          "id": "vt_side_classic_guac",
          "name": "Classic Guac",
          "category": "Sides",
          "subcategory": null,
          "description": "Avocado, cilantro, jalapeno, lime juice, red onion, blue corn tortilla chips.",
          "price": 7.7,
          "priceDisplay": "$7.70",
          "calories": "470",
          "badges": [
            "Vegetarian",
            "Gluten Friendly"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_side_classic_guac.webp"
        },
        {
          "id": "vt_side_elote_guac",
          "name": "Elote Guac",
          "category": "Sides",
          "subcategory": null,
          "description": "Classic guac, roasted corn, queso listo, Valentina, citrus lime crema, queso fresco, lime, blue corn tortilla chips.",
          "price": 8.45,
          "priceDisplay": "$8.45",
          "calories": "540",
          "badges": [
            "Vegetarian",
            "Gluten Friendly"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_side_elote_guac.webp"
        },
        {
          "id": "vt_side_brisket_nachos",
          "name": "Brisket Nachos",
          "category": "Sides",
          "subcategory": null,
          "description": "Barbacoa style brisket, queso blanco, blue corn tortilla chips, roasted corn pico, citrus lime crema, chimichurri, queso fresco, cilantro.",
          "price": 10.2,
          "priceDisplay": "$10.20",
          "calories": "583",
          "badges": [
            "Gluten Friendly"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_side_brisket_nachos.webp"
        },
        {
          "id": "vt_side_crisp_tots_sunny_egg",
          "name": "Crisp Tots & Sunny Egg",
          "category": "Sides",
          "subcategory": null,
          "description": "Herb goat cheese, smoked cheddar, avocado crema, chile butter, peppered bacon, scallions.",
          "price": 8.1,
          "priceDisplay": "$8.10",
          "calories": "525",
          "badges": [
            "Gluten Friendly"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_side_crisp_tots_sunny_egg.webp"
        },
        {
          "id": "vt_drink_margarita_regular",
          "name": "Kick Ass Margarita - Regular",
          "category": "Boozy Libations",
          "subcategory": null,
          "description": "Lunazul premium blanco tequila, orange liqueur, lime juice, agave nectar. Frozen or rocks.",
          "price": 17.0,
          "priceDisplay": "$17.00",
          "calories": "Frozen 380 / Rocks 410",
          "badges": [
            "21+"
          ],
          "ageRestricted": true,
          "imageUrl": "/assets/menu/velvet-taco/vt_drink_margarita_regular.webp"
        },
        {
          "id": "vt_drink_margarita_large",
          "name": "Kick Ass Margarita - Large",
          "category": "Boozy Libations",
          "subcategory": null,
          "description": "Lunazul premium blanco tequila, orange liqueur, lime juice, agave nectar. Frozen or rocks.",
          "price": 19.0,
          "priceDisplay": "$19.00",
          "calories": "Frozen 580 / Rocks 500",
          "badges": [
            "21+"
          ],
          "ageRestricted": true,
          "imageUrl": "/assets/menu/velvet-taco/vt_drink_margarita_large.webp"
        },
        {
          "id": "vt_drink_grand_margarita_addon",
          "name": "Grand Margarita Floater Add-On",
          "category": "Boozy Libations",
          "subcategory": null,
          "description": "Add a Grand Marnier floater to a margarita.",
          "price": 5.0,
          "priceDisplay": "$5.00",
          "calories": "38",
          "badges": [
            "21+",
            "Add-on"
          ],
          "ageRestricted": true,
          "imageUrl": "/assets/menu/velvet-taco/vt_drink_grand_margarita_addon.webp"
        },
        {
          "id": "vt_drink_sangrita",
          "name": "Sangrita",
          "category": "Boozy Libations",
          "subcategory": null,
          "description": "Red wine blend, kick ass margarita, boozy pineapples and apples.",
          "price": 17.0,
          "priceDisplay": "$17.00",
          "calories": "Regular 360 / Large 480",
          "badges": [
            "21+"
          ],
          "ageRestricted": true,
          "imageUrl": "/assets/menu/velvet-taco/vt_drink_sangrita.webp"
        },
        {
          "id": "vt_drink_sangrita_swirl",
          "name": "Sangrita Swirl",
          "category": "Boozy Libations",
          "subcategory": null,
          "description": "Red wine blend with frozen margarita.",
          "price": 17.0,
          "priceDisplay": "$17.00",
          "calories": "Regular 400 / Large 630",
          "badges": [
            "21+"
          ],
          "ageRestricted": true,
          "imageUrl": "/assets/menu/velvet-taco/vt_drink_sangrita_swirl.webp"
        },
        {
          "id": "vt_drink_electric_lemonade",
          "name": "Electric Lemonade",
          "category": "Boozy Libations",
          "subcategory": null,
          "description": "Tito's vodka, dragon fruit, lemonade.",
          "price": 17.0,
          "priceDisplay": "$17.00",
          "calories": "Regular 270 / Large 430",
          "badges": [
            "21+"
          ],
          "ageRestricted": true,
          "imageUrl": "/assets/menu/velvet-taco/vt_drink_electric_lemonade.webp"
        },
        {
          "id": "vt_dessert_red_velvet_cake",
          "name": "Red Velvet Cake",
          "category": "Cake",
          "subcategory": null,
          "description": "House-made red velvet cake, cream cheese frosting, cajeta drizzle.",
          "price": 5.9,
          "priceDisplay": "$5.90",
          "calories": "1020",
          "badges": [
            "Vegetarian"
          ],
          "ageRestricted": false,
          "imageUrl": "/assets/menu/velvet-taco/vt_dessert_red_velvet_cake.webp"
        }
      ],
      "usageNote": "Low-resolution local item images are included for prototype menu cards. Alcohol items remain age-restricted and should be hidden or disabled unless the app supports proper compliance."
    },
    {
      "id": "hugos-cocina",
      "slug": "hugos-cocina",
      "name": "Hugo’s Cocina",
      "airport": "IAH",
      "terminal": "C",
      "nearGate": "C8",
      "deliverToGate": "C8",
      "prepTimeMinutes": {
        "min": 20,
        "max": 25
      },
      "deliveryEstimateToGateC8Minutes": 45,
      "description": "Fresh Mexican dishes made daily.",
      "badge": "Popular",
      "logoUrl": "/assets/menu/hugos-cocina/logo.webp",
      "assetFolder": "/assets/menu/hugos-cocina/",
      "categories": [
        "Appetizers",
        "Soups & Salads",
        "Breakfast",
        "Tacos",
        "Mexican Sandwiches",
        "Main Plates",
        "Sides"
      ],
      "items": [
        {
          "id": "hugos-queso-flameado",
          "name": "Queso Flameado",
          "category": "Entremeses",
          "description": "Wood-grilled skirt steak, onions, mushrooms, and rajas.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "appetizer"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-queso-flameado.webp"
        },
        {
          "id": "hugos-taquitos-de-pollo",
          "name": "Taquitos de Pollo",
          "category": "Entremeses",
          "description": "Rolled fried tacos stuffed with chicken, served with refried beans, guacamole, salsa de albañil, and crema fresca.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "appetizer",
            "popular"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-taquitos-de-pollo.webp"
        },
        {
          "id": "hugos-quesadillas",
          "name": "Quesadillas",
          "category": "Entremeses",
          "description": "Oaxaca cheese with sautéed mushrooms, onions, and peppers.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "appetizer",
            "vegetarian-base"
          ],
          "dietary": [
            "vegetarian option"
          ],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-quesadillas.webp"
        },
        {
          "id": "hugos-tacos-al-pastor",
          "name": "Tacos al Pastor",
          "category": "Entremeses",
          "description": "Pastor-style marinated pork with salsa habanero, diced pineapple, onion, cilantro, and lime.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "pork"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-tacos-al-pastor.webp"
        },
        {
          "id": "hugos-caesar-salad",
          "name": "Caesar Salad",
          "category": "Sopa y Ensaladas",
          "description": "Traditional Caesar salad.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "salad"
          ],
          "dietary": [
            "vegetarian-base"
          ],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-caesar-salad.webp"
        },
        {
          "id": "hugos-pozole",
          "name": "Pozole",
          "category": "Sopa y Ensaladas",
          "description": "Big bowl of hominy and chicken soup with traditional garnishes.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "soup",
            "chicken"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-pozole.webp"
        },
        {
          "id": "hugos-tortilla-soup",
          "name": "Tortilla Soup",
          "category": "Sopa y Ensaladas",
          "description": "Chicken, tortilla strips, crema fresca, avocado, flavored with dried chipotle peppers.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "soup",
            "chicken"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-tortilla-soup.webp"
        },
        {
          "id": "hugos-ensalada-de-casa",
          "name": "Ensalada de Casa",
          "category": "Sopa y Ensaladas",
          "description": "Arcadian mix, cherry tomatoes, watermelon radish, pumpkin seeds, cotija cheese, and creamy cilantro dressing.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "salad"
          ],
          "dietary": [
            "vegetarian"
          ],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-ensalada-de-casa.webp"
        },
        {
          "id": "hugos-huevos-rancheros",
          "name": "Huevos Rancheros",
          "category": "Desayunos",
          "description": "Two corn tortillas, refried beans, grilled skirt steak, sunny fried eggs, salsa de tomate, and herbs.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "breakfast"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-huevos-rancheros.webp"
        },
        {
          "id": "hugos-breakfast-egg-tacos",
          "name": "Breakfast Egg Tacos",
          "category": "Desayunos",
          "description": "Breakfast tacos with choice of ham, bacon, potato, or sausage.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "breakfast",
            "tacos"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-breakfast-egg-tacos.webp"
        },
        {
          "id": "hugos-migas",
          "name": "Migas",
          "category": "Desayunos",
          "description": "Scrambled eggs, tortilla chips, jalapeño, tomato, black beans, and bacon.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "breakfast"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-migas.webp"
        },
        {
          "id": "hugos-american-breakfast",
          "name": "American Breakfast",
          "category": "Desayunos",
          "description": "Two eggs with bacon or sausage, toast, and potato wedges.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "breakfast"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-american-breakfast.webp"
        },
        {
          "id": "hugos-tacos-de-pescado",
          "name": "Tacos de Pescado",
          "category": "Tacos",
          "description": "Fried fish tacos “Baja style” with napa cabbage, chipotle mayo, and pico de gallo. Served with refried beans and Mexican rice.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "tacos",
            "seafood"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-tacos-de-pescado.webp"
        },
        {
          "id": "hugos-tacos-de-camarones",
          "name": "Tacos de Camarones",
          "category": "Tacos",
          "description": "Bacon-wrapped shrimp with refried beans, cabbage, chipotle mayo, and pico de gallo. Served with refried beans and Mexican rice.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "tacos",
            "seafood"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-tacos-de-camarones.webp"
        },
        {
          "id": "hugos-tacos-de-carnitas",
          "name": "Tacos de Carnitas",
          "category": "Tacos",
          "description": "Tender slow-cooked pork with pico de gallo and habanero salsa. Served with refried beans and Mexican rice.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "tacos",
            "pork"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-tacos-de-carnitas.webp"
        },
        {
          "id": "hugos-torta-aguacate-hongos-queso",
          "name": "Torta Aguacate, Hongos y Queso",
          "category": "Tortas",
          "description": "Avocado, sautéed mushrooms, onions, peppers, lettuce, tomato, black beans, chipotle mayo, and Oaxaca cheese.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "sandwich",
            "vegetarian"
          ],
          "dietary": [
            "vegetarian"
          ],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-torta-aguacate-hongos-queso.webp"
        },
        {
          "id": "hugos-cemita-de-pollo",
          "name": "Cemita de Pollo",
          "category": "Tortas",
          "description": "Chicken milanese on a sesame seed bun.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "sandwich",
            "chicken"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-cemita-de-pollo.webp"
        },
        {
          "id": "hugos-hamburger",
          "name": "Hugo’s Hamburger",
          "category": "Tortas",
          "description": "Hamburger with jalapeños, Oaxaca cheese, and chipotle mayonnaise.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "sandwich",
            "burger"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-hamburger.webp"
        },
        {
          "id": "hugos-torta-jamon-pavo",
          "name": "Torta de Jamon o de Pavo",
          "category": "Tortas",
          "description": "Choice of ham or turkey with Oaxaca cheese, avocado, refried beans, arugula, chipotle mayo, tomatoes, on a sesame seed bun; served with chips and salsa.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "sandwich"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-torta-jamon-pavo.webp"
        },
        {
          "id": "hugos-carnitas",
          "name": "Carnitas",
          "category": "Platos Fuertes",
          "description": "Tender slow-cooked pork with pico de gallo, refried beans, and Mexican rice.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "main plate",
            "pork"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-carnitas.webp"
        },
        {
          "id": "hugos-enchiladas-de-pollo",
          "name": "Enchiladas de Pollo",
          "category": "Platos Fuertes",
          "description": "Roasted chicken enchiladas with choice of tomatillo or salsa de tomate; served with refried beans and Mexican rice.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "main plate",
            "chicken"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-enchiladas-de-pollo.webp"
        },
        {
          "id": "hugos-carne-brava",
          "name": "Carne Brava",
          "category": "Platos Fuertes",
          "description": "Wood-grilled skirt steak smothered in onions and peppers, with guacamole, tortillas, refried beans, and Mexican rice.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "main plate",
            "steak"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-carne-brava.webp"
        },
        {
          "id": "hugos-camarones-al-ajillo",
          "name": "Camarones Al Ajillo",
          "category": "Platos Fuertes",
          "description": "Sautéed shrimp with salsa de ajo, chile de árbol, salsa albañil, greens, and rice.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "main plate",
            "seafood"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-camarones-al-ajillo.webp"
        },
        {
          "id": "hugos-dos-tostadas",
          "name": "Dos Tostadas",
          "category": "Platos Fuertes",
          "description": "Two tostadas with sautéed shrimp or grilled skirt steak, refried beans, cabbage, crema fresca, avocado, pico de gallo, and cotija cheese.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "main plate"
          ],
          "dietary": [],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-dos-tostadas.webp"
        },
        {
          "id": "hugos-refried-beans",
          "name": "Refried Beans",
          "category": "Sides",
          "description": "Side of refried beans.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "side"
          ],
          "dietary": [
            "vegetarian"
          ],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-refried-beans.webp"
        },
        {
          "id": "hugos-papas-rostizadas",
          "name": "Papas Rostizadas",
          "category": "Sides",
          "description": "Side of roasted potatoes.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "side"
          ],
          "dietary": [
            "vegetarian"
          ],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-papas-rostizadas.webp"
        },
        {
          "id": "hugos-mexican-rice",
          "name": "Mexican Rice",
          "category": "Sides",
          "description": "Side of Mexican rice.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "side"
          ],
          "dietary": [
            "vegetarian"
          ],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-mexican-rice.webp"
        },
        {
          "id": "hugos-salsa-with-chips",
          "name": "Salsa with Chips",
          "category": "Sides",
          "description": "Salsa served with tortilla chips.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "side",
            "chips"
          ],
          "dietary": [
            "vegetarian"
          ],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-salsa-with-chips.webp"
        },
        {
          "id": "hugos-guacamole-with-chips",
          "name": "Guacamole with Chips",
          "category": "Sides",
          "description": "Guacamole served with tortilla chips.",
          "price": null,
          "priceDisplay": "TBD",
          "priceSource": "airport_menu_photo_no_prices",
          "calories": null,
          "tags": [
            "side",
            "chips",
            "popular"
          ],
          "dietary": [
            "vegetarian"
          ],
          "imageUrl": "/assets/menu/hugos-cocina/hugos-guacamole-with-chips.webp"
        }
      ],
      "usageNote": "Airport menu-board did not show prices. Use TBD in the app or connect to POS before production."
    },
    {
      "id": "chick-fil-a-iah-terminal-c",
      "slug": "chick-fil-a",
      "name": "Chick-fil-A",
      "airport": "IAH",
      "terminal": "C",
      "nearGate": "C16",
      "deliverToGate": "C8",
      "prepTimeMinutes": {
        "min": 20,
        "max": 25
      },
      "deliveryEstimateToGateC8Minutes": 40,
      "description": "Chicken classics, grilled options, salads, lemonade, iced tea, and quick airport meals.",
      "badge": "Best for on-time delivery",
      "assetFolder": "/assets/menu/chick-fil-a/",
      "categories": [
        "Original Meals",
        "Grilled Meals",
        "Salads",
        "Sides",
        "Drinks"
      ],
      "items": [
        {
          "id": "cfa-chicken-sandwich",
          "name": "Chick-fil-A Chicken Sandwich",
          "category": "Original Meals",
          "description": "Original Chick-fil-A chicken sandwich with pickles on a toasted bun.",
          "price": 6.29,
          "priceDisplay": "$6.29",
          "airportPricing": {
            "meal": 12.65,
            "entree": 6.29
          },
          "calories": {
            "meal": "630–1020",
            "entree": 420
          },
          "tags": [
            "popular",
            "sandwich",
            "original"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/cfa-chicken-sandwich.webp"
        },
        {
          "id": "cfa-deluxe-sandwich",
          "name": "Chick-fil-A Deluxe Sandwich",
          "category": "Original Meals",
          "description": "Original chicken sandwich with lettuce, tomato, and American cheese.",
          "price": 7.09,
          "priceDisplay": "$7.09",
          "airportPricing": {
            "meal": 13.45,
            "entree": 7.09
          },
          "calories": {
            "meal": "700–1090",
            "entree": 490
          },
          "tags": [
            "sandwich",
            "deluxe"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/cfa-deluxe-sandwich.webp"
        },
        {
          "id": "spicy-chicken-sandwich",
          "name": "Spicy Chicken Sandwich",
          "category": "Original Meals",
          "description": "Spicy seasoned chicken filet with pickles on a toasted bun.",
          "price": 7.09,
          "priceDisplay": "$7.09",
          "airportPricing": {
            "meal": 12.95,
            "entree": 7.09
          },
          "calories": {
            "meal": "660–1050",
            "entree": 450
          },
          "tags": [
            "popular",
            "spicy",
            "sandwich"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/spicy-chicken-sandwich.webp"
        },
        {
          "id": "spicy-deluxe-sandwich",
          "name": "Spicy Deluxe Sandwich",
          "category": "Original Meals",
          "description": "Spicy chicken sandwich with lettuce, tomato, and pepper jack cheese.",
          "price": 7.45,
          "priceDisplay": "$7.45",
          "airportPricing": {
            "meal": 13.79,
            "entree": 7.45
          },
          "calories": {
            "meal": "750–1140",
            "entree": 540
          },
          "tags": [
            "spicy",
            "sandwich",
            "deluxe"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/spicy-deluxe-sandwich.webp"
        },
        {
          "id": "cfa-nuggets-8ct",
          "name": "Chick-fil-A Nuggets — 8 ct",
          "category": "Original Meals",
          "description": "Bite-sized pieces of boneless chicken breast, breaded and pressure cooked.",
          "price": 6.29,
          "priceDisplay": "$6.29",
          "airportPricing": {
            "meal": 12.65,
            "entree": 6.29
          },
          "calories": {
            "meal": "460–850",
            "entree": 250
          },
          "tags": [
            "nuggets",
            "popular"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/cfa-nuggets-8ct.webp"
        },
        {
          "id": "cfa-nuggets-12ct",
          "name": "Chick-fil-A Nuggets — 12 ct",
          "category": "Original Meals",
          "description": "Larger portion of Chick-fil-A nuggets.",
          "price": 8.59,
          "priceDisplay": "$8.59",
          "airportPricing": {
            "meal": 14.95,
            "entree": 8.59
          },
          "calories": {
            "meal": "590–980",
            "entree": 380
          },
          "tags": [
            "nuggets"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/cfa-nuggets-12ct.webp"
        },
        {
          "id": "cfa-nuggets-30ct",
          "name": "Chick-fil-A Nuggets — 30 ct",
          "category": "Original Meals",
          "description": "30-count nuggets available; airport board does not show price/calories.",
          "price": null,
          "priceDisplay": "TBD",
          "airportPricing": {
            "meal": null,
            "entree": null
          },
          "calories": {
            "meal": null,
            "entree": null
          },
          "tags": [
            "nuggets",
            "shareable"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/cfa-nuggets-30ct.webp"
        },
        {
          "id": "chick-n-strips-3ct",
          "name": "Chick-n-Strips — 3 ct",
          "category": "Original Meals",
          "description": "Boneless chicken strips, freshly breaded and cooked.",
          "price": 6.59,
          "priceDisplay": "$6.59",
          "airportPricing": {
            "meal": 12.95,
            "entree": 6.59
          },
          "calories": {
            "meal": "520–910",
            "entree": 310
          },
          "tags": [
            "strips"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/chick-n-strips-3ct.webp"
        },
        {
          "id": "chick-n-strips-4ct",
          "name": "Chick-n-Strips — 4 ct",
          "category": "Original Meals",
          "description": "Four-piece Chick-n-Strips portion.",
          "price": 8.35,
          "priceDisplay": "$8.35",
          "airportPricing": {
            "meal": 14.69,
            "entree": 8.35
          },
          "calories": {
            "meal": "620–1010",
            "entree": 410
          },
          "tags": [
            "strips"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/chick-n-strips-4ct.webp"
        },
        {
          "id": "chick-n-strips-10ct",
          "name": "Chick-n-Strips — 10 ct",
          "category": "Original Meals",
          "description": "10-count Chick-n-Strips available; airport board does not show price/calories.",
          "price": null,
          "priceDisplay": "TBD",
          "airportPricing": {
            "meal": null,
            "entree": null
          },
          "calories": {
            "meal": null,
            "entree": null
          },
          "tags": [
            "strips",
            "shareable"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/chick-n-strips-10ct.webp"
        },
        {
          "id": "grilled-chicken-sandwich",
          "name": "Grilled Chicken Sandwich",
          "category": "Grilled Meals",
          "description": "Grilled chicken with lettuce and tomato. Calories shown without sauce.",
          "price": 8.05,
          "priceDisplay": "$8.05",
          "airportPricing": {
            "meal": 14.39,
            "entree": 8.05
          },
          "calories": {
            "meal": "540–930",
            "entree": 330
          },
          "tags": [
            "grilled",
            "sandwich"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/grilled-chicken-sandwich.webp"
        },
        {
          "id": "grilled-nuggets-8ct",
          "name": "Grilled Nuggets — 8 ct",
          "category": "Grilled Meals",
          "description": "Bite-sized grilled chicken pieces.",
          "price": 7.25,
          "priceDisplay": "$7.25",
          "airportPricing": {
            "meal": 13.59,
            "entree": 7.25
          },
          "calories": {
            "meal": "340–730",
            "entree": 130
          },
          "tags": [
            "grilled",
            "nuggets"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/grilled-nuggets-8ct.webp"
        },
        {
          "id": "grilled-nuggets-12ct",
          "name": "Grilled Nuggets — 12 ct",
          "category": "Grilled Meals",
          "description": "Larger portion of grilled nuggets.",
          "price": 10.35,
          "priceDisplay": "$10.35",
          "airportPricing": {
            "meal": 16.69,
            "entree": 10.35
          },
          "calories": {
            "meal": "410–800",
            "entree": 200
          },
          "tags": [
            "grilled",
            "nuggets"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/grilled-nuggets-12ct.webp"
        },
        {
          "id": "grilled-nuggets-30ct",
          "name": "Grilled Nuggets — 30 ct",
          "category": "Grilled Meals",
          "description": "30-count grilled nuggets available; airport board does not show price/calories.",
          "price": null,
          "priceDisplay": "TBD",
          "airportPricing": {
            "meal": null,
            "entree": null
          },
          "calories": {
            "meal": null,
            "entree": null
          },
          "tags": [
            "grilled",
            "nuggets",
            "shareable"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/grilled-nuggets-30ct.webp"
        },
        {
          "id": "grilled-chicken-club",
          "name": "Grilled Chicken Club Sandwich",
          "category": "Grilled Meals",
          "description": "Grilled chicken with lettuce, tomato, bacon, and Colby-Jack cheese. Calories shown without sauce.",
          "price": 10.25,
          "priceDisplay": "$10.25",
          "airportPricing": {
            "meal": 16.59,
            "entree": 10.25
          },
          "calories": {
            "meal": "670–1060",
            "entree": 460
          },
          "tags": [
            "grilled",
            "sandwich",
            "club"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/grilled-chicken-club.webp"
        },
        {
          "id": "grilled-chicken-cool-wrap",
          "name": "Grilled Chicken Cool Wrap",
          "category": "Grilled Meals",
          "description": "Sliced grilled chicken with lettuce/cabbage blend, Monterey Jack, and cheddar cheese. Calories shown without dressing.",
          "price": 9.95,
          "priceDisplay": "$9.95",
          "airportPricing": {
            "meal": 16.29,
            "entree": 9.95
          },
          "calories": {
            "meal": "560–950",
            "entree": 350
          },
          "tags": [
            "grilled",
            "wrap"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/grilled-chicken-cool-wrap.webp"
        },
        {
          "id": "cobb-salad",
          "name": "Cobb Salad",
          "category": "Salads",
          "description": "Nuggets with mixed greens, Monterey Jack and cheddar cheeses, eggs, bacon, grape tomatoes, and corn.",
          "price": 11.45,
          "priceDisplay": "$11.45",
          "airportPricing": {
            "entree": 11.45
          },
          "calories": {
            "base": 440,
            "withToppings": 520
          },
          "tags": [
            "salad",
            "popular"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/cobb-salad.webp"
        },
        {
          "id": "market-salad",
          "name": "Market Salad",
          "category": "Salads",
          "description": "Grilled chicken with mixed greens, blue cheese, apples, and berries.",
          "price": 11.69,
          "priceDisplay": "$11.69",
          "airportPricing": {
            "entree": 11.69
          },
          "calories": {
            "base": 190,
            "withToppings": 320
          },
          "tags": [
            "salad",
            "grilled"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/market-salad.webp"
        },
        {
          "id": "spicy-southwest-salad",
          "name": "Spicy Southwest Salad",
          "category": "Salads",
          "description": "Grilled spicy chicken with mixed greens, Monterey Jack and cheddar cheeses, grape tomatoes, peppers, corn, and black beans.",
          "price": 11.69,
          "priceDisplay": "$11.69",
          "airportPricing": {
            "entree": 11.69
          },
          "calories": {
            "base": 240,
            "withToppings": 390
          },
          "tags": [
            "salad",
            "spicy",
            "grilled"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/spicy-southwest-salad.webp"
        },
        {
          "id": "waffle-potato-fries",
          "name": "Chick-fil-A Waffle Potato Fries",
          "category": "Sides",
          "description": "Waffle-cut potatoes. Airport board note: Waffle Potato Fries are cooked in canola oil.",
          "price": null,
          "priceDisplay": "TBD",
          "airportPricing": {
            "entree": null
          },
          "calories": {
            "official": 420
          },
          "tags": [
            "side",
            "fries"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/waffle-potato-fries.webp"
        },
        {
          "id": "mac-and-cheese",
          "name": "Mac & Cheese",
          "category": "Sides",
          "description": "Classic macaroni and cheese side.",
          "price": null,
          "priceDisplay": "TBD",
          "airportPricing": {
            "entree": null
          },
          "calories": {
            "official": 450
          },
          "tags": [
            "side"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/mac-and-cheese.webp"
        },
        {
          "id": "freshly-brewed-iced-tea",
          "name": "Freshly-Brewed Iced Tea",
          "category": "Drinks",
          "description": "Unsweetened or sweetened iced tea.",
          "price": null,
          "priceDisplay": "TBD",
          "airportPricing": {
            "medium": 3.25,
            "large": 3.75
          },
          "calories": {
            "medium": "0 / 120",
            "large": "0 / 170"
          },
          "tags": [
            "drink",
            "tea"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/freshly-brewed-iced-tea.webp"
        },
        {
          "id": "chick-fil-a-lemonade",
          "name": "Chick-fil-A Lemonade",
          "category": "Drinks",
          "description": "Diet or regular lemonade.",
          "price": null,
          "priceDisplay": "TBD",
          "airportPricing": {
            "medium": 3.75,
            "large": 4.29
          },
          "calories": {
            "medium": "60 / 260",
            "large": "80 / 380"
          },
          "tags": [
            "drink",
            "lemonade",
            "popular"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/chick-fil-a-lemonade.webp"
        },
        {
          "id": "chick-fil-a-sunjoy",
          "name": "Chick-fil-A Sunjoy",
          "category": "Drinks",
          "description": "Blend of regular lemonade and sweet tea.",
          "price": null,
          "priceDisplay": "TBD",
          "airportPricing": {
            "medium": 3.75,
            "large": 4.29
          },
          "calories": {
            "medium": 240,
            "large": 350
          },
          "tags": [
            "drink",
            "tea",
            "lemonade"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/chick-fil-a-sunjoy.webp"
        },
        {
          "id": "soft-drinks",
          "name": "Soft Drinks",
          "category": "Drinks",
          "description": "Assorted fountain soft drinks.",
          "price": null,
          "priceDisplay": "TBD",
          "airportPricing": {
            "medium": 3.25,
            "large": 3.75
          },
          "calories": {
            "medium": "0–190",
            "large": "0–270"
          },
          "tags": [
            "drink",
            "soda"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/soft-drinks.webp"
        },
        {
          "id": "bottled-water",
          "name": "Bottled Water",
          "category": "Drinks",
          "description": "Bottled water.",
          "price": null,
          "priceDisplay": "TBD",
          "airportPricing": {
            "bottle": 3.09
          },
          "calories": {
            "bottle": 0
          },
          "tags": [
            "drink",
            "water"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/bottled-water.webp"
        },
        {
          "id": "cold-brew-iced-coffee",
          "name": "Cold Brew Iced Coffee — Vanilla",
          "category": "Drinks",
          "description": "Vanilla cold brew iced coffee.",
          "price": null,
          "priceDisplay": "TBD",
          "airportPricing": {
            "regular": 5.45
          },
          "calories": {
            "regular": 200
          },
          "tags": [
            "drink",
            "coffee"
          ],
          "imageUrl": "/assets/menu/chick-fil-a/cold-brew-iced-coffee.webp"
        }
      ],
      "recommendedDefaultCartForFly2BiteDemo": {
        "items": [
          {
            "menuItemId": "cfa-chicken-sandwich",
            "name": "Chick-fil-A Chicken Sandwich",
            "quantity": 1,
            "variant": "entree",
            "price": 6.29
          },
          {
            "menuItemId": "cfa-nuggets-8ct",
            "name": "Chick-fil-A Nuggets — 8 ct",
            "quantity": 1,
            "variant": "entree",
            "price": 6.29
          },
          {
            "menuItemId": "chick-fil-a-lemonade",
            "name": "Chick-fil-A Lemonade",
            "quantity": 1,
            "variant": "medium",
            "price": 3.75
          }
        ],
        "subtotal": 16.33,
        "note": "Uses airport menu-board prices; update taxes/fees/delivery separately. Prior presentation mockups used placeholder prices."
      },
      "usageNote": "Airport menu-board prices were captured from user photos. Confirm final prices via POS before production."
    }
  ]
} as const;

export default fly2biteMenuData;
