import React from 'react';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Task 2: Custom Hook (useFetchRestaurants)</h1>
        <p>Fetching mock API data with loading & error state management</p>
      </header>

      <RestaurantList />
    </div>
  );
}

export default App;
