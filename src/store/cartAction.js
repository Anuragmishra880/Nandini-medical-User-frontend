import { useSelector } from "react-redux";
import { setCart, setLoading, setError } from "../store/cartSlice";

const fetchCart = () => async (dispatch) => {

  try {

    dispatch(setLoading(true));
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/cart/`,
      {
        credentials: "include",
      }
    )
    const result = await response.json()
    dispatch(setCart(result?.data?.items))
    dispatch(setLoading(false));
  }

  catch (error) {
    dispatch(setError(error.message));
  }
  finally {
    dispatch(setLoading(false));
  }
}

const AddToCart = (productId, quantity = 1) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/v1/cart/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ productId, quantity }),
      }
    );
    console.log(productId)
    dispatch(fetchCart());
  } catch (error) {
    dispatch(setError(error.message));
  }
  finally {
    dispatch(setLoading(false));
  }
};


const removeItem = (productId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/v1/cart/remove`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ productId }),
      }
    );

    dispatch(fetchCart());
  } catch (error) {
    dispatch(setError(error.message));
  }
  finally {
    dispatch(setLoading(false));
  }
}

const updateCartQty =
  (productId, quantity) => async (dispatch) => {
    try {
      dispatch(setLoading(true));

      await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/v1/cart/update`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ productId, quantity }),
        }
      );

      dispatch(fetchCart());
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

const clearCart = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/v1/cart/clear`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    dispatch(setCart([]));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
export { fetchCart, AddToCart, removeItem, updateCartQty, clearCart }