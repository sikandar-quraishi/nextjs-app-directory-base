"use client";

import Link from "next/link";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

const ProductDetails = async ({ params: { id } }) => {
  const product = await getData(id);

  // const product = { id: 1, title: "Product 1", description: "Product description" };

  return (
    <div>
      ID : {id}
      <h1>Product Details</h1>
      <p>Title: {product.title}</p>
      <p>Description: {product.body}</p>
      <Link href={`/products/edit/${id}`}>Edit Product</Link>
    </div>
  );
};

export default ProductDetails;
