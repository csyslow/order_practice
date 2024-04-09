import React from 'react';
import classes from './Bar.module.css';

const Bar = (props) => {
    return (
        <div className={classes.bar}>
            <div className={classes.totalPrice}>{props.price}</div>
            <button className={classes.finishBtn}>Check Out</button>
        </div>
    );
};

export default Bar;