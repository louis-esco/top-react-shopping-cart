import App from "./App";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ItemsList from "./components/ItemsList/ItemsList";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,

        children: [
          {
            index: true,
            element: <Navigate to="/shop/electronics" replace />,
          },
          {
            path: ":category",
            element: <ItemsList />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
