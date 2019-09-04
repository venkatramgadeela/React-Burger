import React from 'react';
import classes from './Burger-Ingredients.css';
const burgerMaker = (props) => {
    let ingredient = null;
    switch(props.type) {
        case 'salad':
            ingredient = <div className= {classes.Salads}></div>
            break;
        case 'cheese':
            ingredient = <div className= {classes.Cheese}></div>
            break;
        case 'meat':
            ingredient = <div className= {classes.Meat}></div>
            break;
        default: 
            ingredient = null;
    }
    return (
        ingredient
    )
}


export default burgerMaker;