import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import { FavoritesProvider } from "./FavoritesContext";
import { AuthProvider } from "./AuthContext";
import Header from "./Header";
import RestaurantList from "./RestaurantList";
import InstagramProfile from "./InstagramProfile";

export default function Session8App() {
  return (
    <ThemeProvider>
      {/* Task 4: Auth Provider added alongside Task 2 Providers */}
      <AuthProvider>
        <UserProvider>
          <FavoritesProvider>
            <div style={{ fontFamily: "sans-serif", minHeight: "100vh" }}>
              <Header />
              <main style={{ padding: "20px", textAlign: "center" }}>
                <RestaurantList />
                <hr style={{ margin: "40px 0" }} />
                <InstagramProfile />
              </main>
            </div>
          </FavoritesProvider>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
