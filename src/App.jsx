import { useEffect } from "react";
import { useState } from "react";
import ItemCart from "./components/ItemCart";

const allProductURL = "https://fakestoreapi.com/products";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(allProductURL)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <main>
        <div className="product-list">
          <h2 className="text-center font-bold text-2xl pb-4">PRODUCT LIST</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
            {product?.map((item) => (
              <ItemCart key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
