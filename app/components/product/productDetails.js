import Link from "next/link";

const ProductDetails = async ({ product }) => {
  return (
    <div>
      ID : {product.id}
      <h1>Product Details</h1>
      <p>Title: {product.title}</p>
      <p>Description: {product.body}</p>
      <Link href={`/product/edit/${product.id}`}>Edit Product</Link>
    </div>
  );
};

export default ProductDetails;
