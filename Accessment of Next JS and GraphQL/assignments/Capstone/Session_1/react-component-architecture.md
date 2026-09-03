# Capstone Session 1: React Component Architecture & Theme Selection

---

## 1. Feature Implementation Deep Dive: Shared Cart & Promo Code State

### **Selected Feature:** Interactive Redux Cart Drawer & Checkout

#### **React Components Involved:**
1. **`FoodItemCard.jsx`** (Consumer Component - Menu Page)
2. **`CartDrawer.jsx`** (Provider / Consumer Component - Global Slide-out Drawer)

#### **Data Shared Between Components:**
* **Shared State Slice:** `cart` (managed in Redux store via `cartSlice.js`).
* **State Properties:**
  * `items`: Array of selected dish objects (`{ id, name, price, category, quantity }`).
  * `discountPercentage`: Current applied promo code discount (`0.20` for 20% off).
  * `appliedPromoCode`: Active promo string (e.g. `'FEAST20'`).

#### **Detailed Implementation Flow:**

```
[ FoodItemCard ] ──( dispatch addItem )──► [ Redux Store: cartSlice ]
                                                     │
                                             ( useSelector state )
                                                     ▼
                                              [ CartDrawer ]
                                                     │
                                       ( dispatch applyDiscountThunk )
                                                     ▼
                                           [ Async Promo API ]
```

1. **Item Selection (`FoodItemCard.jsx`):**
   * When a user clicks "Add to Cart", `FoodItemCard` dispatches the `addItem({ id, name, price, category })` Redux action.
   * Redux Toolkit reducer searches `state.cart.items`. If the item exists, it increments `quantity`; otherwise, it appends a new item object with `quantity: 1`.

2. **Cart Inspection & Async Promo Validation (`CartDrawer.jsx`):**
   * `CartDrawer` consumes `useSelector((state) => state.cart)` to read the live cart array and calculate running totals dynamically.
   * When a user submits a promo code, `CartDrawer` dispatches the asynchronous **`applyDiscountThunk(promoCode)`**. The thunk contacts the validation API, updates `discountPercentage`, and recalculates `total = subtotal - (subtotal * discountPercentage)` safely without mutating state.

---

## 2. Comparison of 3 Capstone Project Themes & Final Selection

| Criteria | 1. AI Resume Builder | 2. Smart E-Commerce Dashboard | 3. AI Blog Creator |
| :--- | :--- | :--- | :--- |
| **Primary Focus** | Document parsing & ATS text analysis | Analytics charts, inventory & order CRUD | Rich text generation & SEO formatting |
| **Tech Complexity** | Medium (Text prompts & PDF export) | High (Real-time DB, Redux state, Auth) | Low-Medium (LLM API wrappers) |
| **Industry Demand** | HR Tech / SaaS startups | Retail, E-Commerce, Logistics Tech | Content marketing / Media Tech |

### **Final Selection: Smart E-Commerce / Food Delivery Platform (FoodDash AI)**

#### **Two Key Reasons for Selection:**
1. **Comprehensive Industry Tech Stack Mastery:** Building a Smart E-Commerce & Food Delivery application requires integrating **Next.js SSR/SSG**, **GraphQL API queries**, **Redux Toolkit state management**, and **Firebase Real-Time Firestore**. This covers every major technology required in modern senior front-end developer job descriptions.
2. **Real-World Complex State Challenges:** Unlike simple blog generators or resume form builders, e-commerce applications demand complex state management — handling concurrent cart updates, race conditions during promo validation, live web socket/onSnapshot updates, and session persistence across page reloads. Mastering these patterns directly prepares me for enterprise software engineering roles.
