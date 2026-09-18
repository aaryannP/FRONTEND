import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default function Session12App() {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [searchCuisine, setSearchCuisine] = useState("");
  const [restaurantsList, setRestaurantsList] = useState<any[]>([]);

  const filteredRestaurants = restaurantsList.filter((restaurant) =>
    restaurant.cuisine.toLowerCase().includes(searchCuisine.toLowerCase())
  );

  const fetchRestaurants = async () => {
    try {
      const restaurantsCollectionRef = collection(db, "restaurants");
      const snapshot = await getDocs(restaurantsCollectionRef);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setRestaurantsList(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleAddRestaurant = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!name || !cuisine) return;

    try {
      const restaurantsCollectionRef = collection(db, "restaurants");
      
      await addDoc(restaurantsCollectionRef, {
        name: name,
        cuisine: cuisine
      });

      setName("");
      setCuisine("");
      alert("Restaurant added!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add a Restaurant</h2>
      <form onSubmit={handleAddRestaurant}>
        <input 
          type="text" 
          placeholder="Restaurant Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Cuisine (e.g. Italian)" 
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <h3>Restaurant List</h3>
      <input 
        type="text" 
        placeholder="Filter by cuisine..." 
        value={searchCuisine}
        onChange={(e) => setSearchCuisine(e.target.value)}
        style={{ marginBottom: "10px" }}
      />

      <ul>
        {filteredRestaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <strong>{restaurant.name}</strong> - {restaurant.cuisine}
          </li>
        ))}
      </ul>
    </div>
  );
}
