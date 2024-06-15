import Product from "./Product.jsx";


function ProductTab() {
  let options = ["hi-tech", "durable", "fast"];
  return (
    <>
      <Product title="phone" price={30000} />
      <Product title="laptop" price={60000} />
      <Product title="pen" />
    </>
  );
}

export default ProductTab;