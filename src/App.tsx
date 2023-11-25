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
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { useQuery } from "@tanstack/react-query";
import { fetchCartItems } from "./store/cart_actions";
import { cartActions } from "./store/cart_slice";
import { wishlistActions } from "./store/wishlist_slice";
import { fetchWishlistItems } from "./store/wishlist_actions";

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

  const dispatch = useAppDispatch();

  const { data: cartData } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCartItems
  });

  const { data: wishListData } = useQuery({
    queryKey: ['wishlist'],
    queryFn: fetchWishlistItems
  });

  useEffect(() => {
    dispatch(cartActions.replaceCart(cartData))
  }, [cartData, dispatch]);

  useEffect(() => {
    dispatch(wishlistActions.replaceWishlist(wishListData))
  }, [wishListData]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
