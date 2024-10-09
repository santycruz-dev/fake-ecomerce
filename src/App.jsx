
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>   
      <main className="max-w-screen-lg mx-auto">
        <NavBar />      
          <ProductList />        
      </main>   
    </>
  );
}


export default App;
