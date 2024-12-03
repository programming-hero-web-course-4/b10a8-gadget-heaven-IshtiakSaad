import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
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
import CustomerService from "./components/CustomerService/CustomerService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "service",
        element: <CustomerService />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartWishlistProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </CartWishlistProvider>
  </React.StrictMode>
);
