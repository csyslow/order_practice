import React from 'react';
import classes from './Num.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
// 引入fontawesome
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest   -->组件



const Num = (props) => {
    return (
        <div className={classes.num}>
            {
                (props.amount && props.amount !== 0) ?
                    (<>
                        <button className={classes.minus}><FontAwesomeIcon icon={faMinus} /></button>
                        <span className={classes.count}>{props.amount}</span>
                    </>
                    )
                    : null
            }
            <button className={classes.plus}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
    );
};

export default Num;