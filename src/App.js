import "./App.css";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ListItems from "./components/ListItems";
import ProductContext from "./utils/ProductContext";
import CartContext from "./utils/CartContext";
import { useState } from "react";
import Cart from "./components/Cart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/list/:type",
        element: <ListItems />,
      },
      {
        path: "/details/:type/:id",
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartData: cartData,
        setCartData: setCartData,
      }}
    >
      <ProductContext.Provider
        value={{
          productData: productData,
          setProductData: setProductData,
        }}
      >
        <div className="">
          <RouterProvider router={appRouter}></RouterProvider>
        </div>
      </ProductContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
