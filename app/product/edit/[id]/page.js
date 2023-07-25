import EditForm from "../../../components/product/editForm";

async function getDataById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

const EditProduct = async ({ params: { id } }) => {
  const product = await getDataById(id);

  return (
    <div>
      <EditForm product={product} />
    </div>
  );
};

export default EditProduct;
