import ProductContext from '../context/productContext'
import useFetch from '../hooks/useFetch'
const url = 'https://fakestoreapi.com/products'; 

  


const ProductProvider = ({ children }) => {
  const { data } = useFetch(url);
 
  return (
    <ProductContext.Provider value={{ data }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider