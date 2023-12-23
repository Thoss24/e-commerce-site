
import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

//import About from "./routes/about/AboutPage";
// import ProductPage from "./routes/products/ProductPage";
// import ContactPage from "./routes/contact/ContactPage";
// import ProductDetailsPage from "./routes/products/ProductDetailsPage";
import AppRoot from "./routes/app_root/AppRoot";
//import ErrorPage from "./components/error/ErrorPage";
//import Wishlist from "./routes/wishlist/Wishlist";

import { useEffect, lazy, Suspense } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { useQuery } from "@tanstack/react-query";
import { fetchCartItems } from "./store/cart_actions";
import { cartActions } from "./store/cart_slice";
import { wishlistActions } from "./store/wishlist_slice";
import { fetchWishlistItems } from "./store/wishlist_actions";

const Wishlist = lazy(() => import('./routes/wishlist/Wishlist'));
const ErrorPage = lazy(() => import('./components/error/ErrorPage'));
const About = lazy(() => import('./routes/about/AboutPage'));
const ProductPage = lazy(() => import('./routes/products/ProductPage'));
const ContactPage = lazy(() => import('./routes/contact/ContactPage'));
const ProductDetailsPage = lazy(() => import('./routes/products/ProductDetailsPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <Suspense><ErrorPage /></Suspense>,
    children: [
      {
        index: true,
        element: <Suspense fallback={<p>Loading...</p>}><About /></Suspense>,
      },
      {
        path: "/products",
        element: <Suspense fallback={<p>Loading...</p>}><ProductPage /></Suspense>,
      },
      {
        path: "/products/:id",
        element: <Suspense fallback={<p>Loading...</p>}><ProductDetailsPage /></Suspense>
      },
      {
        path: "/contact",
        element: <Suspense fallback={<p>Loading...</p>}><ContactPage /></Suspense>,
      },
      {
        path: "/wishlist",
        element: <Suspense fallback={<p>Loading...</p>}> <Wishlist /></Suspense>
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
