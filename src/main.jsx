import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Dashboard from "./components/Dashboard/Dashboard";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import "@fontsource/sora";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { CartWishlistProvider } from "./components/CartWishlist/CartWishlistContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'statistics',
            element: <Statistics></Statistics>
        },
        {
            path: 'dashboard',
            element: <Dashboard></Dashboard>
        },
        {
            path: "/product/:productId", 
            element: <ProductDetails></ProductDetails>
        }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartWishlistProvider>
      <RouterProvider router={router} />
      </CartWishlistProvider>
  </React.StrictMode>
);
