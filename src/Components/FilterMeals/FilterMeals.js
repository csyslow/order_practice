import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import classes from './FilterMeal.module.css';

const FilterMeals = (props) => {
    const [keyword, setKeyword] = useState('');

    const inputChangeHandler = (event) => {
        setKeyword(event.target.value.trim());
        //props.onFilter(keyword); -->可以转变为effect设置
    }

    useEffect(() => {
        //这样的话输入过程中都会触发这个函数，假如是要给服务器发送请求，这样请求就过多了
        //因此我们要优化性能，等用户输入完成后再发送请求，输入中不要filter
        //可以设置当用户停止输入一秒后我们才重新查询
        //在开启一个定时器的同时，应该关闭上一个
        const timer = setTimeout(() => {
            console.log('set executed');
            props.onFilter(keyword);
        }, 1000);
        //但是如果只有上面的代码还是会导致过多的重渲染
        //在effect回调函数中，可以指定一个函数作为返回值（清理函数）
        //它会在下一次effect执行之前先被调用
        //可以在这个函数中做一些工作来清理上一次effect所带来的影响
        return () => {
            clearTimeout(timer);
        }
        //就是每次重新渲染的时候先调用return里的，然后开一个定时器监听下一个输入
        //如果一秒后没动才发送请求（做查询），如果一秒内输入则清除上一个timer

    }, [keyword]);



    return (
        <div className={classes.filterMeals}>
            <div className={classes.inputOuter}>
                <input 
                value={keyword}
                className={classes.searchInput} 
                type="text" 
                placeholder='Please Enter Here' 
                onChange={inputChangeHandler}
                />
                <FontAwesomeIcon className={classes.searchIcon} icon={faSearch} />
            </div>

        </div>
    );
};

export default FilterMeals;