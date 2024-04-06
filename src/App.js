import React, {useState} from 'react';
import Meals from './Components/Meals/Meals';

const MEALS_DATA = [{
    id:'1',
    title:"Cheese Burger",
    price:"5.99",
    desc:"The Big Mac contains two beef patties, cheese, shredded lettus",
    img:"/img/meals/1.png"
},
{
    id:'2',
    title:"Double Cheese Burger",
    price:"6.99",
    desc:"The Big Mac contains two beef patties, cheese, shredded lettus",
    img:"/img/meals/2.png"
},
{
    id:'3',
    title:"Big Mac",
    price:"6.59",
    desc:"The Big Mac contains two beef patties, cheese, shredded lettus",
    img:"/img/meals/3.png"
},
{
    id:'4',
    title:"McChicken",
    price:"6.69",
    desc:"The Big Mac contains two beef patties, cheese, shredded lettus",
    img:"/img//meals/4.png"
},
{
    id:'5',
    title:"Roast McChicken",
    price:"5.46",
    desc:"The Big Mac contains two beef patties, cheese, shredded lettus",
    img:"/img/meals/5.png"
},
{
    id:'6',
    title:"Junior Chicken",
    price:"3.99",
    desc:"The Big Mac contains two beef patties, cheese, shredded lettus",
    img:"/img/meals/6.png"
},
{
    id:'7',
    title:"Hamburger",
    price:"3.19",
    desc:"The Big Mac contains two beef patties, cheese, shredded lettus",
    img:"/img/meals/7.png"
},
]

const App = () => {

    const [mealsData, setMealsData] = useState(MEALS_DATA);
    return (
       <div>
        <Meals mealsData={mealsData}/>
       </div>
    );
};

export default App;
