import Link from "next/link";
// import { resolve } from "path";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  //For delay 1 socnd to the loader which is main loader
  await new Promise((resolve)=> setTimeout(resolve, 1000))

  return res.json();
}

const ProductList = async () => {
  const products = await getData();

  // const products = [
  //   { id: 1, title: "Product 1" },
  //   { id: 2, title: "Product 2" },
  //   // Add more products as needed
  // ];

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} style={{ padding: "8px" }}>
            <Link href={`/products/${product.id}`}>Title : {product.title}</Link>
          </div>
        ))}
      </div>
      <Link href="/products/create">Create New Product</Link>
    </div>
  );
};

export default ProductList;
