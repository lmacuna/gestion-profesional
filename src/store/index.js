import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/users/index.js";
import empleos from "./slices/empleos/index.js";

export default configureStore({
    reducer:{
        user,
        empleos,
    }
});