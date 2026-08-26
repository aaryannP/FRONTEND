import CountryList from './CountryList';
import './App.css';

export default function App() {
  return (
    <main className="app-main">
      <header className="app-header">
        <h1>React + Apollo Client GraphQL Demo</h1>
        <p>Session 2: Connecting to Countries GraphQL API</p>
      </header>
      <CountryList />
    </main>
  );
}
