import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 1,
        purchasable: false,
        purchasing: false
    }
    INGREDIENT_PRICES = {
            salad: 1.3,
            bacon: 3.2,
            cheese: 2.0,
            meat: 4.2
    }

    purchaseHandler = () =>{
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () =>{
        console.log("ADASDSADSAD")
        this.setState({purchasing: false});
    };

    updatePurchaseState(ingredients){

        const sum = Object.keys(ingredients).map(igkey=>{
            return ingredients[igkey];
        })
        .reduce((sum,el)=>{
            return sum + el;
        }, 0);
        this.setState({purchasable: sum >0});
    }
    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceAddition = this.INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.updatePurchaseState(updatedIngredients)
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    }
    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if (oldCount<=0){
            return;

        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]= updatedCount;
        const priceDeduction = this.INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.updatePurchaseState(updatedIngredients)
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
    }

    purchaseContinueHandler= () =>{
        alert('You continue')
    };

    render (){
        const disabledInfo ={
            ...this.state.ingredients
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients = {this.state.ingredients}
                    purchaseCancelled = {this.purchaseCancelHandler}
                    purchaseContinue= {this.purchaseContinueHandler}
                    price= {this.state.totalPrice}
                     />    
                </Modal> 
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                purchasable = {this.state.purchasable}
                price = {this.state.totalPrice}
                disabled = {disabledInfo}
                ingredientAdded = {this.addIngredientHandler} 
                ordered={this.purchaseHandler}
                ingredientRemoved ={this.removeIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;