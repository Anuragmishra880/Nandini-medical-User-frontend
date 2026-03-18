import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
    loading: true,
    error: null,
}
// const initialState = {
//     items: Array.isArray(JSON.parse(localStorage.getItem("cartItems"))) ? JSON.parse(localStorage.getItem("cartItems")) : [],
//     totalQuantity: JSON.parse(localStorage.getItem("cartQuantity")) || 0,
//     totalPrice: JSON.parse(localStorage.getItem("cartPrice")) || 0,
// };


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cartItems = action.payload
            state.totalQuantity = action.payload.reduce(
                (acc, item) => acc + item.quantity,
                0
            );
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})
export const { setCart, setLoading, setError } = cartSlice.actions
export default cartSlice.reducer