import React from 'react';
import BurgerMakerRow from './BurgerMakerRows/BurgerMakerRow';
import classes from './Burger-Maker.css';
const burgerMaker = (props) => {
    const availableIngredients = [
        {label: 'Salads', value: 'salad'},
        {label: 'Cheese', value: 'cheese'},
        {label: 'Meat', value: 'meat'},
     ];
    const buttons = availableIngredients.map((ing, i) => {
        return <BurgerMakerRow update = {props.update} key={i} value = {ing.value} label={ing.label}/>
    })
    return (
        <div className={classes.Maker}>
            {buttons}
        </div>
    );
}

export default burgerMaker;