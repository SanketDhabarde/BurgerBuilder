import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ( props ) => {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKeys => {
        return [...Array( props.ingredients[igKeys])].map((_, i) => {
            return <BurgerIngredient key={igKeys + i} type={igKeys}/>
        });
    });
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;