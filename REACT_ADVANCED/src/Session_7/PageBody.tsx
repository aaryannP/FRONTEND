import { PostCard } from './PostCard';

// This acts as Level 2 nesting
export function PageBody() {
  return (
    <main style={{ padding: '2rem' }}>
      <p>Welcome to the main content area. Below is our post.</p>
      <PostCard />
    </main>
  );
}
