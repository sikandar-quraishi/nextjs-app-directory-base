import Link from "next/link";

const ProductList = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </div>
        ))}
      </div>
      <Link href="/products/create">
        Create New Product
      </Link>
    </div>
  );
};

export default ProductList;
