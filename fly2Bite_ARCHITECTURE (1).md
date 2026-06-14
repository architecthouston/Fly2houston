# Fly2Bite — App Architecture & Continuity Doc

**Last updated:** session of June 14, 2026
**Status:** Functional clickable prototype (single self-contained HTML), responsive + PWA-ready. No backend yet.
**Purpose:** Drop this into a new Claude chat (inside the Fly2Bite Project) so work continues without re-explaining anything.

---

## 0. HOW TO CONTINUE IN A NEW CHAT  ← read this first

1. **Work inside the Fly2Bite Claude Project.** The Project's knowledge files auto-load into context. Keep these two files in the Project knowledge area, replacing older copies after each session:
   - `fly2Bite_app.html` — the live prototype (this is the product)
   - `fly2Bite_ARCHITECTURE.md` — this document (the source of truth)
2. **Start the new chat with a clear instruction**, e.g.:
   - *"Read the architecture doc. Continue from §14 — build the Orders history page."*
   - *"Add live runner tracking on the schematic map (see §14)."*
3. **After any meaningful change:** download the updated `fly2Bite_app.html` from the chat, replace it in the Project knowledge, and ask Claude to regenerate this doc.

### Current state snapshot (what's true right now)
- End-to-end clickable flow: **Home → Gate Select → Choose Restaurant → Menu → Checkout → Payment → Order Confirmed**, plus a full **Rewards** hub reachable from the bottom nav.
- **Responsive:** fills the screen edge-to-edge on real phones (any size), shows a device-frame mockup on laptop/desktop. PWA meta tags let it run full-screen via "Add to Home Screen."
- **50 restaurants**, 99 gates, ~84 per-restaurant menu templates, **27 unique deduplicated logos** in a shared `LOGO` library.
- **File size ≈ 0.99 MB** (down from 2.3 MB — see §9).
- FlyHouston Rewards: join flow, member dashboard, tier system, miles redemption at payment, **earn celebration on Order Confirmed**, airline-program connection (OAuth + manual + transfer + flight detection). Rewards-hub "Join" now links to the real HAS enrollment portal.
- **Gate must be confirmed before ordering** — any attempt to start ordering without a confirmed gate routes to gate selection with a prompt (see §7).
- No data persists — all in-memory, resets on reload. No backend, no auth, no real payments.

### Working conventions (don't drift)
- **F2B design tokens** (see §3) — colors, fonts. Do not change without reason.
- **US customary units** for distance (ft under 1000 ft, miles above).
- **Delivery fee $1.99**, tax 8.25% (Texas). *(All order paths now use $1.99 — a stray $3.99 in `placeOrder` was corrected this session.)*
- **Generic descriptive menu item names** — real items arrive via vendor feeds.
- **Logos are deduplicated.** Every unique image lives once in the `LOGO` object; each restaurant's `logo` field references it (`logo: LOGO["starbucks"]`). Never paste the same base64 twice — add it to `LOGO` and reference the key.
- **Logo/menu authorization is the project owner's responsibility, handled outside the code.** Claude wires up provided assets and adds a placeholder when one is missing; Claude does not make IP/legal calls in the UI. (Owner directive, restated multiple times.)
- **Iterative edits with screenshot verification** — prefer targeted `str_replace`/injection over full rebuilds. Verify each change with a Playwright screenshot before moving on.

---

## 1. Project Overview

**Fly2Bite** — smart airport food delivery + rewards for passengers at **George Bush Intercontinental (IAH)**, Houston. Order from terminal restaurants, delivered to your gate by airport-approved runners.

| Item | Value |
|---|---|
| Client | Houston Airport System (HAS), City of Houston |
| Primary airport | IAH (Terminals A, B, C, D, E) |
| Secondary | HOU — William P. Hobby (Terminal 1) — *not yet built* |
| Demo flight | LH 441, IAH → BER, Terminal C, Gate C8, departs 6:45 PM |
| Demo restaurant data scope | **Terminals A + C** (full), plus all Starbucks & Chick-fil-A wherever they appear (see §9) |
| Brand | fly2Bite (dark navy + electric blue + gold rewards accent) |

---

## 2. Tech & Delivery

