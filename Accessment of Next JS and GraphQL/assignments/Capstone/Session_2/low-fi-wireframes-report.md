# Capstone Session 2 — Task 1: Low-Fidelity Wireframes Report

This document presents the structural wireframes and structural layout maps for two low-fidelity web UI designs: a **Zomato/Swiggy-style Food Delivery Homepage** and a **Flipkart-style E-Commerce Homepage**.

---

## 1. Low-Fidelity Wireframe: Zomato/Swiggy Food Delivery Homepage

### Wireframe ASCII & Structure Layout Map

```text
+-----------------------------------------------------------------------+
|  [LOGO: FoodDash]   [Search Bar: "Search for dish or restaurant"] [Cart|2]|
+-----------------------------------------------------------------------+
|  [BANNER: 50% OFF Early Bird Deals - Order Now!]                       |
+-----------------------------------------------------------------------+
|  Categories: ( (All) )  ( (Pizza) )  ( (Burgers) )  ( (Sushi) )       |
+------------------------------------+----------------------------------+
|  FEATURED RESTAURANTS              |  LIVE ORDER TRACKING             |
|  +-------------------------------+ |  +-----------------------------+ |
|  | [IMG] Restaurant Alpha        | |  | Order #8421 - Preparing     | |
|  | ★ 4.5 | 25 min | Delivery Fee | |  | Delivery Partner: Ramesh    | |
|  +-------------------------------+ |  +-----------------------------+ |
|  | [IMG] Restaurant Beta         | |  | [Live Progress Bar ========]| |
|  | ★ 4.8 | 15 min | Free Delivery| |  +-----------------------------+ |
|  +-------------------------------+ |                                  |
+------------------------------------+----------------------------------+
|  [FOOTER: About | Contact | Privacy | Terms]                          |
+-----------------------------------------------------------------------+
```

### Structural Highlights:
1. **Header & Navigation:** Simple, clean top bar containing brand logo, centralized search input, and cart counter button.
2. **Hero Promo Banner:** Full-width placeholder banner emphasizing discounts to boost immediate conversion.
3. **Category Chips:** Horizontal pill list allowing quick filter selection without page reloads.
4. **Main Content Split:** Left column dedicated to restaurant cards (image, rating, delivery time, price badge), right column reserved for sticky live order tracking status.

---

## 2. Low-Fidelity Wireframe: Flipkart-Style E-Commerce Homepage

### Wireframe ASCII & Structure Layout Map

```text
+-----------------------------------------------------------------------+
| [LOGO: Flipkart]  [Search Products...]  [Login] [Become Seller] [Cart]|
+-------------------+---------------------------------------------------+
| SIDEBAR FILTERS   | TOP SORT BAR: [Relevance] [Price Low-High] [Rating]|
|                   +---------------------------------------------------+
| Categories:       | PRODUCT GRID                                      |
| [X] Electronics   | +-----------------+ +-----------------+ +---------+ |
| [ ] Fashion       | | [IMG] Phone 5G  | | [IMG] Headphones| | [IMG]   | |
| [ ] Home          | | ₹23,999 (20% off| | ₹4,999 (50% off) | | Laptop  | |
|                   | | [Add to Cart]   | | [Add to Cart]   | | [Cart]  | |
| Price Range:      | +-----------------+ +-----------------+ +---------+ |
| [===O======]      | +-----------------+ +-----------------+ +---------+ |
| ₹500 - ₹50,000    | | [IMG] Smartwatch| | [IMG] Earbuds   | | [IMG]   | |
|                   | | ₹2,999          | | ₹1,499          | | Speaker | |
| Rating:           | | [Add to Cart]   | | [Add to Cart]   | | [Cart]  | |
| [X] 4★ & above    | +-----------------+ +-----------------+ +---------+ |
+-------------------+---------------------------------------------------+
|  [FOOTER: Policy | Help | Careers | Socials]                         |
+-----------------------------------------------------------------------+
```

### Layout Placement Strategy:
* **Focus:** Pure structure and visual placement, avoiding color noise.
* **Navigation Header:** Sticky top bar keeping search and cart accessible across scrolling.
* **Left Sidebar:** Filter panel pinned to the left edge for category selection, price range sliders, and rating checkboxes.
* **Product Grid:** Responsive multi-column layout displaying product cards with image containers, prices, discount badges, and primary action buttons.
