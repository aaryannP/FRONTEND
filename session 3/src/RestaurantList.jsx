import { useQuery, gql } from '@apollo/client';
import RestaurantCard from './RestaurantCard';

// Query to get restaurant list
const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      id
      name
      cuisine
    }
  }
`;

export default function RestaurantList() {
  const { loading, error, data } = useQuery(GET_RESTAURANTS);

  // Loading state
  if (loading) return <p className="loading-state">Loading restaurants...</p>;

  // Error state
  if (error) return <p className="error-state">Error fetching restaurants: {error.message}</p>;

  return (
    <section className="section-block">
      <h2>Top Restaurants List</h2>
      <div className="restaurant-grid">
        {data.restaurants.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </section>
  );
}
