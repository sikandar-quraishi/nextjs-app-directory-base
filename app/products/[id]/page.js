"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

const ProductDetails = (props) => {
  const router = useRouter();

  console.log("router.query", props);
  const { id } = props.params;
  // console.log("id",id)

  // Fetch the specific product details using the `id` from the API

  const product = { id: 1, name: "Product 1", description: "Product description" };

  return (
    <div>
      ID : {id}
      <h1>Product Details</h1>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <Link href={`/products/edit/${id}`}>Edit Product</Link>
    </div>
  );
};

export default ProductDetails;
