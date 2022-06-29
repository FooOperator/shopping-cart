import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import catalogSlice from "./catalog/catalogSlice";

const rootReducer = {
    cart: cartSlice.reducer,
    catalog: catalogSlice.reducer
};

const configuredStore = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof configuredStore.dispatch;
export type RootState = ReturnType<typeof configuredStore.getState>;
export default configuredStore;