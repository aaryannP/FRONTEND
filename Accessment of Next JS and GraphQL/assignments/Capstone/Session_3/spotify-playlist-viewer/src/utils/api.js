/**
 * Task 4: Zomato API Helper Utility
 * Reads environment variables from process.env and logs configuration safely.
 */
export function printZomatoApiConfig() {
  const apiKey = process.env.NEXT_PUBLIC_ZOMATO_API_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_ZOMATO_API_URL;

  console.log('--- Zomato API Configuration ---');
  console.log('NEXT_PUBLIC_ZOMATO_API_KEY:', apiKey || 'Not Configured');
  console.log('NEXT_PUBLIC_ZOMATO_API_URL:', apiUrl || 'Not Configured');
  console.log('--------------------------------');

  return { apiKey, apiUrl };
}

export function printSpotifyApiConfig() {
  const spotifyKey = process.env.NEXT_PUBLIC_SPOTIFY_API_KEY;
  console.log('--- Spotify API Configuration ---');
  console.log('NEXT_PUBLIC_SPOTIFY_API_KEY:', spotifyKey || 'Not Configured');
  console.log('---------------------------------');
  return spotifyKey;
}
