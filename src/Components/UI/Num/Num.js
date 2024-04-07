import React, { useContext } from 'react';
import classes from './Num.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
// 引入fontawesome
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest   -->组件
import CartContext from '../../../store/cart-context';


const Num = (props) => {
    const cartCtx = useContext(CartContext);

    const addBtnHandler = () => {
        cartCtx.addItem(props.meal);
    }
    const minusBtnHandler = () => {
        cartCtx.removeItem(props.meal);
    }
    return (
        <div className={classes.num}>
            {
                (props.meal.amount && props.meal.amount !== 0) ?
                    (<>
                        <button className={classes.minus}
                            onClick={minusBtnHandler}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className={classes.count}>{props.meal.amount}</span>
                    </>
                    )
                    : null
            }
            <button onClick={addBtnHandler}
                className={classes.plus}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default Num;