import React, { useState } from 'react';
import Meals from './Components/Meals/Meals';
import CartContext from './store/cart-context';

const MEALS_DATA = [{
    id: '1',
    title: "Cheese Burger",
    price: "5.99",
    desc: "The Big Mac contains two beef patties, cheese, shredded lettus",
    img: "/img/meals/1.png"
},
{
    id: '2',
    title: "Double Cheese Burger",
    price: "6.99",
    desc: "The Big Mac contains two beef patties, cheese, shredded lettus",
    img: "/img/meals/2.png"
},
{
    id: '3',
    title: "Big Mac",
    price: "6.59",
    desc: "The Big Mac contains two beef patties, cheese, shredded lettus",
    img: "/img/meals/3.png"
},
{
    id: '4',
    title: "McChicken",
    price: "6.69",
    desc: "The Big Mac contains two beef patties, cheese, shredded lettus",
    img: "/img//meals/4.png"
},
{
    id: '5',
    title: "Roast McChicken",
    price: "5.46",
    desc: "The Big Mac contains two beef patties, cheese, shredded lettus",
    img: "/img/meals/5.png"
},
{
    id: '6',
    title: "Junior Chicken",
    price: "3.99",
    desc: "The Big Mac contains two beef patties, cheese, shredded lettus",
    img: "/img/meals/6.png"
},
{
    id: '7',
    title: "Hamburger",
    price: "3.19",
    desc: "The Big Mac contains two beef patties, cheese, shredded lettus",
    img: "/img/meals/7.png"
},
]

const App = () => {

    const [shoppingCartData, setShoppingCartData] = useState({
        items: [],
        totalAmount: 0,
        totalPrice: 0
    });

    const [mealsData, setMealsData] = useState(MEALS_DATA);


    const addItem = (addedMeal) => {
        const newCart = { ...shoppingCartData };
        //判断购物内是否已经存在商品
        if (newCart.items.indexOf(addedMeal) === -1) {
            newCart.items.push(addedMeal);
            addedMeal.amount = 1;
        } else {
            addedMeal.amount += 1;
        }
        newCart.totalAmount += 1;
        newCart.totalPrice += addedMeal.price;
        setShoppingCartData(newCart);
    };

    const removeItem = (removedMeal) => {
        const newCart = { ...shoppingCartData };
        removedMeal.amount -= 1;
        if (removedMeal.amount === 0) {
            //如果归零，从购物车中移除该商品
            let removedIdx = newCart.items.indexOf(removedMeal);
            newCart.items.splice(removedIdx, 1);
        }

        newCart.totalAmount -= 1;
        newCart.totalPrice -= removedMeal.price;
        setShoppingCartData(newCart)
    }

    return (
        <CartContext.Provider value={{...shoppingCartData, addItem, removeItem}}>
            <div>
                <Meals mealsData={mealsData}/>
            </div>
        </CartContext.Provider>

    );
};

export default App;
