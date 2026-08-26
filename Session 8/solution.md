# Session 8: Next.js Data Fetching Strategies (SSG vs SSR) - Solutions

---

### Question 1: Trending Movies Page with `getStaticProps`
**Task:** Create `trending-movies.js` using `getStaticProps` to pre-render trending movies (titles & posters).

**`movie-app/src/pages/trending-movies.js`:**
```jsx
export default function TrendingMovies({ movies }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Trending Movies (SSG Pre-rendered)</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ background: '#1e293b', borderRadius: '10px', overflow: 'hidden' }}>
            <img src={movie.poster} alt={movie.title} style={{ width: '100%', height: '260px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>{movie.title}</h3>
              <p>Rating: ⭐ {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const mockMovies = [
    { id: '1', title: 'Inception', poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300', rating: 8.8 },
    { id: '2', title: 'Interstellar', poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300', rating: 8.7 },
    { id: '3', title: 'The Dark Knight', poster: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300', rating: 9.0 },
    { id: '4', title: 'Avatar: The Way of Water', poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300', rating: 7.8 }
  ];

  return {
    props: {
      movies: mockMovies
    }
  };
}
```

---

### Question 2: Food Orders Page with `getServerSideProps`
**Task:** Build `my-orders.js` using `getServerSideProps` to fetch recent user food orders on every server request.

**`movie-app/src/pages/my-orders.js`:**
```jsx
export default function MyOrders({ orders, fetchedAt }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Zomato Food Orders (SSR)</h1>
      <p>Fetched on-demand at: <strong>{fetchedAt}</strong></p>

      {orders.map((order) => (
        <div key={order.id} style={{ background: '#1e293b', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
          <h3>{order.restaurant}</h3>
          <p>Item: {order.items}</p>
          <span>₹{order.amount} - {order.status}</span>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const mockOrders = [
    { id: 'ORD-101', restaurant: 'Punjab Grill', items: 'Butter Chicken + Naan', amount: 450, status: 'Delivered' },
    { id: 'ORD-102', restaurant: 'Dominos Pizza', items: 'Farmhouse Pizza + Coke', amount: 599, status: 'On the way' },
    { id: 'ORD-103', restaurant: 'Subway', items: 'Veggie Delite Sub 15cm', amount: 280, status: 'Delivered' }
  ];

  return {
    props: {
      orders: mockOrders,
      fetchedAt: new Date().toLocaleTimeString()
    }
  };
}
```

---

### Question 3: Dynamic Flipkart Product Routes with `getStaticPaths` & `getStaticProps`
**Task:** Create `pages/products/[id].js` pre-generating 5 Flipkart product IDs (`p1` to `p5`).

**`movie-app/src/pages/products/[id].js`:**
```jsx
export default function ProductDetail({ product }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Flipkart Product Page (SSG)</h1>
      <div>
        <h2>{product.name}</h2>
        <p>₹{product.price.toLocaleString()}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
}

const productsData = [
  { id: 'p1', name: 'iPhone 15 Pro Max', price: 134900, category: 'Mobiles' },
  { id: 'p2', name: 'Sony Bravia 55 inch 4K TV', price: 64990, category: 'Televisions' },
  { id: 'p3', name: 'Asus ROG Gaming Laptop', price: 92990, category: 'Laptops' },
  { id: 'p4', name: 'Nike Air Max Sneakers', price: 8995, category: 'Footwear' },
  { id: 'p5', name: 'Canon EOS R6 Camera', price: 215995, category: 'Cameras' }
];

export async function getStaticPaths() {
  return {
    paths: productsData.map(p => ({ params: { id: p.id } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const product = productsData.find(p => p.id === params.id);
  return { props: { product } };
}
```

---

### Question 4: Spotify Albums with GraphQL inside `getStaticProps`
**Task:** Integrate a GraphQL query inside `getStaticProps` to fetch 5 latest music albums.

**`movie-app/src/pages/latest-albums.js`:**
```jsx
export default function LatestAlbums({ albums }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Spotify Latest Albums (GraphQL + SSG)</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h3>💿 {album.name}</h3>
            <p>Artist: {album.artist} ({album.releaseYear})</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const mockAlbumsData = [
    { id: 'alb-1', name: 'Hit Me Hard and Soft', artist: 'Billie Eilish', releaseYear: 2024 },
    { id: 'alb-2', name: 'The Tortured Poets Department', artist: 'Taylor Swift', releaseYear: 2024 },
    { id: 'alb-3', name: 'Cowboy Carter', artist: 'Beyoncé', releaseYear: 2024 },
    { id: 'alb-4', name: 'Short n Sweet', artist: 'Sabrina Carpenter', releaseYear: 2024 },
    { id: 'alb-5', name: 'Utopia', artist: 'Travis Scott', releaseYear: 2023 }
  ];

  return { props: { albums: mockAlbumsData } };
}
```

---

### Question 5: SSG (`getStaticProps`) vs SSR (`getServerSideProps`) Comparison Diagram

![SSG vs SSR Diagram](file:///C:/Users/ARYAN%20PARMAR/.gemini/antigravity-ide/brain/19062316-2100-400c-a631-e5130ca5b3ee/ssg_vs_ssr_diagram_1787724533761.jpg)

**Explanation:**
1. **Execution Timing:** SSG (`getStaticProps`) executes once at **Build Time**, pre-building HTML files that are cached on a global CDN for near-instant delivery. SSR (`getServerSideProps`) runs on **every incoming user request** on the server to fetch live, real-time data.
2. **Use Case Suitability:** SSG is optimal for static or infrequently updated content like blog posts or e-commerce product catalogs (e.g. Flipkart), whereas SSR is essential for dynamic, user-specific data that updates frequently like live food delivery order tracking (e.g. Zomato).
