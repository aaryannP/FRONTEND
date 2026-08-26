import { createYoga, createSchema } from 'graphql-yoga';

// GraphQL Schema for Post entity
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

// Static list of 3 sample news posts
const staticPosts = [
  {
    id: 'post-101',
    title: 'Next.js 15 Released with Improved Turbopack Speed',
    content: 'The Vercel team has announced Next.js 15, featuring faster server compilation, improved App Router caching semantics, and enhanced React 19 Server Actions integration across production builds.',
    author: 'Aryan Parmar',
    createdAt: '2026-08-26'
  },
  {
    id: 'post-102',
    title: 'GraphQL Yoga 5 Simplifies Microservice Architectures',
    content: 'GraphQL Yoga 5 introduces effortless HTTP caching headers, defer/stream directives, and automatic schema stitching tools designed for modern Node.js edge runtime deployments.',
    author: 'Tech Desk',
    createdAt: '2026-08-25'
  },
  {
    id: 'post-103',
    title: 'AI Summarization Becoming Standard in Social Platforms',
    content: 'Social media networks are rapidly adopting generative AI APIs to summarize multi-page articles into concise 2-sentence previews, dramatically boosting reader engagement.',
    author: 'AI Insider',
    createdAt: '2026-08-24'
  }
];

const resolvers = {
  Query: {
    posts: () => staticPosts
  }
};

export const config = {
  api: {
    bodyParser: false
  }
};

export default createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: '/api/graphql'
});
