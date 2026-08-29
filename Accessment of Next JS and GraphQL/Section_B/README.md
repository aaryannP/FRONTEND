# Section B — Practical Coding Tasks

This directory contains the source code for all 4 practical coding tasks required for the **ReactJS Assessment (M4-A1)**.

---

## 📁 Directory & Folder Structure

```
Section_B/
├── README.md                           # Overview and execution guide
├── Task_1_FoodItemCard/                # Task 1: Component with State
│   ├── package.json
│   ├── index.html
│   └── src/
│       ├── components/
│       │   └── FoodItemCard.jsx        # Reusable component with props & useState
│       ├── App.jsx                     # Parent app mapping over 6 food items
│       ├── index.css                   # Premium CSS styling
│       └── main.jsx
├── Task_2_useFetchRestaurants/         # Task 2: Custom Hook
│   ├── package.json
│   ├── index.html
│   └── src/
│       ├── hooks/
│       │   └── useFetchRestaurants.js  # Custom hook with useEffect, try/catch
│       ├── components/
│       │   └── RestaurantList.jsx     # Consuming component with loading & error UI
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
├── Task_3_FirestoreOrderTracker/       # Task 3: Real-Time Firebase Firestore
│   ├── package.json
│   ├── index.html
│   ├── .env.example                    # Environment variable template
│   └── src/
│       ├── firebase/
│       │   └── firebaseConfig.js       # Firebase initialization using process.env
│       ├── components/
│       │   ├── OrderForm.jsx           # Controlled form using useState
│       │   └── OrderList.jsx           # Real-time listener with onSnapshot & deleteDoc
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
└── Task_4_NextjsApolloGraphQL/         # Task 4: Next.js + Apollo GraphQL
    ├── package.json
    ├── .env.example
    ├── lib/
    │   └── apolloClient.js             # Apollo client with ssrMode
    ├── pages/
    │   ├── _app.js                     # ApolloProvider wrapper
    │   ├── index.js                    # Landing page
    │   └── restaurants.js              # /restaurants page with useQuery & getStaticProps
    └── styles/
        └── globals.css
```

---

## 🚀 How to Run Each Task

### **Task 1: Food Item Card Component**
```bash
cd Section_B/Task_1_FoodItemCard
npm install
npm run dev
```

### **Task 2: useFetchRestaurants Custom Hook**
```bash
cd Section_B/Task_2_useFetchRestaurants
npm install
npm run dev
```

### **Task 3: Real-Time Order Tracker with Firestore**
```bash
cd Section_B/Task_3_FirestoreOrderTracker
npm install
# Copy .env.example to .env and add Firebase keys
npm run dev
```

### **Task 4: Next.js Restaurant Listing Page with Apollo GraphQL**
```bash
cd Section_B/Task_4_NextjsApolloGraphQL
npm install
npm run dev
# Visit http://localhost:3000/restaurants
```
