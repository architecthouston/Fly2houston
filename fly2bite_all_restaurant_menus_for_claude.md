# Fly2Bite — Combined Restaurant Menu Data for Claude

This file consolidates the restaurant/menu information extracted from the user-provided airport menu-board photos and the restaurant reference files created for the Fly2Bite prototype.

Use this file together with `src/data/fly2biteMenuData.json` or `src/data/fly2biteMenuData.ts` and the local images under `public/assets/menu/`.

## File Size Summary

- Original four restaurant Markdown files combined: **102.8 KB** (105,250 bytes).
- `fly2bite_starbucks_menu_with_images_for_claude.md`: **13.9 KB** (14,266 bytes).
- `fly2bite_velvet_taco_menu_with_images_for_claude.md`: **28.9 KB** (29,621 bytes).
- `fly2bite_hugos_cocina_menu_with_images_for_claude.md`: **31.5 KB** (32,219 bytes).
- `fly2bite_chickfila_menu_with_images_for_claude.md`: **28.5 KB** (29,144 bytes).

## Image Strategy

- Use `imageUrl` from the JSON/TS data for every item card.
- Images were optimized as small local WebP thumbnails, generally 260 × 260 px, to keep the GitHub/project size low.
- Do not hotlink restaurant websites in the app. Replace prototype images with approved/licensed assets before production.

## Restaurants Included

### Starbucks
- Location for demo: Terminal C • Near Gate C2 • Delivering to Gate C8
- Prep time: {'min': 10, 'max': 15}
- Delivery estimate to C8: 25 min
- Badge: Fastest
- Items: 28
- Image folder: `/assets/menu/starbucks/`

| Category | Item | Price | Calories | Image |
|---|---|---:|---:|---|
| Promotional Feature | Horchata Frappuccino® | $8.85 | 400 | `/assets/menu/starbucks/starbucks_horchata_frappuccino.webp` |
| Promotional Feature | Iced Horchata Shaken Espresso | $7.75 | 150 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Coffeehouse Classics | Freshly Brewed Coffee | $4.95 | 5 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Coffeehouse Classics | Caffè Americano | $6.25 | 15 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Coffeehouse Classics | Caffè Latte | $7.55 | 190 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Coffeehouse Classics | Cappuccino | $7.55 | 140 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Coffeehouse Classics | Flat White | $7.75 | 220 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Coffeehouse Classics | Caffè Mocha | $8.15 | 370 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Coffeehouse Classics | White Chocolate Mocha | $8.15 | 390 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Coffeehouse Classics | Caramel Macchiato | $8.15 | 250 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Coffeehouse Classics | Cortado | $6.85 | 90 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Starbucks Favorites | Iced Coffee | $5.85 | 5 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Starbucks Favorites | Vanilla Sweet Cream Cold Brew | $6.85 | 110 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Starbucks Favorites | Iced Brown Sugar Oatmilk Shaken Espresso | $8.45 | 150 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Starbucks Favorites | Chai Latte | $7.75 | 190 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Starbucks Favorites | Matcha Latte | $7.75 | 220 | `/assets/menu/starbucks/starbucks_iced_horchata_shaken_espresso.webp` |
| Frappuccino® Blended Beverages | Horchata | $8.85 | 400 | `/assets/menu/starbucks/starbucks_horchata_frappuccino.webp` |
| Frappuccino® Blended Beverages | Caramel Ribbon Crunch | $9.05 | 470 | `/assets/menu/starbucks/starbucks_horchata_frappuccino.webp` |
| Protein Beverages | Caramel Protein Latte | $9.35 | 320 | `/assets/menu/starbucks/starbucks_iced_horchata.webp` |
| Protein Beverages | Iced Caramel Protein Matcha | $9.45 | 270 | `/assets/menu/starbucks/starbucks_iced_horchata.webp` |
| Starbucks Refreshers® Beverages | Tropical Butterfly Lemonade | $9.05 | 140 | `/assets/menu/starbucks/starbucks_tropical_butterfly_lemonade_refresher.webp` |
| Starbucks Refreshers® Beverages | Tropical Butterfly | $8.45 | 90 | `/assets/menu/starbucks/starbucks_tropical_butterfly_refresher.webp` |
| Starbucks Refreshers® Beverages | Butterfly Drink | $9.05 | 120 | `/assets/menu/starbucks/starbucks_butterfly_drink.webp` |
| Lemonade Refreshers | Strawberry Açaí Lemonade | $7.55 | 140 | `/assets/menu/starbucks/starbucks_tropical_butterfly_lemonade_refresher.webp` |
| Lemonade Refreshers | Mango Dragonfruit Lemonade | $7.55 | 140 | `/assets/menu/starbucks/starbucks_tropical_butterfly_lemonade_refresher.webp` |
| Energy Refreshers | Strawberry Açaí Energy | $7.75 | 100 | `/assets/menu/starbucks/starbucks_tropical_butterfly_refresher.webp` |
| Energy Refreshers | Mango Strawberry Energy | $7.75 | 130 | `/assets/menu/starbucks/starbucks_tropical_butterfly_refresher.webp` |
| Energy Refreshers | Pink Energy Drink | $8.45 | 140 | `/assets/menu/starbucks/starbucks_tropical_butterfly_refresher.webp` |

