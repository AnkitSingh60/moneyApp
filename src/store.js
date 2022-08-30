import {configureStore} from '@reduxjs/toolkit'
import cartReducer from "./reduxToolkit/cartSlice"

const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
})

export default store;