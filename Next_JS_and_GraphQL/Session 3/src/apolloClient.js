import { ApolloClient, InMemoryCache, ApolloLink, Observable } from '@apollo/client';

// Mock data link for testing GraphQL queries in Session 3
const mockLink = new ApolloLink((operation) => {
  return new Observable((observer) => {
    const { operationName } = operation;

    setTimeout(() => {
      if (operationName === 'GetRestaurants') {
        observer.next({
          data: {
            restaurants: [
              { id: '1', name: 'Punjab Grill', cuisine: 'North Indian' },
              { id: '2', name: 'Toscano', cuisine: 'Italian' },
              { id: '3', name: 'Mainland China', cuisine: 'Chinese' },
              { id: '4', name: 'Brik Oven', cuisine: 'Pizza & Fast Food' }
            ]
          }
        });
      } else if (operationName === 'GetProducts') {
        observer.next({
          data: {
            products: [
              { id: '101', name: 'Nothing Phone (2a) 5G', price: 23999, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300' },
              { id: '102', name: 'Sony WH-1000XM5 Headphones', price: 29990, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300' },
              { id: '103', name: 'Apple Watch Series 9', price: 41900, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300' },
              { id: '104', name: 'MacBook Air M3', price: 114900, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300' }
            ]
          }
        });
      } else if (operationName === 'GetMovies') {
        observer.next({
          data: {
            movies: [
              { id: 'm1', title: 'Inception', releaseYear: 2010 },
              { id: 'm2', title: 'Interstellar', releaseYear: 2014 },
              { id: 'm3', title: 'The Dark Knight', releaseYear: 2008 }
            ]
          }
        });
      } else {
        observer.next({ data: {} });
      }
      observer.complete();
    }, 400);
  });
});

export const client = new ApolloClient({
  link: mockLink,
  cache: new InMemoryCache()
});
