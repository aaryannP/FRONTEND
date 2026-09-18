import { UserProvider, useUser } from "./UserContext";

export default function Teleporter() {
  const user = { name: "Kanis", isVIP: true };

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>App Level</h2>
      <UserProvider value={user}>
      <Feed />
      </UserProvider>
    </div>
  );
}

function Feed() {
  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h3>Feed Level</h3>
      <Post />
    </div>
  );
}

function Post() {
  return (
    <div style={{ border: "2px solid orange", padding: "10px" }}>
      <h4>Post Level</h4>
      <p>Look at this cool post!</p>
      <LikeButton />
    </div>
  );
}

function LikeButton() {
  const user = useUser();

  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <button>
        {user.isVIP ? "🌟 VIP Like" : "👍 Regular Like"} as {user.name}
      </button>
    </div>
  );
}
