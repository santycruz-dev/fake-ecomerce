import productContext from "./productContext"

const ProductProvider = ({children}) => {
  return (
    <productContext.Provider>
        {children}
    </productContext.Provider>
  )
}

export default ProductProvider