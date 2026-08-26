import RestaurantList from './RestaurantList';
import ProductList from './ProductList';
import MovieDebugger from './MovieDebugger';
import './App.css';

export default function App() {
  return (
    <div className="main-layout">
      <header className="page-header">
        <h1>Session 3: useQuery, Component Refactoring & Debugging</h1>
      </header>

      <div className="content-grid">
        <RestaurantList />
        <ProductList />
        <MovieDebugger />
      </div>
    </div>
  );
}
