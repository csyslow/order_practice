import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Confirm.module.css';

const Confirm = (props) => {
    const cancelClickedHandler = (e) => {
        props.onCancel(e);
    }
    
    const confirmClickedHandler = (e) => {
        props.onConfirm(e);
    }

    return (
        <Backdrop 
        onClick={props.onCancel}
        className={classes.confirmOuter}>
            <div className={classes.confirm}>
                <p className={classes.confirmText}>{props.confirmText}</p>
                <div>
                    <button onClick={cancelClickedHandler} className={classes.cancelBtn}>Cancel</button>
                    <button onClick={confirmClickedHandler} className={classes.confirmBtn}>Confirm</button>
                </div>
            </div>
        </Backdrop>

    );
};

export default Confirm;