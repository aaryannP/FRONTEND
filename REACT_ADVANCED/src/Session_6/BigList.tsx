import { useEffect, useMemo, useState } from "react";

const generateProducts = () => {
  const data = [];
  for (let i = 1; i <= 1000; i++) {
    data.push({
      id: i,
      name: `Product ${i}`,
      price: (Math.random() * 100).toFixed(2)
    });
  }
  return data;
};

export default function BigList() {
  const [products, setProducts] = useState(generateProducts());
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.timeEnd("Render Time");
  });

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  console.time("Render Time");

  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredProducts.map((product) => 
        <div key={product.id}>
          <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      )}
    </div>
  );
}