### Velvet Taco
- Location for demo: Terminal C • Near Gate C5 • Delivering to Gate C8
- Prep time: {'min': 15, 'max': 20}
- Delivery estimate to C8: 35 min
- Badge: Popular
- Items: 35
- Image folder: `/assets/menu/velvet-taco/`

| Category | Item | Price | Calories | Image |
|---|---|---:|---:|---|
| Bundles | Bundle | $17.45 | — | `/assets/menu/velvet-taco/vt_bundle_two_tacos_side.webp` |
| Bowls | Slow-Roasted Angus Brisket Bowl | $17.15 | 1090–1410 | `/assets/menu/velvet-taco/vt_bowl_brisket.webp` |
| Bowls | Spicy Tikka Chicken Bowl | $14.65 | 500–970 | `/assets/menu/velvet-taco/vt_bowl_spicy_tikka_chicken.webp` |
| Bowls | Mexi-Cali Shrimp Bowl | $15.90 | 460–870 | `/assets/menu/velvet-taco/vt_bowl_mexi_cali_shrimp.webp` |
| Bowls | Seasonal Veggie Bowl | $14.65 | 630–1040 | `/assets/menu/velvet-taco/vt_bowl_seasonal_veggie.webp` |
| Quesadillas | Slow-Roasted Angus Brisket Quesadilla | $16.85 | 845 | `/assets/menu/velvet-taco/vt_quesadilla_brisket.webp` |
| Quesadillas | Chicken Quesadilla | $15.15 | 900 | `/assets/menu/velvet-taco/vt_quesadilla_chicken.webp` |
| Quesadillas | Cheese Quesadilla | $12.25 | 765 | `/assets/menu/velvet-taco/vt_quesadilla_cheese.webp` |
| Tacos | Spicy Tikka Chicken Taco | $7.19 | 420 | `/assets/menu/velvet-taco/vt_taco_spicy_tikka_chicken.webp` |
| Tacos | Buffalo Chicken Taco | $7.19 | 390 | `/assets/menu/velvet-taco/vt_taco_buffalo_chicken.webp` |
| Tacos | Chicken & Waffle Taco | $7.55 | 490 | `/assets/menu/velvet-taco/vt_taco_chicken_waffle.webp` |
| Tacos | Slow-Roasted Angus Brisket Taco | $8.10 | 510 | `/assets/menu/velvet-taco/vt_taco_brisket.webp` |
| Tacos | Bacon Smash Burger Taco | $7.70 | 390 | `/assets/menu/velvet-taco/vt_taco_bacon_smash_burger.webp` |
| Tacos | Mexi-Cali Shrimp Taco | $7.70 | 280 | `/assets/menu/velvet-taco/vt_taco_mexi_cali_shrimp.webp` |
| Tacos | Grilled Salmon Taco | $8.10 | 220 | `/assets/menu/velvet-taco/vt_taco_grilled_salmon.webp` |
| Tacos | Sweet Chili Shrimp Taco | $7.70 | 390 | `/assets/menu/velvet-taco/vt_taco_sweet_chili_shrimp.webp` |
| Tacos | Beer Battered Cauliflower Taco | $6.85 | 300 | `/assets/menu/velvet-taco/vt_taco_beer_battered_cauliflower.webp` |
| Tacos | Crispy Avocado Taco | $6.75 | 440 | `/assets/menu/velvet-taco/vt_taco_crispy_avocado.webp` |
| Breakfast | Velvet Griddle Taco | $5.95 | 530 | `/assets/menu/velvet-taco/vt_breakfast_velvet_griddle.webp` |
| Breakfast | Hangover Breakfast Taco | $6.95 | 520 | `/assets/menu/velvet-taco/vt_breakfast_hangover.webp` |
| Breakfast | Farmhouse Taco | $6.75 | 530 | `/assets/menu/velvet-taco/vt_breakfast_farmhouse.webp` |
| Breakfast | Side Crisp Tots & Sunny Egg | $8.10 | 525 | `/assets/menu/velvet-taco/vt_breakfast_side_crisp_tots_sunny_egg.webp` |
| Sides | Queso Blanco | $8.10 | 670 | `/assets/menu/velvet-taco/vt_side_queso_blanco.webp` |
| Sides | Elote | $8.10 | 595 | `/assets/menu/velvet-taco/vt_side_elote.webp` |
| Sides | Classic Guac | $7.70 | 470 | `/assets/menu/velvet-taco/vt_side_classic_guac.webp` |
| Sides | Elote Guac | $8.45 | 540 | `/assets/menu/velvet-taco/vt_side_elote_guac.webp` |
| Sides | Brisket Nachos | $10.20 | 583 | `/assets/menu/velvet-taco/vt_side_brisket_nachos.webp` |
| Sides | Crisp Tots & Sunny Egg | $8.10 | 525 | `/assets/menu/velvet-taco/vt_side_crisp_tots_sunny_egg.webp` |
| Boozy Libations | Kick Ass Margarita - Regular | $17.00 | Frozen 380 / Rocks 410 | `/assets/menu/velvet-taco/vt_drink_margarita_regular.webp` |
| Boozy Libations | Kick Ass Margarita - Large | $19.00 | Frozen 580 / Rocks 500 | `/assets/menu/velvet-taco/vt_drink_margarita_large.webp` |
| Boozy Libations | Grand Margarita Floater Add-On | $5.00 | 38 | `/assets/menu/velvet-taco/vt_drink_grand_margarita_addon.webp` |
| Boozy Libations | Sangrita | $17.00 | Regular 360 / Large 480 | `/assets/menu/velvet-taco/vt_drink_sangrita.webp` |
| Boozy Libations | Sangrita Swirl | $17.00 | Regular 400 / Large 630 | `/assets/menu/velvet-taco/vt_drink_sangrita_swirl.webp` |
| Boozy Libations | Electric Lemonade | $17.00 | Regular 270 / Large 430 | `/assets/menu/velvet-taco/vt_drink_electric_lemonade.webp` |
| Cake | Red Velvet Cake | $5.90 | 1020 | `/assets/menu/velvet-taco/vt_dessert_red_velvet_cake.webp` |

