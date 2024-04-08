import React, { useContext, useState } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import classes from './CartDetails.module.css';
import CartContext from '../../../store/cart-context';
import Meal from '../../Meals/Meal/Meal';
import Confirm from '../../UI/Confirm/Confirm';

const CartDetails = () => {
    const ctx = useContext(CartContext);
    const [showConfirm, setShowConfirm] = useState(false);
    const showConfirmHandler = () => {
        setShowConfirm(true);
    }

    const cancelBtnHandler = (e) => {
        setShowConfirm(false);
        e.stopPropagation();
    }

    const confirmBtnHandler = () => {
        ctx.clearCart()
    }
    return (
        <Backdrop>
            {showConfirm && <Confirm 
            onCancel={cancelBtnHandler}
            onConfirm={confirmBtnHandler}
            confirmText='Clear All Meals?'/>}
            <div onClick={(event) => {event.stopPropagation()}} className={classes.cartDetails}>
                <header className={classes.header}>
                    <h2 className={classes.title}>Meal Details</h2>
                    <div 
                    onClick={showConfirmHandler}
                    className={classes.clearAll}>
                    <FontAwesomeIcon icon={faTrash} />
                    <span>Clear All</span>
                    </div>
                </header>

                <div className={classes.mealList}>
                    {ctx.items.map(item => <Meal key={item.id} meal={item} noDesc={true}/>)}
                </div>
            </div>
        </Backdrop>
    );
};

export default CartDetails;