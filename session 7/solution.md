# Session 7: Next.js File-Based Routing, Dynamic Routes & SSG - Solutions

---

### Question 1 & Question 3: File-Based Routing & Navbar Component
**Task:** Create three pages (`home.js`, `explore.js`, `contact.js`) with unique headings and add a Navbar component using `next/link`.

**`src/components/Navbar.js`:**
```jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1.5rem', padding: '1rem', background: '#1e293b' }}>
      <Link href="/home">Home</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/playlists/101">Playlist #101</Link>
      <Link href="/product/P-990">Product P-990</Link>
    </nav>
  );
}
```

**`src/pages/home.js`:**
```jsx
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page - Welcome to Music Portal</h1>
      <p>Discover trending playlists and top artists.</p>
    </div>
  );
}
```

**`src/pages/explore.js`:**
```jsx
import Navbar from '../components/Navbar';

export default function Explore() {
  return (
    <div>
      <Navbar />
      <h1>Explore Page - Browse New Genres</h1>
      <p>Find pop, rock, lo-fi beats, and classic podcasts.</p>
    </div>
  );
}
```

**`src/pages/contact.js`:**
```jsx
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contact Us - Get in Touch</h1>
      <p>Email: support@musicapp.com | Phone: +1 800 555 0199</p>
    </div>
  );
}
```

---

### Question 2 & Question 4: Dynamic Spotify Playlist Route with `getStaticPaths` & `getStaticProps`
**Task:** Create `pages/playlists/[playlistId].js` to display dynamic `playlistId` from URL using `useRouter`, and pre-render IDs `101`, `202`, and `303` at build time.

**`src/pages/playlists/[playlistId].js`:**
```jsx
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function PlaylistDetail({ playlist }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading Playlist...</p>;
  }

  const { playlistId } = router.query;

  return (
    <div>
      <Navbar />
      <h1>Spotify Playlist View</h1>
      <div>
        <h2>Playlist ID: {playlistId || playlist.id}</h2>
        <h3>Name: {playlist.name}</h3>
        <p>Genre: {playlist.genre}</p>
        <p>Total Tracks: {playlist.trackCount}</p>
      </div>
    </div>
  );
}

// Pre-rendering IDs: 101, 202, 303 at build time
export async function getStaticPaths() {
  const paths = [
    { params: { playlistId: '101' } },
    { params: { playlistId: '202' } },
    { params: { playlistId: '303' } }
  ];

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const mockPlaylists = {
    '101': { id: '101', name: 'Top Pop Hits 2024', genre: 'Pop', trackCount: 50 },
    '202': { id: '202', name: 'Chill Lo-Fi Beats', genre: 'Lo-Fi', trackCount: 35 },
    '303': { id: '303', name: 'Classic Rock Anthems', genre: 'Rock', trackCount: 42 }
  };

  const playlist = mockPlaylists[params.playlistId] || {
    id: params.playlistId,
    name: 'Custom User Playlist',
    genre: 'Mixed',
    trackCount: 20
  };

  return {
    props: {
      playlist
    }
  };
}
```

---

### Question 5: Dynamic Flipkart Product Page Snippet
**Task:** Generate a code snippet for a Next.js dynamic route page that fetches and displays Flipkart product details based on `productId`, with a custom message.

**`src/pages/product/[productId].js`:**
```jsx
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

export default function ProductDetail({ product }) {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <div>
      <Navbar />
      <h1>Flipkart Product Portal</h1>
      <div>
        <p>
          <strong>Custom Message:</strong> Viewing Flipkart item details for Product ID: {productId || product.id}
        </p>
        <h2>Title: {product.title}</h2>
        <p>Price: ₹{product.price}</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { productId } = params;

  const product = {
    id: productId,
    title: `Flipkart Special Edition Item (${productId})`,
    price: 14999,
    category: 'Electronics'
  };

  return {
    props: {
      product
    }
  };
}
```
