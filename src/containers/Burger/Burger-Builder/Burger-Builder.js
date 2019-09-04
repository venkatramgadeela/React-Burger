import React from 'react';
import BurgerIngredient from './Burger-Ingredients/Burger-Ingredients';
import classes from './Burger-Ingredients/Burger-Ingredients.css';

const burgerBuilder = (props) => {
    const burgerArray = Object.keys(props.types).map((key, j) => {
        return [...Array(props.types[key])].map((_, i) => {
            return <BurgerIngredient key={i + j} type={key}/>
        });
    });
    return (
        <div className={classes.Burger}>
            <div className={classes.TopBun}>
                <div className={classes.Seed1}></div>
                <div className={classes.Seed2}></div>
                <div className={classes.Seed3}></div>
                <div className={classes.Seed4}></div>
                <div className={classes.Seed5}></div>
                <div className={classes.Seed6}></div>
            </div>
                {burgerArray}
            <div className={classes.BottomBun}></div>
        </div>
    )
}

export default burgerBuilder;