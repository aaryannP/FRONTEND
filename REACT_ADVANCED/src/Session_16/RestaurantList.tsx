import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { fetchRestaurants } from './restaurantSlice';

export default function RestaurantList() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector((state: RootState) => state.restaurants);
  
  const [city, setCity] = useState('');

  useEffect(() => {
    dispatch(fetchRestaurants(''));
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(fetchRestaurants(city));
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>Error: {error}</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Restaurants</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Enter city (e.g. Gwenborough)" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: '5px', marginRight: '10px' }}
        />
        <button onClick={handleSearch} style={{ padding: '5px 10px' }}>
          Search
        </button>
      </div>

      <ul>
        {data.length === 0 ? (
           <p>No restaurants found for this city.</p>
        ) : (
           data.map((restaurant: any) => (
             <li key={restaurant.id}>
               {restaurant.name} - (City: {restaurant.address?.city})
             </li>
           ))
        )}
      </ul>
    </div>
  );
}
