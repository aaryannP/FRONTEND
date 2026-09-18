export default function Profile() {
  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <p className="text-gray-700">
        This is a protected page. If you are seeing this, you are authenticated!
      </p>
    </div>
  );
}
