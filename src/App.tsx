// css
import "./App.css";
// third party imports
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
// components
import About from "./routes/about/AboutPage";
import ProductPage from "./routes/products/ProductPage";
import ContactPage from "./routes/contact/ContactPage";
import ProductDetailsPage from "./routes/products/ProductDetailsPage";
import AppRoot from "./routes/app_root/AppRoot";
import ErrorPage from "./components/error/ErrorPage";
import Wishlist from "./routes/wishlist/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailsPage />
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
