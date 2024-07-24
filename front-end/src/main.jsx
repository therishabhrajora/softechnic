import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductsItemsContextProvider from "./store/Products-Store.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <ProductsItemsContextProvider>
//         <App />
//       </ProductsItemsContextProvider>
//     ),
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsItemsContextProvider>
        <App />
      </ProductsItemsContextProvider>
    </BrowserRouter>

    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
