import React, { useContext } from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from '../../store/cart-context';

const Cart = () => {
    const ctx = useContext(CartContext)
    return (
        <div className={classes.cart}>
            <div className={classes.bagIcon}>
                <img src={iconImg} alt="bag" />
                <span className={classes.totalAmount}>{ctx.totalAmount}</span>
            </div>

            <p className={classes.totalPrice}>{ctx.totalPrice}</p>
            <button className={classes.finishBtn}>Go To Payment</button>
        </div>
    );
};

export default Cart;