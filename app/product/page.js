import ProductList from "../components/product/productList";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //For delay 1 socnd to the loader which is main loader
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.json();
}

const Page = async () => {
  const products = await getData();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Page;
