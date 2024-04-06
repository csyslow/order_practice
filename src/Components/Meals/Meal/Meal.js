import React from 'react';
import classes from './Meal.module.css'
import Num from './UI/Num/Num';

const Meal = () => {
    return (
        <div className={classes.meal}>
            <div className={classes.imgBox}>
                <img src='/img/meals/1.png'/>
            </div>
            <div>
                <p className={classes.title}>Burger</p>
                <p className={classes.desc}>The Big Mac contains two beef patties, cheese, shredded lettus</p>
                <div className={classes.priceWrapper}>
                    <span className={classes.price}>12</span>
                    <Num amount={1}/>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Meal;