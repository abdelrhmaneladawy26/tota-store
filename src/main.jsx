import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import AllCategoryPage from "./pages/Category/AllCategoryPage.jsx";
import AllBrandPage from "./pages/Brand/AllBrandPage.jsx";
import ShopProductPage from "./pages/Products/ShopProductPage.jsx";
import ProductDetailsPage from "./pages/Products/ProductDetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/allCategory", element: <AllCategoryPage /> },
      { path: "/allBrand", element: <AllBrandPage /> },
      { path: "/products", element: <ShopProductPage /> },
      { path: "/products/:id", element: <ProductDetailsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
