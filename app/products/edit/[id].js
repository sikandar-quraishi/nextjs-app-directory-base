import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const EditProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // Fetch the product details using the `id` from the API
    // Update the local state with the fetched product data
    const product = { id: 1, name: 'Product 1', description: 'Product description' };
    setProductName(product.name);
    setProductDescription(product.description);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API to update the product using `productName` and `productDescription`
    // After successful update, navigate back to the product details page
    router.push(`/products/${id}`);
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
