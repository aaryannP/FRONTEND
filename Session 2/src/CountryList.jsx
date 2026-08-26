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

  // Showing loading state while fetching
  if (loading) return <p className="status-msg">Loading countries data...</p>;

  // Showing error message if query fails
  if (error) return <p className="status-msg error-msg">Error loading data: {error.message}</p>;

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
