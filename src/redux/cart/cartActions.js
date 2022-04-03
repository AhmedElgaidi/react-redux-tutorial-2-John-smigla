//=========== Our imports ================
import {
    REMOVE,
    INCREASE,
    DECREASE,
    TOGGLE_AMOUNT
} from "./cartTypes";

//=========== Actions ================

export const removeItem = id => {
    return { 
        type: REMOVE, 
        payload: { 
            id 
        }
    }
}

export const increaseItem = id => {
    return { 
        type: INCREASE, 
        payload: { 
            id 
        }
    }   
}

export const decreaseItem = (id, amount) => {
    return { 
        type: DECREASE, 
        payload: { 
            id, 
            amount 
        } 
    }
}

export const toggleItem = (id, toggle) => {
    return { 
        type: TOGGLE_AMOUNT, 
        payload: { 
            id, 
            toggle 
        } 
    }
}