- **Single self-contained HTML file** with inline CSS + JS + base64-embedded assets. No build step, runs from a static file or any host.
- **Responsive + PWA:** `viewport-fit=cover`, safe-area insets, `apple-mobile-web-app-capable`, `theme-color`. Add-to-Home-Screen runs it full-screen like a native app.
- **Hosting for the demo:** GitHub Pages (rename the file to `index.html`, Public repo, Settings → Pages → deploy from `main` / root). Netlify Drop is the quick alternative. Either gives an HTTPS URL → put it behind a QR code on the slide. Fully static, so any number of panelists can open and test simultaneously, each with an independent session. (See §15.)
- A **React component library** existed in earlier sessions (`fly2bite_choose_restaurant.jsx`, `fly2bite_gate_select.jsx`) but the HTML prototype is well ahead of it. The React port is a future task; the HTML is the working product. Stepping up to a stronger model (e.g. Fable 5) is most worthwhile at that migration stage.
- Eventual production stack (assumed): React/React Native + Node/PostgreSQL backend, tokenized payments (Stripe/Braintree), real airline OAuth, HAS loyalty API.

---

## 3. Design System (F2B tokens) — do not drift

```js
const F2B = {
  color: {
    pageBg:     "linear-gradient(180deg,#050e24 0%,#040b1c 40%,#020815 100%)",
    cardBgDark: "#0d1c34",
    cardBgGrad: "linear-gradient(135deg,#0a1e3d,#071a35)",
    blue:       "#148cff",   // primary electric blue
    blueDeep:   "#0a84ff",
    white:      "#ffffff",
    textSec:    "#c0d4f0", textBlue: "#a9cfff", textTer: "#8da0c0", textLabel: "#6a82a8",
    green:      "#25c77a", greenSoft: "#34d399",   // good timing / earn
    amber:      "#f5a623",   // rewards/gold accent + warn states + "missing asset" dot
    red:        "#ef5350",   // bad timing / destructive
    borderBlue: "rgba(20,140,255,0.35)",
  },
  font: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', 'Poppins', 'Montserrat', 'Segoe UI', sans-serif",
};
```

- Dark navy base + electric blue accents, glassmorphism cards, soft blue glows.
- **Gold/amber (`#f5a623`)** is the dedicated FlyHouston Rewards accent.
- Rounded corners 14–28px on cards/pills.

### Responsive frame
```css
/* Default = real phones: full screen, native-app feel */
.phone{ width:100%; max-width:100%; height:100dvh; border:none; border-radius:0;
        padding-top:env(safe-area-inset-top); padding-bottom:env(safe-area-inset-bottom); }
/* ≥480px = laptop/desktop/tablet: device-frame mockup for presenting */
@media (min-width:480px){
  .phone{ max-width:402px; border:12px solid #0b0d12; border-radius:54px;
          height:min(872px,calc(100dvh - 40px)); box-shadow:0 8px 60px rgba(0,0,0,.6),0 0 0 2px #1a1f30; }
}
```
Usable width is the full device width on phones, ~378px in the desktop frame.

---

## 4. Screen Flow

```
Home ─► Gate Select ─► Choose Restaurant ─► Menu ─► Checkout ─► Payment ─► Order Confirmed
          ▲                                                                      │
   (gate guard:                              Rewards hub (bottom nav) ───────────┘
 startOrder() routes here                    (join → external portal / sign-in / redeem / link airlines)
 until gate is confirmed)
```
- **Gate guard:** every "begin ordering" entry point (Start Order button, Restaurants bottom-nav tabs, the Rewards-page order action) calls `startOrder()`. If `gateConfirmed` is false it routes to Gate Select and shows a prompt; once confirmed it jumps straight to Choose Restaurant.
- Bottom nav (4 tabs): **Home · Restaurants · Orders · Rewards**.

---

## 5. Data Models (all in `fly2Bite_app.html`)

### Logo library — `LOGO` (27 unique images)
```js
const LOGO = { "starbucks":"data:image/png;base64,…", "chick-fil-a":"data:…", … };
```
- Each image is stored **once**, downscaled to ≤200px, and referenced by key. This is the main reason the file dropped from 2.3 MB → 0.99 MB (Starbucks alone had been embedded 7×). Add new logos here, then reference them from the restaurant record.

