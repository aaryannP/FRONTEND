# Section C — Mini Capstone Project: AI-Powered Food Delivery Platform

This directory contains the full-stack source code for the **Mini Capstone Project** required in Section C of the **ReactJS Assessment (M4-A1)**.

---

## 🎯 Architecture & Technologies Combined

1. **Next.js File-Based Routing:**
   - Home Page (`pages/index.js`)
   - Restaurant Menu Page (`pages/menu.js`)
   - Real-Time Order History Page (`pages/orders.js`)
   - Authentication Page (`pages/login.js`)
   - Shared Header Navigation (`components/Navbar.jsx`) appearing on every page.

2. **Firebase Authentication & Firestore:**
   - Email/password sign-up and login in [`pages/login.js`](file:///c:/Users/ARYAN/OneDrive/Desktop/Accessment%20of%20Next%20JS%20and%20GraphQL/Section_C/pages/login.js).
   - Session persistence via `onAuthStateChanged()`.
   - Protected route for Order History (`/orders`).
   - Real-time Firestore sync via `onSnapshot()` on the `orders` collection.

3. **GraphQL & Apollo Client:**
   - Menu item fetching on `/menu` using Apollo Client's `useQuery` hook against a GraphQL endpoint (`https://graphqlzero.almansi.me/api`).
   - Reusable `FoodItemCard` component handling loading and error states.

4. **Redux & Redux Thunk:**
   - Cart state management (Add item, Remove item, Quantity update) across pages.
   - Asynchronous Redux Thunk (`applyDiscountThunk`) for server-side promo code validation (`FEAST20`, `SAVE10`, `TOPS50`).

---

## 🚀 How to Run Section C

```bash
cd Section_C
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.
