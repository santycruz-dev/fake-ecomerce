import ItemCart from "./components/ItemCart";

const ProductList = () => {
  return (
    <div className="product-list">
      <h2 className="text-center font-bold text-2xl pb-4">PRODUCT LIST</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {product?.map((item) => (
          <ItemCart key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