### Restaurant — `FLY2BITE_RESTAURANTS` (50 entries)
```js
{ id:"c_north_starbucks", name:"Starbucks", terminal:"C", concourse:"NORTH",
  category:"food_beverage", lat:29.9892, lng:-95.3416, prepMin:15,
  emoji:"☕", logo: LOGO["starbucks"] | null }
```
- `logo` truthy → `<img>`; null → initials placeholder with amber "needs asset" dot.
- **Scope (demo build):** Terminal **A (18)** + **C (28)** in full, plus the **Starbucks & Chick-fil-A** that live in B/E (2 + 2). Terminals B, D, E are otherwise out of scope for now; selecting a B/E gate falls back cross-terminal. Re-add B/D/E from the full dataset when needed.

### Gate — `FLY2BITE_GATES` (99 entries)
```js
{ id:"C8", terminal:"C", concourse:"Terminal C", x:22.5, y:33.7, lat:…, lng:… }
```
(All gates retained even though restaurant data is scoped to A+C.)

### Menus — `RESTAURANT_MENUS` keyed by normalized name; `getMenuItems(r)` resolves with `MENU_ALIASES`, falls back to `MENU_BY_EMOJI`, then `MENU_GENERIC`.

### Order / gate state
```js
let selGate = null;
let gateConfirmed = false;          // true only after the user taps "Confirm Gate"
let selRest = null; let cart = {};
window.lastOrder = {                // written by placePaymentOrder(); read by the Order Confirmed screen
  method, subtotal, fee, tax, grand,
  milesRedeemed, cashPaid, milesEarned, couldEarn, wasMember
};
```

### Rewards — `userRewards` (single source of loyalty state)
```js
let userRewards = { isMember:false, joinedDate:null, name:null, email:null,
  miles:0, tier:'Bronze', linkedAirlines:[/*{brand,account,method}*/], history:[/*{date,type,miles,label}*/] };
const MILES_PER_DOLLAR = 100;   // 100 miles = $1
const MILES_EARN_RATE  = 1;     // 1 mile per $1
const REWARDS_TIERS = [Bronze 0, Silver 5000, Gold 15000, Platinum 30000];
```

### Payment
```js
let paymentMethods = [{ id:'visa_4242', brand:'visa', label:'Visa', last4:'4242', exp:'12/26', isDefault:true }];
let selectedPaymentId='visa_4242'; let receiptEmail='passenger@example.com'; let applyMiles=false;
```
(Mastercard + Amex were intentionally removed to give the rewards section room.)

---

## 6. Core Algorithms

- `haversine(a,b)` → meters.
- `distLabel(m)` → US units: `<1000 ft → "N ft"`, else `"N.N mi"`. Single point to add metric later.
- `walkMinutes(m)` → `ceil(m / 76)` (RUNNER_SPEED_M_PER_MIN=76 ≈ 3mph) + BUFFER.
- `deliveryEstimate(r, gate)` → `{prepMin, walkMin, totalMin, meters, crossTerminal}`; cross-terminal adds 8 min.
- `rankedRestaurants()` → `{ items:[...], crossTerminalFallback:[...] }`. Terminal scope → search filter → sort by ETA → view-mode filters (nearby ≤250m, fastest top-12). Search spans all terminals and overrides chips. **Access the top restaurant via `.items[0]`, not direct indexing.**
- ETA color: green ≤22 min, amber ≤35, red >35.
- Boarding buffer (checkout/payment): green ≥15 min, amber 0–15, red <0. `departMin=47` hardcoded (no live flight feed yet).
- `currentTier()`, `nextTier()`, `earnedMiles(total)` for rewards.
- `nearestGateId(r)` → nearest gate in the same terminal (powers "Near C16" on checkout).

---

## 7. Screens — current detail

### Home (`page-home`)
Brand banner (glassmorphism), Welcome card, 3 feature chips, flight card (LH 441 → BER, Gate C8), **Start Order** (→ `startOrder()` gate guard) / Track My Order, bottom nav.

