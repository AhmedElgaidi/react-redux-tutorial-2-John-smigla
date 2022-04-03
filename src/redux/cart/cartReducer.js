//============= Our Imports ====================
import {
    INCREASE,
    DECREASE,
    CLEAR_CART,
    REMOVE,
    GET_TOTALS,
    TOGGLE_AMOUNT
} from './cartTypes';
import cartItems from '../../cart.item';

//============= Initial State ==============
const initialState = {
    cart: cartItems,
    amount: 0,
    total: 0
}

//============= Reducer ====================

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        // (1)
        case INCREASE:
            return {
                ...state,// slice is for just making copy of array
                cart: state.cart.slice().map(cartItem => {
                    if(cartItem.id === action.payload.id) {
                        cartItem = {
                            ...cartItem,//copy
                            amount: cartItem.amount + 1
                        }
                    }
                    return cartItem;
                })
            }
        // (2)
        case DECREASE:
            return {
                ...state,// slice is for just making copy of array
                cart: state.cart.slice().map(cartItem => {
                    if(cartItem.id === action.payload.id) {
                        cartItem = {
                            ...cartItem,//copy
                            amount: cartItem.amount - 1
                        }
                    }
                    return cartItem;
                })
            }
        // (3)
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        // (4)
        // case REMOVE:
        //     return {
        //         ...state,
        //         cart: state.cart.slice().filter(cartItem => {
        //             cartItem.id !== action.payload.id;
        //         })
        //     }
        // (5)
        case GET_TOTALS:
            // let's destructure the state and calc the total and amount from it
            let { total, amount } = state.cart.slice().reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount; // 3 laptops * 2000$

                // update properties
                cartTotal.total += itemTotal;
                cartTotal.amount += amount;

                return cartTotal;
            }, {
                // initial values
                total: 0,
                amount: 0
            });

            total = total.toFixed(2);
            return {
                ...state,
                total,
                amount
            }
        // (6)
        case TOGGLE_AMOUNT:// just a alternative cleaner way for INCREASE, DECREASE actions 
            return {
                ...state,
                cart: state.cart.slice().map(cartItem => {
                    if(cartItem.id === action.payload.id) {
                        if(action.payload.toggle === 'inc') {
                            return {
                                cartItem: {
                                    ...cartItem,
                                    amount: cartItem.amount + 1
                                }
                            }
                        } else if(action.paylod.toggle === 'dec') {
                            return {
                                cartItem: {
                                    ...cartItem,
                                    amount: cartItem.amount - 1
                                }
                            }
                        }
                    }

                    return cartItem;
                })
            }
        // Default
        default: 
            return state;
    }
};

export default cartReducer;