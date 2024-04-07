import React from 'react';
import classes from './Meal.module.css'
import Num from '../../UI/Num/Num';

const Meal = (props) => {
    return (
        <div className={classes.meal}>
            <div className={classes.imgBox}>
                <img src={props.meal.img} />
            </div>
            <div className={classes.descBox}>
                <p className={classes.title}>{props.meal.title}</p>
                {props.noDesc ? 
                null :
                <p className={classes.desc}>{props.meal.desc}</p>}
                
                <div className={classes.priceWrapper}>
                    <span className={classes.price}>{props.meal.price}</span>
                    <Num meal={props.meal}/>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Meal;