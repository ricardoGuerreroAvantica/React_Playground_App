import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import styles from './BuildControls.css'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) =>(
    <div className={styles.BuildControls}>
        <p>Current Price : <strong>{props.price.toFixed(2)}$</strong> </p>
        {controls.map(ctrl=>
        <BuildControl 
        disabled = {props.disabled[ctrl.type]}
        key = {ctrl.label} 
        label = {ctrl.label} 
        add ={() => props.ingredientAdded(ctrl.type)}
        remove ={() => props.ingredientRemoved(ctrl.type)}/>
        )}
        <button className ={styles.OrderButton} 
        disabled= {!props.purchasable}
        onClick ={props.ordered}>
        ORDER NOW</button>
    </div>
);
export default buildControls;