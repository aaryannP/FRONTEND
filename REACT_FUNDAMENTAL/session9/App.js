import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import HomePage from "./HomePage";
import DealsPage from "./DealsPage";
import CartPage from "./CartPage";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            marginRight: "15px",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/deals"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            marginRight: "15px",
          })}
        >
          Deals
        </NavLink>

        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
          })}
        >
          Cart
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;