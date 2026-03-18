import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import MedicineContextProvider from "./Context/MedicineContextProvider";
// import { CartDetailsContextProvider } from "./Context/CartDetailsContextProvider.jsx";
import { Provider, useDispatch } from "react-redux";
import store from "./store/store";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <MedicineContextProvider>
      <CartDetailsContextProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </CartDetailsContextProvider>
    </MedicineContextProvider> */}
  </StrictMode>
);
