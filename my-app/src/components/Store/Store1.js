import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
const Store = configureStore({
  reducer: { products: productSlice.reducer, cart: cartSlice.reducer },
});

export default Store;
