import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import classes from './FilterMeal.module.css';

const FilterMeals = () => {
    return (
        <div className={classes.filterMeals}>
            <div className={classes.inputOuter}>
                <input className={classes.searchInput} type="text" placeholder='Please Enter Here' />
                <FontAwesomeIcon className={classes.searchIcon} icon={faSearch} />
            </div>

        </div>
    );
};

export default FilterMeals;