import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice'
import cartReducer from "./cartSlice";
import authReducer from './authSlice'
const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        cart: cartReducer
    }
})
export default store