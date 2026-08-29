import React from 'react';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Task 3: Real-Time Order Tracker</h1>
        <p>Firebase Firestore Integration with onSnapshot() Real-Time Sync & Deletion</p>
      </header>

      <div className="layout-grid">
        <OrderForm />
        <OrderList />
      </div>
    </div>
  );
}

export default App;
