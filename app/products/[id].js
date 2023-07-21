import { useRouter } from 'next/router';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the specific product details using the `id` from the API

  const product = { id: 1, name: 'Product 1', description: 'Product description' };

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <Link href={`/products/edit/${product.id}`}>
        <a>Edit Product</a>
      </Link>
    </div>
  );
};

export default ProductDetails;
