import { loginStart, loginSuccess, loginFailure } from "./authSlice";

export const getCurrentUser = () => async (dispatch) => {
  try {
    dispatch(loginStart());

    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/v1/users/me`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!res.ok) {
      throw new Error("Not authenticated");
    }

    const data = await res.json();

    dispatch(loginSuccess(data.data));
  } catch (error) {
    dispatch(loginFailure(null));
  }
};
