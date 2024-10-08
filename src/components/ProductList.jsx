
import { useContext } from "react";
import ItemCart from "../components/ItemCart";
import ProductContext from '../context/productContext'


const ProductList = () => {
  const {data } = useContext(ProductContext)

  return (
    <div className="product-list">
      <h2 className="pb-4 text-2xl font-bold text-center">PRODUCT LIST</h2>
      <ul className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((item) => (
          <ItemCart key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;