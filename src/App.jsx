import { useEffect } from "react";
import { useState } from "react";

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
        <div>
          <h2>PRODUCT LIST</h2>
          <ul>
            {product?.map((item) => (
              <li key={item.id}>
                <figure>
                  <img src={item.image} alt={item.description} />
                </figure>
                <h3>{item.title}</h3>
                <h4>{item.category}</h4>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