### Gate Select (`page-gate`)
Terminal tabs + schematic SVG terminal map (A/C detailed, B/D/E placeholder) with tappable gate pills, flight info card, gate list, Confirm Gate.
- **Confirm prompt (`.gate-hint`):** a blue glass banner under the header — *"Confirm your gate first — then pick a restaurant."* — revealed by `startOrder()` when a passenger tries to order without a confirmed gate; cleared on confirm.
- `confirmGate()` sets `gateConfirmed = true`, hides the hint, renders restaurants, and advances to Choose Restaurant. C8 is pre-selected as a *suggested* gate (one-tap confirm in the demo) but is **not** auto-confirmed.

### Choose Restaurant (`page-rest`)
Gate context card, **search bar** (all-terminal scope, auto-clear on gate confirm), filter chips (Best/Fastest/Nearby/All), cross-terminal fallback banner, restaurant cards (logo + ETA + meta + badges), View Menu. Restaurant data scoped to A+C (see §5).

### Menu (`page-menu`)
Restaurant summary card, per-restaurant items (emoji or `item.image`), add-to-cart, sticky cart bar → Checkout.

### Checkout (`page-checkout`) — `.co2-*`
Header (back/Edit), restaurant card (84px logo, "Terminal · Concourse · Near Gxx", "Delivering to Gate", prep/ETA columns), dynamic timing banner (green/amber/red), item cards (photo + qty badge + stepper), totals (Subtotal / Taxes&Fees ⓘ / Delivery $1.99 ⓘ / Total), promo + Visa rows, **Continue to Payment**, secure-payments note, bottom nav.
Helpers: `stepCartItem(key,delta)`, `clearCartFromCheckout()`.

### Payment (`page-payment`) — `.pay-*`
Order summary strip, **Express Pay** (Apple Pay / G Pay styled buttons), **FlyHouston Rewards card** (state-aware, see §8), "or pay with card" → Visa-only methods list + add card, receipt email, order breakdown, **Place Order** CTA (text adapts to miles), trust badges (256-bit · PCI).
Handlers: `goToPayment()`, `renderPayment()`, `renderPaymentRewards()`, `toggleApplyMiles()`, `selectPaymentMethod()`, `addNewPaymentMethod()`, `changeReceiptEmail()`, `placePaymentOrder(method)`.

### Order Confirmed (`page-order`) — **redesigned this session** (3rd rewards touchpoint)
Animated success check (pulse ring), "On the way!", delivering-to-gate subtitle, then:
- **DELIVERY** card: Restaurant / Gate / Distance / Total ETA.
- **ITEMS** card: line items, **Paid With** row (brand chip + label — `paymentMethodMarkup()` renders a VISA/Apple Pay/Google Pay chip), and **Total Paid** (shows `$X`, or `$X + N mi`, or `N mi` when fully covered).
- **REWARDS** earn block (`.oe`, `renderOrderEarn()`):
  - **Member:** gold card — "🎉 You earned N miles", redeemed-miles note, **New balance**, "View rewards →".
  - **Guest:** "You could have earned N miles" + 500-mile welcome teaser + **Join FlyHouston Rewards** button (→ Rewards page).
- Driven by `window.lastOrder`. The legacy "Track My Order" path sets `lastOrder=null` and hides the payment/earn blocks.

---

## 8. FlyHouston Rewards system

### Three join/connect touchpoints (all built)
1. **Rewards tab** — permanent hub.
2. **Payment page** — high-intent join moment (inline form; joining here lets the passenger redeem on the current order).
3. **Order Confirmed** — earn celebration / "could have earned" prompt. ✅ *(completed this session)*

### Loyalty ledger is now live in the prototype
`placePaymentOrder(method)` computes the order, then for members **deducts redeemed miles**, **credits earned miles** (`earnedMiles(grand)` on the full order value), and **logs both to `userRewards.history`**, so the Rewards hub reflects each order. It stores everything the confirmation needs in `window.lastOrder` and resets `applyMiles`.

### Payment-page rewards card — `renderPaymentRewards(total, milesReq)`
- **Non-member:** "Earn N miles + 500 welcome bonus", "Join FlyHouston Rewards" → inline form (name+email) → `submitJoinForm()`; "Sign in" → `signInPrompt()` (simulates returning member).
- **Member w/ miles:** tier badge + balance + redeem toggle; CTA/totals adapt to coverage.
- **Member, 0 miles:** "Earn N miles on this order", toggle disabled.

