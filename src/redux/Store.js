import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
// import CartSlice.reducer not the CartSlice

export const store = configureStore({
    reducer:{
        cart:CartSlice,
    }
})
