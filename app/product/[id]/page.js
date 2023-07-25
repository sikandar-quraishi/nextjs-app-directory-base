import ProductDetails from "../../components/product/productDetails";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

const Page = async ({ params: { id } }) => {
  const product = await getData(id);

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default Page;
