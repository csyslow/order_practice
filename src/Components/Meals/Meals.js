import React from 'react';
import classes from './Meals.module.css'
import Meal from './Meal/Meal';

const Meals = (props) => {
    return (
        <div className={classes.meals}>
            {props.mealsData.map(item => <Meal 
            key={item.id} 
            meal={item}/>)}
        </div>
    );
};

export default Meals;