function CartSummary({ cartItems }) {
  return (
    <div>
      <h2>Cart Summary</h2>

      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>

          {cartItems.length >= 3 && (
            <button>Checkout Now</button>
          )}
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}

export default CartSummary;