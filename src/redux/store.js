import { combineSlices, configureStore } from "@reduxjs/toolkit";
import authReducer from "@redux/slices/authSlice";

const rootReducer = combineSlices({
    auth: authReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
