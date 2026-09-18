import { useUser } from "./UserContext";
import { useFavorites } from "./FavoritesContext";

const DUMMY_RESTAURANTS = [
  { id: "r1", name: "Spicy Kingdom" },
  { id: "r2", name: "Burger Barn" },
  { id: "r3", name: "Vegan Vibes" },
];

export default function RestaurantList() {
  const user = useUser();
  const { favorites, dispatch } = useFavorites();

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "left" }}>
      <h3>Welcome, {user.name}!</h3>
      <h4>Your Favorites Count: {favorites.length}</h4>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        {DUMMY_RESTAURANTS.map((restaurant) => {
          const isFavorite = favorites.includes(restaurant.id);

          return (
            <li 
              key={restaurant.id} 
              style={{ 
                border: "1px solid #ccc", 
                padding: "15px", 
                margin: "10px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span>{restaurant.name}</span>
              <button
                onClick={() => {
                  if (isFavorite) dispatch({ type: "REMOVE_FAVORITE", payload: restaurant.id })
                  else dispatch({ type: "ADD_FAVORITE", payload: restaurant.id })
                }}
                style={{
                  padding: "5px 10px",
                  cursor: "pointer",
                  backgroundColor: isFavorite ? "#ff4d4f" : "#1890ff",
                  color: "white",
                  border: "none",
                  borderRadius: "3px"
                }}
              >
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
