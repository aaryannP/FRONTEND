// Single restaurant card component
export default function RestaurantCard({ restaurant }) {
  return (
    <div className="restaurant-card">
      <div className="res-icon">🍽️</div>
      <div className="res-info">
        <h3>{restaurant.name}</h3>
        <p>Cuisine: <span>{restaurant.cuisine}</span></p>
        <small>ID: #{restaurant.id}</small>
      </div>
    </div>
  );
}