### Hugo’s Cocina
- Location for demo: Terminal C • Near Gate C8 • Delivering to Gate C8
- Prep time: {'min': 20, 'max': 25}
- Delivery estimate to C8: 45 min
- Badge: Popular
- Items: 29
- Image folder: `/assets/menu/hugos-cocina/`

| Category | Item | Price | Calories | Image |
|---|---|---:|---:|---|
| Entremeses | Queso Flameado | TBD | — | `/assets/menu/hugos-cocina/hugos-queso-flameado.webp` |
| Entremeses | Taquitos de Pollo | TBD | — | `/assets/menu/hugos-cocina/hugos-taquitos-de-pollo.webp` |
| Entremeses | Quesadillas | TBD | — | `/assets/menu/hugos-cocina/hugos-quesadillas.webp` |
| Entremeses | Tacos al Pastor | TBD | — | `/assets/menu/hugos-cocina/hugos-tacos-al-pastor.webp` |
| Sopa y Ensaladas | Caesar Salad | TBD | — | `/assets/menu/hugos-cocina/hugos-caesar-salad.webp` |
| Sopa y Ensaladas | Pozole | TBD | — | `/assets/menu/hugos-cocina/hugos-pozole.webp` |
| Sopa y Ensaladas | Tortilla Soup | TBD | — | `/assets/menu/hugos-cocina/hugos-tortilla-soup.webp` |
| Sopa y Ensaladas | Ensalada de Casa | TBD | — | `/assets/menu/hugos-cocina/hugos-ensalada-de-casa.webp` |
| Desayunos | Huevos Rancheros | TBD | — | `/assets/menu/hugos-cocina/hugos-huevos-rancheros.webp` |
| Desayunos | Breakfast Egg Tacos | TBD | — | `/assets/menu/hugos-cocina/hugos-breakfast-egg-tacos.webp` |
| Desayunos | Migas | TBD | — | `/assets/menu/hugos-cocina/hugos-migas.webp` |
| Desayunos | American Breakfast | TBD | — | `/assets/menu/hugos-cocina/hugos-american-breakfast.webp` |
| Tacos | Tacos de Pescado | TBD | — | `/assets/menu/hugos-cocina/hugos-tacos-de-pescado.webp` |
| Tacos | Tacos de Camarones | TBD | — | `/assets/menu/hugos-cocina/hugos-tacos-de-camarones.webp` |
| Tacos | Tacos de Carnitas | TBD | — | `/assets/menu/hugos-cocina/hugos-tacos-de-carnitas.webp` |
| Tortas | Torta Aguacate, Hongos y Queso | TBD | — | `/assets/menu/hugos-cocina/hugos-torta-aguacate-hongos-queso.webp` |
| Tortas | Cemita de Pollo | TBD | — | `/assets/menu/hugos-cocina/hugos-cemita-de-pollo.webp` |
| Tortas | Hugo’s Hamburger | TBD | — | `/assets/menu/hugos-cocina/hugos-hamburger.webp` |
| Tortas | Torta de Jamon o de Pavo | TBD | — | `/assets/menu/hugos-cocina/hugos-torta-jamon-pavo.webp` |
| Platos Fuertes | Carnitas | TBD | — | `/assets/menu/hugos-cocina/hugos-carnitas.webp` |
| Platos Fuertes | Enchiladas de Pollo | TBD | — | `/assets/menu/hugos-cocina/hugos-enchiladas-de-pollo.webp` |
| Platos Fuertes | Carne Brava | TBD | — | `/assets/menu/hugos-cocina/hugos-carne-brava.webp` |
| Platos Fuertes | Camarones Al Ajillo | TBD | — | `/assets/menu/hugos-cocina/hugos-camarones-al-ajillo.webp` |
| Platos Fuertes | Dos Tostadas | TBD | — | `/assets/menu/hugos-cocina/hugos-dos-tostadas.webp` |
| Sides | Refried Beans | TBD | — | `/assets/menu/hugos-cocina/hugos-refried-beans.webp` |
| Sides | Papas Rostizadas | TBD | — | `/assets/menu/hugos-cocina/hugos-papas-rostizadas.webp` |
| Sides | Mexican Rice | TBD | — | `/assets/menu/hugos-cocina/hugos-mexican-rice.webp` |
| Sides | Salsa with Chips | TBD | — | `/assets/menu/hugos-cocina/hugos-salsa-with-chips.webp` |
| Sides | Guacamole with Chips | TBD | — | `/assets/menu/hugos-cocina/hugos-guacamole-with-chips.webp` |

