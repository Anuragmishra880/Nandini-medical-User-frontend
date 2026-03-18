import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import AppLayout from "./Components/Layout/AppLayout";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Category from "./Pages/Category/Category";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import About from "./Pages/About/About";
import { useDispatch } from "react-redux";
import {
  setError,
  setFeaturedMedicines,
  setLoading,
} from "./store/productSlice";
import { useEffect, useState } from "react";
import RegisterForm from "./Components/registerForm/RegisterForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import { getCurrentUser } from "./store/authAction";
import Checkout from "./Pages/OrderCheckout/OrderCheckout";

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
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/products/`);

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