### Rewards hub — `renderRewards()`
- **Non-member:** hero, 3 benefits (Earn 1 mile per $1 · Priority gate delivery · Link airline programs), big Join CTA, Sign in link.
  - **`showRewardsJoinForm()` now opens the official HAS enrollment portal — `https://hasemp.flyhoustonrewards.com/` — in a new tab** (was a prototype prompt). New-tab so the demo isn't lost; switch to same-tab via `location.href` if ever desired.
- **Member:** balance card (tier badge, balance, worth, tier progress), quick actions (Earn/Redeem/Link), recent activity, airline programs list, "Member since … · Sign out".

### Airline-mileage connection — bottom sheet (`.as-*`, `openAirlineSheet(brand)`)
`AIRLINES` has 7 carriers `{brand, short, name, color, prog, ratio}`. Lufthansa featured as "Suggested · matches your flight" (`DEMO_FLIGHT_CODE='LH'`).
- **Not connected:** flight-detection banner, OAuth-style sign-in (`connectAirlineOAuth()`, simulated) + manual member-number entry (`connectAirlineManual()`). Fly2Bite never sees the airline password.
- **Connected:** green badge + masked account, **transfer widget** (slider, live conversion via `ratio`, `confirmTransfer()` deducts + logs), Disconnect.
Helpers: `isAirlineLinked`, `linkedAirline`, `renderAirlineSheet`, `maskAccount`, `sampleFFFormat`, `updateTransferPreview`, `unlinkAirline`, `linkAirline(brand)`.

---

## 9. Assets embedded in the HTML
- **`LOGO` library: 27 unique logos**, each stored once and downscaled to ≤200px. Restaurants reference them by key. This deduplication + downscale is what cut the file from 2.3 MB → **0.99 MB** (~57%); the previous file embedded the same images many times (Starbucks 7×, Chick-fil-A 2×, etc.).
- Owner-provided real logos in the set: **Chick-fil-A, Starbucks, Hugo's Cocina**; the rest use the HAS placeholder/initials tiles.
- ~84 per-restaurant menu templates, emoji fallback templates, menu aliases.
- **Next size lever (optional):** externalize logos to a `/brand-logos/` folder (the code already has the file-path convention + initials fallback). Would shrink the HTML to <200 KB but trades single-file Netlify-Drop convenience for deploying a folder.

---

## 10. Placeholders (replace when real data lands)
- **Restaurant scope:** demo build is **A + C** (plus Starbucks/Chick-fil-A in B/E). Re-add Terminals B/D/E from the full dataset when in scope.
- **Logos:** real logos for Chick-fil-A, Starbucks, Hugo's; everything else is the placeholder/initials pack. Owner handles brand authorization.
- **Menus:** generic descriptive item names; real items come from vendor feeds (HMSHost, OTG, SSP, Areas USA, or tenants).
- **Flight data:** departure countdown hardcoded to 47 min; wire FlightAware/FIDS for live data + real airline detection.
- **Payments:** Express Pay buttons are styled UI; "Add card" is a prompt. No card data stored. Real flow = PaymentRequest API / Stripe Elements.
- **Rewards backend:** `userRewards` is an in-memory mock; sign-in simulated; the loyalty ledger lives only in the session. Hub "Join" links to the real portal but in-app membership state is still local. Wire HAS loyalty API.
- **Airline OAuth + transfers:** simulated; `ratio` values are placeholders.
- **Gate maps:** schematic, not CAD/GIS. B/D/E simplified placeholders.
- **Order tracking:** Order Confirmed is static; no live runner tracking yet.

---

## 11. Engineering conventions
- Naming: camelCase JS, PascalCase React, snake_case restaurant IDs, kebab-case files/slugs.
- Pure data functions (`rankedRestaurants`, `deliveryEstimate`, `getMenuItems`, tier/earn helpers) separate from render functions.
- Loading/empty/error states (e.g. search-empty vs filter-empty).
- Mobile-first, large tap targets, `aria-label` on icon-only buttons, AA contrast.
- Airport constraints surfaced visually (ETA colors, cross-terminal badge, timing banners, gate-confirm guard).
- **Logos:** never duplicate base64 — add to `LOGO`, reference by key (§5).