### Chick-fil-A
- Location for demo: Terminal C • Near Gate C16 • Delivering to Gate C8
- Prep time: {'min': 20, 'max': 25}
- Delivery estimate to C8: 40 min
- Badge: Best for on-time delivery
- Items: 27
- Image folder: `/assets/menu/chick-fil-a/`

| Category | Item | Price | Calories | Image |
|---|---|---:|---:|---|
| Original Meals | Chick-fil-A Chicken Sandwich | $6.29 | meal: 630–1020, entree: 420 | `/assets/menu/chick-fil-a/cfa-chicken-sandwich.webp` |
| Original Meals | Chick-fil-A Deluxe Sandwich | $7.09 | meal: 700–1090, entree: 490 | `/assets/menu/chick-fil-a/cfa-deluxe-sandwich.webp` |
| Original Meals | Spicy Chicken Sandwich | $7.09 | meal: 660–1050, entree: 450 | `/assets/menu/chick-fil-a/spicy-chicken-sandwich.webp` |
| Original Meals | Spicy Deluxe Sandwich | $7.45 | meal: 750–1140, entree: 540 | `/assets/menu/chick-fil-a/spicy-deluxe-sandwich.webp` |
| Original Meals | Chick-fil-A Nuggets — 8 ct | $6.29 | meal: 460–850, entree: 250 | `/assets/menu/chick-fil-a/cfa-nuggets-8ct.webp` |
| Original Meals | Chick-fil-A Nuggets — 12 ct | $8.59 | meal: 590–980, entree: 380 | `/assets/menu/chick-fil-a/cfa-nuggets-12ct.webp` |
| Original Meals | Chick-fil-A Nuggets — 30 ct | TBD | — | `/assets/menu/chick-fil-a/cfa-nuggets-30ct.webp` |
| Original Meals | Chick-n-Strips — 3 ct | $6.59 | meal: 520–910, entree: 310 | `/assets/menu/chick-fil-a/chick-n-strips-3ct.webp` |
| Original Meals | Chick-n-Strips — 4 ct | $8.35 | meal: 620–1010, entree: 410 | `/assets/menu/chick-fil-a/chick-n-strips-4ct.webp` |
| Original Meals | Chick-n-Strips — 10 ct | TBD | — | `/assets/menu/chick-fil-a/chick-n-strips-10ct.webp` |
| Grilled Meals | Grilled Chicken Sandwich | $8.05 | meal: 540–930, entree: 330 | `/assets/menu/chick-fil-a/grilled-chicken-sandwich.webp` |
| Grilled Meals | Grilled Nuggets — 8 ct | $7.25 | meal: 340–730, entree: 130 | `/assets/menu/chick-fil-a/grilled-nuggets-8ct.webp` |
| Grilled Meals | Grilled Nuggets — 12 ct | $10.35 | meal: 410–800, entree: 200 | `/assets/menu/chick-fil-a/grilled-nuggets-12ct.webp` |
| Grilled Meals | Grilled Nuggets — 30 ct | TBD | — | `/assets/menu/chick-fil-a/grilled-nuggets-30ct.webp` |
| Grilled Meals | Grilled Chicken Club Sandwich | $10.25 | meal: 670–1060, entree: 460 | `/assets/menu/chick-fil-a/grilled-chicken-club.webp` |
| Grilled Meals | Grilled Chicken Cool Wrap | $9.95 | meal: 560–950, entree: 350 | `/assets/menu/chick-fil-a/grilled-chicken-cool-wrap.webp` |
| Salads | Cobb Salad | $11.45 | base: 440, withToppings: 520 | `/assets/menu/chick-fil-a/cobb-salad.webp` |
| Salads | Market Salad | $11.69 | base: 190, withToppings: 320 | `/assets/menu/chick-fil-a/market-salad.webp` |
| Salads | Spicy Southwest Salad | $11.69 | base: 240, withToppings: 390 | `/assets/menu/chick-fil-a/spicy-southwest-salad.webp` |
| Sides | Chick-fil-A Waffle Potato Fries | TBD | official: 420 | `/assets/menu/chick-fil-a/waffle-potato-fries.webp` |
| Sides | Mac & Cheese | TBD | official: 450 | `/assets/menu/chick-fil-a/mac-and-cheese.webp` |
| Drinks | Freshly-Brewed Iced Tea | TBD | medium: 0 / 120, large: 0 / 170 | `/assets/menu/chick-fil-a/freshly-brewed-iced-tea.webp` |
| Drinks | Chick-fil-A Lemonade | TBD | medium: 60 / 260, large: 80 / 380 | `/assets/menu/chick-fil-a/chick-fil-a-lemonade.webp` |
| Drinks | Chick-fil-A Sunjoy | TBD | medium: 240, large: 350 | `/assets/menu/chick-fil-a/chick-fil-a-sunjoy.webp` |
| Drinks | Soft Drinks | TBD | medium: 0–190, large: 0–270 | `/assets/menu/chick-fil-a/soft-drinks.webp` |
| Drinks | Bottled Water | TBD | bottle: 0 | `/assets/menu/chick-fil-a/bottled-water.webp` |
| Drinks | Cold Brew Iced Coffee — Vanilla | TBD | regular: 200 | `/assets/menu/chick-fil-a/cold-brew-iced-coffee.webp` |

## App Data File

Use this import in the React app if the project supports TypeScript/JavaScript imports:

```ts
import fly2biteMenuData from "./src/data/fly2biteMenuData";
```

Or fetch/use the JSON file:

```ts
import fly2biteMenuData from "./src/data/fly2biteMenuData.json";
```
