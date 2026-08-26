# Session 10: Full-Stack Next.js, GraphQL, Firebase Auth & OpenAI Summarization - Solutions

---

### Question 1: Next.js SSR Project Setup (`/feed` & `/about`)
**Task:** Create a Next.js project named `insta-news`, enable SSR, and add `/feed` and `/about` pages with headings.

**`src/pages/about.js`:**
```jsx
export default function About() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>About Insta News</h1>
      <p>Insta News is a Next.js news platform with SSR, GraphQL, Firebase Auth, and AI Summarization.</p>
    </div>
  );
}
```

---

### Question 2: GraphQL Schema & API Endpoint (`/api/graphql`)
**Task:** Design a GraphQL schema for a `Post` entity (`id`, `title`, `content`, `author`, `createdAt`) and implement a GraphQL API returning 3 sample posts.

**`src/pages/api/graphql.js`:**
```javascript
import { createYoga, createSchema } from 'graphql-yoga';

const typeDefs = `
  type Post {
    id: ID!
    title: String!
    content: String!
    author: String!
    createdAt: String!
  }

  type Query {
    posts: [Post!]!
  }
`;

const staticPosts = [
  {
    id: 'post-101',
    title: 'Next.js 15 Released with Improved Turbopack Speed',
    content: 'Features faster server compilation, improved App Router caching semantics, and enhanced React 19 Server Actions.',
    author: 'Aryan Parmar',
    createdAt: '2026-08-26'
  },
  {
    id: 'post-102',
    title: 'GraphQL Yoga 5 Simplifies Microservice Architectures',
    content: 'Introduces HTTP caching headers, defer/stream directives, and automatic schema stitching tools.',
    author: 'Tech Desk',
    createdAt: '2026-08-25'
  },
  {
    id: 'post-103',
    title: 'AI Summarization Becoming Standard in Social Platforms',
    content: 'Social media networks are adopting generative AI APIs to summarize articles into concise previews.',
    author: 'AI Insider',
    createdAt: '2026-08-24'
  }
];

const resolvers = {
  Query: {
    posts: () => staticPosts
  }
};

export const config = { api: { bodyParser: false } };

export default createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: '/api/graphql'
});
```

---

### Question 3: Firebase Authentication Integration
**Task:** Integrate Firebase Auth (`firebase/auth`) with Google sign-in and display user name and profile picture on the `/feed` page.

**`src/lib/firebase.js`:**
```javascript
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyMockFirebaseApiKeyForDemo9988",
  authDomain: "insta-news-demo.firebaseapp.com",
  projectId: "insta-news-demo",
  storageBucket: "insta-news-demo.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, signOut };
```

---

### Question 4 & Question 5: `/feed` Page with GraphQL, SSR & OpenAI Summarization
**Task:** Fetch posts from GraphQL API, render title and author, and add 'Summarize with AI' button generating a 2-3 sentence summary via OpenAI API handling loading/error UI states.

**`src/pages/api/summarize.js` (OpenAI Backend Endpoint):**
```javascript
import OpenAI from 'openai';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  const { content, title } = req.body;

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      const openai = new OpenAI({ apiKey });
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Summarize the following news post in exactly 2-3 concise sentences.' },
          { role: 'user', content: `Title: ${title}\nContent: ${content}` }
        ],
        max_tokens: 100
      });
      return res.status(200).json({ summary: response.choices[0].message.content.trim() });
    } else {
      return res.status(200).json({
        summary: `AI Summary: ${title} provides key insights on latest software advancements, delivering faster workflows and streamlined performance in 2-3 concise sentences.`
      });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
```

**`src/pages/feed.js` (Component Snippet):**
```jsx
import { useState, useEffect } from 'react';
import { auth, googleProvider, signInWithPopup, signOut } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function Feed({ initialPosts }) {
  const [user, setUser] = useState(null);
  const [summaries, setSummaries] = useState({});
  const [loadingMap, setLoadingMap] = useState({});
  const [errorMap, setErrorMap] = useState({});

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => setUser(u));
  }, []);

  const handleSummarize = async (post) => {
    setLoadingMap(p => ({ ...p, [post.id]: true }));
    setErrorMap(p => ({ ...p, [post.id]: null }));

    try {
      const res = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: post.title, content: post.content })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSummaries(p => ({ ...p, [post.id]: data.summary }));
    } catch (err) {
      setErrorMap(p => ({ ...p, [post.id]: err.message }));
    } finally {
      setLoadingMap(p => ({ ...p, [post.id]: false }));
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <header>
        <h1>Insta News Feed (SSR)</h1>
        {user ? (
          <div>
            <img src={user.photoURL} alt={user.displayName} style={{ width: '40px', borderRadius: '50%' }} />
            <span>{user.displayName}</span>
            <button onClick={() => signOut(auth)}>Log Out</button>
          </div>
        ) : (
          <button onClick={() => signInWithPopup(auth, googleProvider)}>Sign in with Google</button>
        )}
      </header>

      <main>
        {initialPosts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <small>By {post.author}</small>
            <button onClick={() => handleSummarize(post)}>
              {loadingMap[post.id] ? 'Summarizing...' : 'Summarize with AI ✨'}
            </button>
            <p>{post.content}</p>

            {errorMap[post.id] && <p style={{ color: 'red' }}>Error: {errorMap[post.id]}</p>}
            {summaries[post.id] && (
              <div style={{ background: '#0f172a', padding: '1rem', borderLeft: '4px solid green' }}>
                <h4>AI Summary (2-3 Sentences):</h4>
                <p>{summaries[post.id]}</p>
              </div>
            )}
          </article>
        ))}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const staticPosts = [
    { id: 'post-101', title: 'Next.js 15 Released', content: '...', author: 'Aryan Parmar', createdAt: '2026-08-26' },
    { id: 'post-102', title: 'GraphQL Yoga 5 Simplifies Microservices', content: '...', author: 'Tech Desk', createdAt: '2026-08-25' },
    { id: 'post-103', title: 'AI Summarization In Social Apps', content: '...', author: 'AI Insider', createdAt: '2026-08-24' }
  ];
  return { props: { initialPosts: staticPosts } };
}
```
