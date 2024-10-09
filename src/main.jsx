
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import ProductDetail from './components/ProductDetail.jsx';
import ProductProvider from "./context/ProductProvider";


const route = createBrowserRouter(
  createRoutesFromElements(
    [<Route
      path="/"
      element={<App />}
    />,
    <Route
      path="/products/:id"
      element={<ProductDetail />}
    />]
  )
)

createRoot(document.getElementById('root')).render(

  <ProductProvider>
    <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </ProductProvider>
)
