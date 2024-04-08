import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './Checkout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../store/cart-context';
import CheckoutItem from './CheckoutItem/CheckoutItem';

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = (props) => {
    const ctx = useContext(CartContext);
    return (
        ReactDOM.createPortal(
            <div className={classes.checkout}>
                <div className={classes.close}>
                    <FontAwesomeIcon 
                    onClick={() => {props.onClose()}}
                    icon={faXmark}/>
                </div>
                <div className={classes.orderDetails}>
                    <header className={classes.header}>
                        <h1>Order Details</h1>
                    </header>
                    <div className={classes.orderList}>
                        {ctx.items.map(item=> <CheckoutItem
                        meal={item}
                        key={item.id}
                        />)}
                      
                    </div>
                    <footer className={classes.footer}>
                        <p className={classes.totalPrice}>{ctx.totalPrice}</p>
                    </footer>
                </div>
            </div>
            ,checkoutRoot)
    );
};

export default Checkout;