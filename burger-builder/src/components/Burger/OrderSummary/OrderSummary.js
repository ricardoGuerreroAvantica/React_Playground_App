import React from 'react';
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return  <li key = {igKey}>
                <span style = {{textTransform: 'capitalize'}}>
                    {igKey}
                </span> {props.ingredients[igKey]}
            </li> 
    });
    return(
        <Aux>
            <h3>Your Order: </h3>
            <p>A delicius Burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h3>Total {props.price.toFixed(2)}$</h3>
            <p>Continue to Check Out?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary