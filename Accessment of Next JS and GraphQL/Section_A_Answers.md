# ReactJS Assessment M4-A1: Section A — Concept Application

---

## Question 1 (S1) — React Fundamentals: Props vs Hardcoding

### Scenario:
You are building a food delivery app where dozens of restaurant cards must be rendered on the homepage. Each card shows the restaurant name, cuisine type, rating, and estimated delivery time. You plan to create a single `RestaurantCard` component that can be reused for every card.

### Question:
Explain why props are the correct mechanism to pass the restaurant data into each `RestaurantCard` instance rather than hardcoding the values inside the component. What specific problem does props-driven design solve when the same component must render data for 50 different restaurants from an API response array?

### Detailed Answer:

#### 1. Why Props are the Correct Mechanism over Hardcoding:
* **Component Reusability & Data Decoupling:** Props (short for *"properties"*) act as input parameters passed into a React component function, converting it into a pure, dynamic UI layout template. Hardcoding values directly inside a component tightly couples the UI structure with static data, restricting it to display only one restaurant. Props decouple presentation from data, enabling a single `RestaurantCard` component to dynamically display any restaurant's name, cuisine, rating, and delivery time.

#### 2. Specific Problem Solved by Props-Driven Design for 50 Restaurants:
* **Eliminating Code Duplication (DRY Principle):** Without props, rendering 50 restaurants would require writing 50 separate hardcoded components (e.g., `RestaurantCard1`, `RestaurantCard2`, ..., `RestaurantCard50`) or repeating 50 blocks of identical HTML markup.
* **Dynamic Mapping over API Arrays:** Props enable array mapping via JavaScript’s `.map()` method. When an API returns an array of 50 restaurant objects, a single `RestaurantCard` component can be rendered in a dynamic loop:
  ```jsx
  {restaurants.map((restaurant) => (
    <RestaurantCard key={restaurant.id} data={restaurant} />
  ))}
  ```
* **Maintainability & Scalability:** Updating the visual design or markup of the card in one place (`RestaurantCard.jsx`) instantly updates all 50 rendered instances across the application.

---

## Question 2 (S2) — React Fundamentals: Hooks & Execution Order

### Scenario:
You are developing the live order tracking screen for a food delivery platform. When the screen loads, it must immediately call the backend API to get the current order status. Whenever the order status changes — for example from 'Preparing' to 'Out for Delivery' — the UI must update automatically without a page reload.

### Question:
Which two React hooks would you use to manage this behaviour, and in what order do they execute on the component's initial render? Justify why the API call must be placed inside a hook rather than directly inside the component function body.

### Detailed Answer:

#### 1. Two React Hooks Required:
* **`useState`:** To hold and update the reactive state of the order status (e.g., `const [orderStatus, setOrderStatus] = useState('Preparing')`).
* **`useEffect`:** To perform asynchronous side-effects, such as making the initial HTTP fetch to the backend API or subscribing to real-time order updates.

#### 2. Execution Order on Component's Initial Render:
1. **`useState` (Synchronous Render Phase):** Executes first as React parses the component function body to initialize state variables in memory.
2. **Initial JSX Render & Paint:** The component returns initial JSX (e.g., displaying `'Preparing'` or a loading indicator), and React paints the initial DOM elements.
3. **`useEffect` (Post-Mount Effect Phase):** Executes *after* the initial DOM paint is complete, executing the asynchronous API call callback.

#### 3. Justification for Placing API Calls Inside `useEffect` vs Component Body:
* **Preventing Infinite Render Loops:** The component function body executes on every single render cycle. If an API call is executed directly in the component body, setting state (`setOrderStatus`) upon receiving data triggers a re-render → which executes the component body again → which triggers another API call → resulting in an **infinite render loop** that crashes the browser.
* **Preserving Pure Component Rendering:** React components must remain pure functions during execution. Placing side-effects inside `useEffect` with an empty dependency array `[]` ensures the API call runs strictly once after the component mounts, updating state safely without uncontrolled re-renders.

---

## Question 3 (S3) — React Advanced: Custom Hooks & State Isolation

### Scenario:
You are working on a food delivery app where three separate components — the restaurant listing page, the individual menu page, and the order history screen — each fetch data from different API endpoints. All three use identical logic to manage loading spinners and error messages.

### Question:
How would you extract this repeated fetch logic into a custom hook to eliminate duplication? What naming convention must a custom hook follow, and what should it return so that each of the three components can consume it independently without sharing state?

### Detailed Answer:

#### 1. Extracting Repeated Fetch Logic into a Custom Hook:
Create a JavaScript function (e.g., `useFetchData(url)`) that encapsulates the `useState` definitions for `data`, `loading`, and `error`, along with a `useEffect` block that handles the asynchronous HTTP request.

```javascript
import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;
```

#### 2. Naming Convention:
* Custom hooks **must start with the lowercase prefix `use`** (e.g., `useFetchData`, `useApi`). This convention is strictly checked by React's linter plugins (`eslint-plugin-react-hooks`) to verify compliance with the Rules of Hooks (such as avoiding conditional hook invocations).

#### 3. Return Format & State Isolation Guarantee:
* **Return Format:** Return an object containing state variables: `{ data, loading, error }`.
* **Independent State Execution:** Custom hooks share stateful *logic*, not state *memory*. Every time a component calls a custom hook, React creates an entirely new, isolated instance of `useState` and `useEffect` bound specifically to that component instance.
* Therefore, Restaurant Listing (`useFetchData('/api/restaurants')`), Menu Page (`useFetchData('/api/menu')`), and Order History (`useFetchData('/api/orders')`) each maintain their own independent data, loading, and error states without cross-contamination.

---

## Question 4 (S4) — React Advanced: Context API vs Redux & Async Middleware

### Scenario:
You are building the cart feature for a food delivery platform. The cart state — holding item IDs, quantities, and the running total — must be readable and updatable from the restaurant menu page, the persistent cart drawer in the navbar, and the checkout page, all at the same time.

### Question:
Compare using React Context API versus Redux to manage this shared cart state. Under what conditions would Redux be the more suitable choice for a production-scale food delivery app, and what specific problem does Redux Thunk solve when the cart feature needs to call a server API to apply a promo code?

### Detailed Answer:

#### 1. Comparison: React Context API vs Redux

| Feature | React Context API | Redux |
| :--- | :--- | :--- |
| **Setup & Complexity** | Simple, built into React | Requires extra libraries & boilerplate |
| **Re-render Optimization** | Any Context value change re-renders **all** consumers | Selectors (`useSelector`) re-render **only** when targeted state changes |
| **State Structure** | Separate contexts or single object | Centralized single Store |
| **Debugging Tools** | Basic React DevTools | Redux DevTools (Time-travel debugging, action logging) |
| **Async Middleware** | Custom wrapper / `useEffect` | Built-in middleware ecosystem (Redux Thunk, Saga) |

#### 2. Conditions Where Redux is More Suitable for Production-Scale Apps:
1. **Frequent & Complex State Operations:** Cart operations involve complex actions (adding items, recalculating subtotals, applying discounts, tax math). Redux manages complex state transitions predictably via pure reducers.
2. **High-Performance Fine-Grained Re-rendering:** In a large component tree, Context API causes unnecessary re-renders across all consumers when any slice changes. Redux selectors ensure components (e.g., Navbar badge) only re-render when their precise slice of data updates.
3. **Traceability & Enterprise Tooling:** Need for time-travel debugging, audit logging, and middleware integrations for analytics/persistence.

#### 3. Specific Problem Solved by Redux Thunk for Promo Code API:
* **The Problem:** Standard Redux action creators are synchronous and must return a plain JavaScript object `{ type, payload }`. Redux reducers are pure functions with zero side-effects and cannot perform asynchronous HTTP requests (like checking a promo code on a server).
* **The Solution:** **Redux Thunk** middleware allows action creators to return an asynchronous **function** (a thunk) instead of a plain action object. The thunk function receives `dispatch` and `getState`, enabling it to execute async operations:
  ```javascript
  export const applyPromoCode = (code) => async (dispatch) => {
    dispatch({ type: 'APPLY_PROMO_START' });
    try {
      const response = await fetch(`/api/promo?code=${code}`);
      const data = await response.json();
      dispatch({ type: 'APPLY_PROMO_SUCCESS', payload: data.discount });
    } catch (error) {
      dispatch({ type: 'APPLY_PROMO_ERROR', payload: error.message });
    }
  };
  ```

---

## Question 5 (S5) — GraphQL & Next.js: GraphQL vs REST API & Over-Fetching

### Scenario:
You are designing the data API for a food delivery platform. The customer-facing mobile app only needs the restaurant name, average rating, and delivery fee per restaurant. The admin dashboard, however, requires the full restaurant profile — including owner contact details, total order count, active menu items, and city — for each record.

### Question:
Explain how a GraphQL API satisfies both clients from a single endpoint differently from a traditional REST API. Which GraphQL feature prevents the mobile app from receiving data it does not need, and how does it benefit network performance on a mobile connection?

### Detailed Answer:

#### 1. GraphQL vs REST API Architecture Difference:
* **REST API Approach:** REST relies on fixed endpoint URLs (e.g., `GET /api/restaurants`). The server determines the exact JSON payload. To support both mobile and admin clients, REST either:
  * Over-fetches by returning the full admin profile to mobile devices, OR
  * Requires creating multiple endpoints (`/api/mobile/restaurants` vs `/api/admin/restaurants`), leading to endpoint sprawl and rigid maintenance.
* **GraphQL Approach:** GraphQL exposes a single endpoint (`/graphql`). The client explicitly declares the exact shape of data it needs in a GraphQL query document.

#### 2. GraphQL Feature Preventing Unneeded Data Transfer:
* **Declarative Data Fetching / Selective Field Selection:** Clients request only the specific fields required for their view.

  **Mobile App Query:**
  ```graphql
  query GetMobileRestaurants {
    restaurants {
      name
      rating
      deliveryFee
    }
  }
  ```

  **Admin Dashboard Query:**
  ```graphql
  query GetAdminRestaurants {
    restaurants {
      name
      rating
      deliveryFee
      ownerContact
      totalOrderCount
      activeMenuItems
      city
    }
  }
  ```

#### 3. Network Performance Benefits on Mobile Connections:
* **Eliminates Over-Fetching:** The mobile app receives zero unrequested bytes.
* **Massively Reduced Payload Size:** Reduces response size by 70% to 90%.
* **Optimized Mobile UX:** Smaller JSON payloads lower mobile cellular data usage, reduce JSON parsing latency on mobile CPUs, save battery life, and accelerate page load times on 3G/4G/5G connections.

---

## Question 6 (S6) — GraphQL & Next.js: Next.js Rendering Strategies (SSG vs SSR)

### Scenario:
You are optimising the homepage of a food delivery web platform built in Next.js. The homepage displays a curated list of featured restaurants that the marketing team updates once a day. Organic search traffic from Google is a primary acquisition channel, so every millisecond of page load time and every crawlable HTML element matters.

### Question:
Would you use `getStaticProps` or `getServerSideProps` to fetch the featured restaurant list, and why? Explain precisely how your choice affects Google's ability to index the page content and how it differs in the load it places on your server per visitor request.

### Detailed Answer:

#### 1. Choice of Data Fetching Method:
* **`getStaticProps` (Static Site Generation - SSG)**, optionally with Incremental Static Regeneration (ISR via `revalidate: 86400`).

#### 2. Why `getStaticProps` over `getServerSideProps`:
* **Matching Data Update Frequency:** The featured list updates only once a day. Using `getServerSideProps` (SSR) would unnecessarily fetch the API and re-render HTML on every single HTTP request.
* **Pre-rendering Static HTML:** `getStaticProps` fetches data at build time (or in the background every 24 hours via ISR) and generates static HTML files served directly from a Content Delivery Network (CDN).

#### 3. Effect on Google Crawling & SEO Indexing:
* **Instant Crawlable HTML:** Search crawlers (Googlebot) receive a fully populated HTML document immediately on the first HTTP GET request without waiting for server-side API calls or client-side JavaScript hydration.
* **Enhanced Core Web Vitals:** Serving static assets from CDN edge locations yields near-instant Time To First Byte (TTFB), First Contentful Paint (FCP), and Largest Contentful Paint (LCP), maximizing Google search ranking metrics.

#### 4. Server Load Comparison per Visitor Request:
* **`getServerSideProps` (SSR) — High Server Load:** On every visitor request, the backend server must execute Node.js functions, call database/API endpoints, and render React components to HTML strings. Under high traffic spikes, this causes significant CPU and database strain.
* **`getStaticProps` (SSG) — Near-Zero Server Load:** The page is pre-built once and cached globally on CDN edge servers. All subsequent visitor requests are served statically with **zero Node.js CPU execution** and **zero database queries** on the application server.

---
