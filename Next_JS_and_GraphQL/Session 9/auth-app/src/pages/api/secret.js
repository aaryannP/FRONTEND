import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

// Protected API handler requiring valid session
export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  // Return 401 Unauthorized if no active session exists
  if (!session) {
    return res.status(401).json({
      error: '401 Unauthorized: Access denied. Please log in first.'
    });
  }

  // Success response for authenticated user
  return res.status(200).json({
    message: 'Access Granted: Welcome to the secret protected route!',
    user: session.user.name,
    timestamp: new Date().toISOString()
  });
}
