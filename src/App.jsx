
import ProductList from "./components/ProductList";
import ProductProvider from "./context/ProductProvider";


function App() {


  return (
    <>
      <main className="max-w-screen-lg mx-auto">
        <ProductProvider>
          <ProductList />
        </ProductProvider>
      </main>
    </>
  );
}

export default App;
