import { useFetchData } from "./useFetchData";

export default function FlipkartProductList() {
  const { data, loading, error } = useFetchData("https://fakestoreapi.com/products");

  if (loading) return <div>Loading products...</div>;
  
  if (error) return <div>Error: {error}</div>;

  console.log(data);

  return (
    <div>
      <h2>Flipkart Products</h2>
      {data.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
}
