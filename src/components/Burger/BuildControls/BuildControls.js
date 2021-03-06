import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                label={ctrl.label} 
                key={ctrl.label}
                added={() => props.addedIngredient(ctrl.type)}
                remove={() => props.removeIngredient(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button className={classes.OrderButton} onClick={props.ordered} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;