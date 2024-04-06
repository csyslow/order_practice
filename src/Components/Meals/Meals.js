import React from 'react';
import classes from './Meals.module.css'
import Meal from './Meal/Meal';

const Meals = () => {
    return (
        <div className={classes.meals}>
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
            <Meal />
        </div>
    );
};

export default Meals;