import React from 'react';
import classes from './CheckoutItem.module.css';
import Num from '../../UI/Num/Num';


const CheckoutItem = (props) => {
    return (
        <div className={classes.checkoutItems}>
            <div className={classes.mealsImg}>
                <img src={props.meal.img} alt="" />
            </div>
            <div className={classes.desc}>
                <h2 className={classes.title}>{props.meal.title}</h2>
                <div className={classes.priceOuter}>
                    <Num meal={props.meal}/>
                    <div className={classes.price}>{props.meal.price * props.meal.amount}</div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutItem;