//============ Our Imports ===============
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { CLEAR_CART, GET_TOTALS } from '../redux/cart/cartTypes';


//============ Component ===============
const CartContainer = ({ cart = [], total, dispatch }) => {
    useEffect(() => {
        dispatch({ type: GET_TOTALS });   
    }, [cart, dispatch]);// only render if those changes


    // Cart is empty:
    if (cart.length < 1) {
        return (
            <section className='cart'>
            <header>
                <h2>your bag</h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
            </section>
        );
    }
    // There are items:
    return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cart.map((item) => {
                    // pass all the item obj as prop to the CartItem component
                    return <CartItem key={item.id} { ...item } />
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                    total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={() => dispatch({ type: CLEAR_CART })}>
                    Clear Cart
                </button>
            </footer>
        </section>
    );
}

const mapStateToProps = store => {
    // let's destructure the store object
    const { cart, total } = store;

    return { 
        cart, 
        total 
    }
}

export default connect(mapStateToProps)(CartContainer);