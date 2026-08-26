import { useState } from "react";

function SearchBar() {
  const [product, setProduct] = useState("");

  return (
    <div>
      <h2>Search Product</h2>

      <input
        type="text"
        placeholder="Enter product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />

      <p>Current Search: {product}</p>
    </div>
  );
}

export default SearchBar;