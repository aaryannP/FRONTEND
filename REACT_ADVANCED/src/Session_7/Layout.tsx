import { Navbar } from './Navbar';
import { PageBody } from './PageBody';

// This acts as Level 1 nesting
export function Layout() {
  return (
    <div>
      <Navbar />
      <PageBody />
    </div>
  );
}
