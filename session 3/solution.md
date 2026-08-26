# Session 3: `useQuery`, Component Refactoring & Debugging - Solutions

---

### Question 1 & Question 4
**Task:** 
1. Use `useQuery` hook to fetch a list of restaurants (`id`, `name`, `cuisine`) from a GraphQL endpoint and display their names.
2. Refactor the restaurant list component to extract the rendering of a single restaurant into a separate `RestaurantCard` component.

**`src/RestaurantCard.jsx` (Extracted Card Component):**
```jsx
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
```

**`src/RestaurantList.jsx` (Container Component):**
```jsx
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
```

---

### Question 2 & Question 3
**Task:** Build a Flipkart-style product list component using `useQuery` with loading ('Loading...') and error handling conditional rendering.

**`src/ProductCard.jsx`:**
```jsx
// Single product card component in Flipkart style
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h4 className="product-name">{product.name}</h4>
        <div className="price-tag">₹{product.price.toLocaleString()}</div>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}
```

**`src/ProductList.jsx`:**
```jsx
import { useQuery, gql } from '@apollo/client';
import ProductCard from './ProductCard';

// Query to get Flipkart products
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      image
    }
  }
`;

export default function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  // Showing loading message while fetching
  if (loading) {
    return <div className="loading-state">Loading products...</div>;
  }

  // Displaying error message if query fails
  if (error) {
    return <div className="error-state">Failed to load products: {error.message}</div>;
  }

  return (
    <section className="section-block">
      <h2>Flipkart Deals of the Day</h2>
      <div className="product-grid">
        {data.products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
```

---

### Question 5: Debugging Code Snippet

**Original Code Snippet with Bugs:**
```javascript
const { loading, error, data } = useQuery(GET_MOVIES);
if (loading) return 'Loading...';
if (error) return 'Error!';
if (!data) return 'No data.';
return (<ul>{data.movies.map(movie => <li>{movie.title}</li>)}</ul>);
```

**Identified Issues & Root Causes:**
1. **Missing `key` Prop in List Iteration:** React requires a unique `key` prop on mapped `<li>` elements (e.g. `key={movie.id}`). Without it, React list reconciliation can glitch or retain old DOM states.
2. **Next.js Client Directive Missing:** In Next.js (App Router), `useQuery` is a client-side hook. If used without `'use client';` directive at the top of the file, Next.js Server Components fail to hydrate or hang on loading/stuck states.
3. **Data Protection & Schema Safety:** Direct access `data.movies` without verifying `data?.movies` will throw a TypeError if `movies` field returns null or a different property name in response.
4. **Returning Raw Strings instead of JSX:** Returning bare string `'Loading...'` works in simple cases but returning proper JSX (e.g. `<p>Loading...</p>`) ensures correct rendering inside parent layouts.

**Fixed & Debugged Code (`src/MovieDebugger.jsx`):**
```jsx
'use client'; // Required for Next.js App Router Client Components
import { useQuery, gql } from '@apollo/client';

const GET_MOVIES = gql`
  query GetMovies {
    movies {
      id
      title
      releaseYear
    }
  }
`;

export default function MovieDebugger() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  // 1. Loading state condition
  if (loading) return <p className="loading-state">Loading movies...</p>;

  // 2. Error state condition
  if (error) return <p className="error-state">Error: {error.message}</p>;

  // 3. Data existence validation
  if (!data || !data.movies) return <p className="status-msg">No movies found.</p>;

  // 4. Clean return with unique key prop
  return (
    <section className="section-block">
      <h2>Movie List</h2>
      <ul className="movie-list">
        {data.movies.map((movie) => (
          <li key={movie.id || movie.title}>
            🎬 {movie.title} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </section>
  );
}
```
