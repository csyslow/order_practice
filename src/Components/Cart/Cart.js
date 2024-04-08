import React, { useContext, useState } from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from '../../store/cart-context';
import CartDetails from './CartDetails/CartDetails';
import Checkout from '../Checkout/Checkout';

const Cart = () => {
    const ctx = useContext(CartContext)

    const [showDetails, setShowDetails] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false)

    const toggleDetailsHandler = () => {
        if (ctx.totalAmount === 0) {
            setShowDetails(false);
            return
        };
        setShowDetails(prevState => !prevState);
    }

    const showCheckoutHandler = () => {
        if(ctx.totalAmount === 0) return;
        setShowCheckout(true);
    }

    const closeCheckoutHandler = () => {
        setShowCheckout(false)
    }
    return (
        <div className={classes.cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onClose={closeCheckoutHandler}/>}
            {(showDetails) && <CartDetails/>}
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

            
            <button 
            className={`${classes.finishBtn} ${ ctx.totalAmount === 0 ? classes.disabled : ''}`}
            onClick={showCheckoutHandler}
            >Go To Payment</button>
        </div>
    );
};

export default Cart;