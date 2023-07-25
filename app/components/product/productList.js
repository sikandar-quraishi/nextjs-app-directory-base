import Link from "next/link";

const ProductList = async ({ products }) => {
  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ padding: "8px" }}>
            <Link href={`/product/${product.id}`}>Title : {product.title}</Link>
          </div>
        ))}
      </div>
      <Link href="/product/create">Create New Product</Link>
    </div>
  );
};

export default ProductList;
