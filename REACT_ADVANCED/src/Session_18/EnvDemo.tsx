const EnvDemo = () => {
  const spotifyKey = import.meta.env.VITE_SPOTIFY_API_KEY;
  const welcomeMsg = import.meta.env.VITE_WELCOME_MSG;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 my-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Session 18: Env Variables</h2>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Spotify API Key:</h3>
        <p className="text-gray-600 font-mono bg-gray-100 p-2 rounded mt-1 overflow-x-auto">
          {spotifyKey || 'No Key Found'}
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700">Welcome Message:</h3>
        <p className="text-gray-600 font-mono bg-blue-50 p-2 rounded mt-1 border border-blue-100">
          {welcomeMsg || 'No Message Found'}
        </p>
      </div>
    </div>
  );
};

export default EnvDemo;
