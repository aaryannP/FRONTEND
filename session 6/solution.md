# Session 6: Introduction to Next.js & Server-Side Rendering (SSR) - Solutions

---

### Question 1 & Question 2: Homepage Setup (`src/pages/index.js`)
**Task:** Create a new Next.js project called `insta-feed` and replace default content with a homepage displaying 'Welcome to Insta Feed!' and your name.

**`src/pages/index.js`:**
```jsx
// Homepage for Insta Feed app
export default function Home() {
  return (
    <main style={{ padding: '3rem', fontFamily: 'system-ui, sans-serif', textAlign: 'center', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <h1 style={{ color: '#38bdf8', fontSize: '2.5rem' }}>Welcome to Insta Feed!</h1>
      <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>Created by: <strong style={{ color: '#f1f5f9' }}>Aryan Parmar</strong></p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/explore" style={{ color: '#a855f7', textDecoration: 'underline', fontSize: '1.1rem' }}>Go to Explore Page →</a>
      </div>
    </main>
  );
}
```

---

### Question 3: Trending Reels Page (`src/pages/explore.js`)
**Task:** Create `explore.js` displaying 'Explore Trending Reels' heading and an explanation of how SSR speeds up loading trending social media content.

**`src/pages/explore.js`:**
```jsx
// Explore page for Trending Reels
export default function Explore() {
  return (
    <main style={{ padding: '3rem 1.5rem', fontFamily: 'system-ui, sans-serif', maxWidth: '700px', margin: '0 auto', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh', borderRadius: '12px' }}>
      <h1 style={{ color: '#ec4899', fontSize: '2.2rem' }}>Explore Trending Reels</h1>
      <p style={{ lineHeight: '1.7', color: '#cbd5e1', fontSize: '1.1rem' }}>
        Server-side rendering (SSR) fetches trending reels directly on the server for each user request.
        By pre-rendering ready-to-view HTML before reaching the browser, social media apps like Insta Feed deliver instant content playback, eliminate client-side loading flashes, and allow search engines to crawl viral trends effortlessly.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/" style={{ color: '#38bdf8', textDecoration: 'none' }}>← Back to Home</a>
      </div>
    </main>
  );
}
```

---

### Question 4: Next.js vs Create React App Folder Structure & Routing
**Task:** List 3 differences in how routing and pages are handled between Next.js and Create React App (CRA).

**Comparison:**
1. **File-System Routing vs Manual Code Routes:**
   - *Next.js:* Automatically maps files inside `pages/` (or `app/`) to URL paths (e.g. `pages/explore.js` maps directly to `http://localhost:3000/explore`).
   - *CRA:* Requires installing third-party packages like `react-router-dom` and configuring manual route mappings (`<Route path="/explore" element={<Explore />} />`).
2. **Pre-rendering (SSR/SSG) vs Client-Only Execution (CSR):**
   - *Next.js:* Pre-renders full HTML pages on the server, serving static or server-rendered HTML files directly to browser clients.
   - *CRA:* Serves an empty HTML shell (`<div id="root"></div>`) that relies entirely on client-side JS bundle download and execution.
3. **Built-in API & App Lifecycle Conventions:**
   - *Next.js:* Provides built-in conventions like `_app.js` (global layout/style wrapper), `_document.js` (HTML head/body wrapper), and `pages/api/` for backend serverless API endpoints.
   - *CRA:* Has no built-in API folder or server lifecycle wrappers; all backend communication must hit external server URLs.

---

### Question 5: How SSR Improves SEO for Food Apps (e.g. Zomato)
**Task:** Explain in 3-4 lines how SSR improves SEO for Zomato compared to CSR.

**Explanation:**
1. **Immediate Web Crawler Indexing:** Next.js pre-renders complete HTML containing restaurant menus, titles, and reviews on the server so search engine bots crawl content instantly without waiting for JavaScript execution.
2. **Dynamic OpenGraph Meta Tags:** Server rendering generates custom dynamic meta tags (`<meta property="og:image" />`) for individual dishes, providing rich thumbnail previews on social shares.
3. **Higher Search Rankings:** Faster First Contentful Paint (FCP) eliminates blank loading screens, improving Core Web Vitals and boosting organic Google search rankings for local food queries.
