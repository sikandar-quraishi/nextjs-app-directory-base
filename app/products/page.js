import Link from 'next/link';

const ProductList = () => {
  // Fetch products data from API using `fetch` or `axios`

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/products/create">
        Create New Product
      </Link>
    </div>
  );
};

export default ProductList;
