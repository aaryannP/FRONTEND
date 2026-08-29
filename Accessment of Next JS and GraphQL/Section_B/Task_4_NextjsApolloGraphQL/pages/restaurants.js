import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { initializeApollo } from '../lib/apolloClient';

// Requirement: GET_USERS query (id, name, email) to fetch users as mock restaurant data
export const GET_USERS = gql`
  query GetUsers {
    users {
      data {
        id
        name
        email
        company {
          name
        }
      }
    }
  }
`;

export default function RestaurantsPage() {
  // Requirement: Use useQuery hook to fetch restaurant data
  const { data, loading, error } = useQuery(GET_USERS);

  return (
    <div className="container">
      <header className="header">
        <h1>Task 4: Next.js + Apollo GraphQL</h1>
        <p>Pre-rendered at build time via getStaticProps & ssrMode</p>
      </header>

      {/* Requirement: Display loading spinner while query is in flight */}
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Executing GraphQL query...</p>
        </div>
      )}

      {/* Requirement: Display error banner with error message if query fails */}
      {error && (
        <div className="error-banner">
          <span className="error-icon">🚨</span>
          <div>
            <strong>GraphQL Query Failed</strong>
            <p>{error.message}</p>
          </div>
        </div>
      )}

      {/* Requirement: Map over results to render a name-and-email card for each */}
      {!loading && !error && data?.users?.data && (
        <div className="grid">
          {data.users.data.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <div className="badge">GraphQL Partner</div>
              <h3 className="name">{restaurant.name}</h3>
              <p className="email">📧 {restaurant.email}</p>
              {restaurant.company?.name && (
                <p className="company">🏢 {restaurant.company.name}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Requirement: Implement getStaticProps to fetch restaurant data at build time using Apollo's ssrMode
export async function getStaticProps() {
  const apolloClient = initializeApollo(true); // isServer = true (ssrMode)

  try {
    // Pre-fetch query on server during build time
    await apolloClient.query({
      query: GET_USERS,
    });

    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
      revalidate: 86400, // Revalidate once per day (24h)
    };
  } catch (err) {
    console.error('Error pre-rendering GraphQL data:', err);
    return {
      props: {
        initialApolloState: {},
      },
    };
  }
}
