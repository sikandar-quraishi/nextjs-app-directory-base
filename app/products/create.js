"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API to create the product using `productName` and `productDescription`
    // After successful creation, navigate back to the product list page or the new product's details page
    router.push("/products");
  };

  return (
    <div>
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </label>
        <label>
          Description:
          <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
        </label>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
