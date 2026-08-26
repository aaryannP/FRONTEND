import PropTypes from "prop-types";

function ProductCard(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h2>{props.productName}</h2>
      <p>Price: ₹{props.price}</p>
    </div>
  );
}

ProductCard.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;