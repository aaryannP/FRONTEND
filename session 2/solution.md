# Session 2: Setting Up Apollo Client & React Integration - Solutions

---

### Question 1
**Task:** Install `@apollo/client` and `graphql` in a new React app using npm, then verify the installation by importing `ApolloClient` from `@apollo/client` in `App.js` and logging it to the console.

**Command Executed:**
```bash
npm install @apollo/client graphql
```

**Verification Code (`src/apolloClient.js`):**
```javascript
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Initializing apollo client instance
export const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

// Logging client to verify installation
console.log("Apollo Client Instance:", client);
```

---

### Question 2
**Task:** Set up `ApolloClient` in your React project to connect to the public GraphQL endpoint `https://countries.trevorblades.com/` and configure `ApolloProvider` to wrap your `App` component.

**`src/main.jsx` Code:**
```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from './apolloClient';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
```

---

### Question 3
**Task:** Create and run a simple GraphQL query using Apollo Client’s `useQuery` hook to fetch and display the names of all countries from the countries GraphQL API.

**`src/CountryList.jsx` Code:**
```jsx
import { useQuery, gql } from '@apollo/client';

// GraphQL query to get list of countries
const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
      capital
    }
  }
`;

export default function CountryList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading countries data...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div>
      <h2>List of Countries</h2>
      <ul>
        {data.countries.map((country) => (
          <li key={country.code}>
            {country.emoji} {country.name} - Capital: {country.capital || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### Question 4
**Task:** Explain in your own words the role of `ApolloProvider` in a React app and how it uses React Context to provide GraphQL data to child components.

**Explanation:**
1. **Centralized Client Access:** `ApolloProvider` works like React's Context Provider (`React.createContext`). It receives the `ApolloClient` instance as a prop (`client={client}`).
2. **Component Tree Availability:** By wrapping the top-level `<App />` component with `<ApolloProvider>`, Apollo Client's cache, query engine, and HTTP link become accessible anywhere in the component hierarchy.
3. **Hook Consumption:** Hooks like `useQuery` or `useMutation` placed inside nested child components automatically read the active `ApolloClient` from context without needing to manually pass `client` as a prop through multiple levels (avoiding prop drilling).

---

### Question 5
**Task:** Modify your previous code to display a loading message while the query is fetching data and an error message if the query fails.

**Conditional Rendering Logic in `src/CountryList.jsx`:**
```jsx
export default function CountryList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  // 1. Loading state condition
  if (loading) {
    return <p className="status-msg">Loading countries data...</p>;
  }

  // 2. Error state condition
  if (error) {
    return <p className="status-msg error-msg">Error loading data: {error.message}</p>;
  }

  // 3. Success state: render list
  return (
    <div className="country-container">
      <h2>List of Countries ({data.countries.length})</h2>
      <ul className="country-grid">
        {data.countries.map((country) => (
          <li key={country.code} className="country-card">
            <span className="flag">{country.emoji}</span>
            <div className="details">
              <strong>{country.name}</strong>
              <small>Capital: {country.capital || 'N/A'}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
```
