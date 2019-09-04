import React from 'react';
import classes from './BurgerMakerRow.css';

const burgerMakerRow = (props) => {
    return (
        <div className={classes.Row}>
            <div className={classes.Container}>
                <span>{props.label}</span>
                <button onClick={() => props.update(props.value, -1)}>Less</button>
                <button onClick={() => props.update(props.value, 1)}>More</button>
            </div>
        </div>
    )
};


export default burgerMakerRow;