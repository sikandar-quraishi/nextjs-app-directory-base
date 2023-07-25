"use client";
import { useState } from "react";
// import { useRouter } from "next/navigation";


const EditForm = ({ product }) => {
  const {id, title, body } = product;
  // const router = useRouter();

  const [productName, setProductName] = useState(title);
  const [productDescription, setProductDescription] = useState(body);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API to update the product using `productName` and `productDescription`
    // After successful update, navigate back to the product details page
    router.push(`/product/${id}`);
  };

  return (
    <div>
      <h1>Edit Product with Id : {id}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditForm;
