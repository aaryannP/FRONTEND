import { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>Smartphone</h2>

      <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
        -
      </button>

      <span> {quantity} </span>

      <button onClick={() => setQuantity(quantity + 1)}>
        +
      </button>
    </div>
  );
}

export default CartItem;