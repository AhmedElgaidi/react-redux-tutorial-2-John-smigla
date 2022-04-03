// Let's make this file for all our reducers. So, we can combine them in the store

//========= Our Imports ===========
import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";


// Let's define our Root Reducer
const  rootReducer = combineReducers({
    cart: cartReducer
});

export default rootReducer;