---

## 12. Files
| File | Purpose |
|---|---|
| `fly2Bite_app.html` | The prototype (~0.99 MB, self-contained, responsive, PWA-ready) |
| `fly2Bite_ARCHITECTURE.md` | This doc — source of truth |
| `fly2Bite_payment_chickfila_iphone.png` | Slide asset — payment page (Chick-fil-A, $20.46) in an iPhone frame |
| `fly2Bite_payment_iphone.png` | Slide asset — payment page (member state) in an iPhone frame |
| `fly2Bite_rewards_iphone.png` | Slide asset — Rewards page in an iPhone frame |
| `fly2bite_choose_restaurant.jsx`, `fly2bite_gate_select.jsx` | Earlier React components (behind the HTML now) |

**iPhone-framed PNG pipeline (for slide assets):** render the screen with Playwright at viewport `390×844`, `deviceScaleFactor:3` (→ 1170×2532, edge-to-edge), driving the app to the target state via `page.evaluate`. Then composite into an iPhone bezel with Pillow (rounded screen mask, titanium body, Dynamic Island tucked into the status-bar band, side buttons, soft drop shadow on transparent bg). Standing request: app screenshots should show the working app inside a visible iPhone frame.

---

## 13. Data still needed from HAS
1. Official IAH gate point shapefile/GeoJSON (real gate positions)
2. Per-terminal boundary GeoJSON / CAD floor plans (real maps for B, D, E)
3. Authoritative restaurant↔gate concession mapping
4. Approved official restaurant logos (swap placeholders 1-for-1) + Terminal B/D/E packs
5. Vendor menu data feeds (real items/prices)
6. Live flight feed (FlightAware/FIDS)
7. HAS loyalty backend API; airline partner OAuth + transfer agreements

---

## 14. Pending / suggested next steps
- [x] **Order Confirmed redesign** — paid-with method + earned-miles celebration. *(done this session — the 3rd rewards touchpoint)*
- [x] **Gate-confirm guard** — require a confirmed gate before ordering, with prompt. *(done this session)*
- [x] **Logo dedup + file-size reduction** — 2.3 MB → 0.99 MB. *(done this session)*
- [ ] **Orders history page** — bottom-nav Orders tab is wired but the page is minimal. *(recommended next build)*
- [ ] Live order tracking with runner progress on the schematic map.
- [ ] Gate-change handling (notify, recompute ETA, offer reroute).
- [ ] Real food photos via `RESTAURANT_MENUS[key][i].image`.
- [ ] Re-add Terminals B/D/E restaurants + logos when in scope.
- [ ] HOU Hobby Terminal 1.
- [ ] React port + real backend + auth (good point to step up to a stronger model).
- [ ] Metric-units toggle (single change in `distLabel`).

---

## 15. Presentation & hosting notes
- **From a laptop:** open the HTML → device-frame mockup auto-appears (≥480px viewport). Good for projector.
- **On a real phone / for panelists:** host it and put the URL behind a QR code on the slide.
  - **GitHub Pages (chosen):** rename file to `index.html`, push to a **Public** repo, Settings → Pages → deploy from `main` / root. URL = `https://<user>.github.io/<repo>/`. Permanent, HTTPS, free; caches for a minute or two after updates, so deploy the final build ahead of time.
  - **Netlify Drop (alternative):** drag-and-drop the file; claim it to a free account so the URL is permanent, then rename the subdomain.
  - Static + client-side → unlimited simultaneous testers, each independent, no cost.
  - **Add to Home Screen** launches it full-screen (PWA tags), edge-to-edge on any phone.
- **Slide assets:** iPhone-framed PNGs of the payment and rewards screens exist (§12); regenerate any screen with the pipeline in §12.
- **Process slide copy** (executive framing) was drafted for the deck: Discover & Define → Design the Experience → Build a Working Prototype → Ground It in Real Airport Data → Validate & Scale.

---

*End of architecture & continuity document.*
