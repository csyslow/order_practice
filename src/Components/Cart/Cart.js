import React, { useContext } from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from '../../store/cart-context';
import CartDetails from './CartDetails/CartDetails';

const Cart = () => {
    const ctx = useContext(CartContext)
    return (
        <div className={classes.cart}>
            <CartDetails/>
            <div className={classes.bagIcon}>
                <img src={iconImg} alt="bag" />
                {(ctx.totalAmount === 0) ?
                    null :
                    <span className={classes.totalAmount}>{ctx.totalAmount}</span>
                }

            </div>
            {(ctx.totalAmount === 0) ?
                <p className={classes.noMeal}>Your Bag is Empty</p> :
                <p className={classes.totalPrice}>{ctx.totalPrice}</p>
            }

            
            <button className={`${classes.finishBtn} ${ ctx.totalAmount === 0 ? classes.disabled : ''}`}>Go To Payment</button>
        </div>
    );
};

export default Cart;