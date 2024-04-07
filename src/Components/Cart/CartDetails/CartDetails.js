import React, { useContext } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import classes from './CartDetails.module.css';
import CartContext from '../../../store/cart-context';
import Meal from '../../Meals/Meal/Meal';

const CartDetails = () => {
    const ctx = useContext(CartContext);

    return (
        <Backdrop>
            <div className={classes.cartDetails}>
                <header className={classes.header}>
                    <h2 className={classes.title}>Meal Details</h2>
                    <div className={classes.clearAll}>
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