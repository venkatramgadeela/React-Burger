import React, {Component} from 'react';
import BurgerBuilder from './Burger-Builder/Burger-Builder';
import BurgerMaker from './Burger-Maker/Burger-Maker';
import classes from './Burger.css';

class Burger extends Component {
    state = {
        totalPrice: 0,
        burgerConfig: {
            salad: 0,
            meat: 0,
            cheese: 0
        },
        prices: {
            salad: 1,
            meat: 2,
            cheese: 1
        }
    }
    componentDidMount() {
       this.updatePrice();
    }
    updateAvailableIngredients = (ingredient, upOrDown) => {
        const ings = {...this.state.burgerConfig};
        ings[ingredient] = ings[ingredient] + upOrDown;
        if (ings[ingredient] >= 0) {
            this.setState({burgerConfig: ings});
            this.updatePrice();
        }
    }
    updatePrice = () => {
        let price = 0;
        this.setState((prevState) => {
            Object.keys(prevState.burgerConfig).forEach((ing) => {
                price = price + prevState.burgerConfig[ing] * prevState.prices[ing]
            })
            return {totalPrice: price};
          });
    }
    render() {
        return (
           <div>
                <BurgerBuilder types = {this.state.burgerConfig}/>
                <div className={classes.Price}>Price: ${this.state.totalPrice}</div>
                <BurgerMaker update = {this.updateAvailableIngredients}/>
           </div>     
        )
    }
}


export default Burger;