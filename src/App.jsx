import { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import AppLayout from "./Components/Layout/AppLayout";

const Home = lazy(() => import("./Pages/Home/Home"));
const Shop = lazy(() => import("./Pages/Shop/Shop"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Category = lazy(() => import("./Pages/Category/Category"));
const Cart = lazy(() => import("./Pages/Cart/Cart"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage/ErrorPage"));
const ProductDetails = lazy(
  () => import("./Pages/ProductDetails/ProductDetails"),
);
const About = lazy(() => import("./Pages/About/About"));
const RegisterForm = lazy(
  () => import("./Components/registerForm/RegisterForm"),
);
const LoginForm = lazy(() => import("./Components/LoginForm/LoginForm"));
const Checkout = lazy(() => import("./Pages/OrderCheckout/OrderCheckout"));
import { useDispatch } from "react-redux";
import {
  setError,
  setFeaturedMedicines,
  setLoading,
} from "./store/productSlice";

import { getCurrentUser } from "./store/authAction";
import ShimmerCard from "./Components/UI/ShimmerCard";

function App() {
  const dispatch = useDispatch();
  const [searchMedicine, setSearchMedicine] = useState();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BASE_URL}/api/v1/products/`,
        );

        // 👉 Server response check
        if (!response.ok) {
          throw new Error("Backend server not responding");
        }

        const result = await response.json();

        dispatch(setFeaturedMedicines(result?.featuredMedicines || []));
      } catch (err) {
        console.log("Fetch Error:", err.message);

        dispatch(
          setError(
            err.message === "Failed to fetch"
              ? "Backend server is not running"
              : err.message,
          ),
        );
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout setSearchMedicine={setSearchMedicine} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home searchMedicine={searchMedicine} />,
        },
        {
          path: "/shop",
          element: <Shop searchMedicine={searchMedicine} />,
        },
        {
          path: "/categories/:category",
          element: <Category />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order-checkout",
          element: <Checkout />,
        },
        {
          path: "/product-Details/:id",
          element: <ProductDetails />,
        },
        {
          path: "/register",
          element: <RegisterForm />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
      ],
    },
  ]);

  return (
    <div className="my-container">
      <Suspense fallback={<ShimmerCard />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
