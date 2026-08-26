import ProductCard from "./ProductCard";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div>
      <ProductCard productName="iPhone 16" price={79999} />

      <UserProfile
        username="Aryan Parmar"
        followers={1200}
        profilePic="https://picsum.photos/150"
      />

      {/* Default Props Example */}
      <UserProfile username="Guest User" />
    </div>
  );
}

export default App;