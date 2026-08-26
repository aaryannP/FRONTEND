import Playlist from "./Playlist";
import OrderStatus from "./OrderStatus";
import FollowerList from "./FollowerList";
import CartSummary from "./CartSummary";

function App() {
  const songs = [
    { title: "Calm Down", artist: "Rema" },
    { title: "Perfect", artist: "Ed Sheeran" },
    { title: "Blinding Lights", artist: "The Weeknd" }
  ];

  const followers = ["Rahul", "Ayan", "Riya"];

  const cartItems = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
  ];

  return (
    <div>
      <Playlist songs={songs} />

      <OrderStatus isDelivered={true} />

      <FollowerList followers={followers} />

      <CartSummary cartItems={cartItems} />
    </div>
  );
}

export default App;