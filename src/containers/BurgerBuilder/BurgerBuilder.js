import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'; 
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import axios from '../../axios-orders';

const INGREDIENT_PRICE = {
    salad: 0.3,
    cheese: 0.4,
    bacon: 0.25,
    meat: 1.2
}

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    updatePurchasable = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        }).reduce( (sum, el) =>{
            return sum + el;
        },0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = oldCount + 1;
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + INGREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });

        this.updatePurchasable(updatedIngredients);
    };

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if( oldCount <= 0){
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type]= oldCount - 1;
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - INGREDIENT_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
        this.updatePurchasable(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing: false});
    }



    purchaseContinueHandler = () => {
        // alert("purchase continued")
        this.setState({loading:true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice.toFixed(2),
            customer: {
                name: 'sanket dhabarde',
                address: {
                    street:'test data',
                    zipcode:'39843',
                    country: 'india'
                },
                email:'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading:false, purchasing: false})
            })
            .catch(error => {
                this.setState({loading:false, purchasing: false})
            });
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        } 
        // {salad: true, bacon: false,....}

        let orderSummary = <OrderSummary 
                ingredients={this.state.ingredients}
                price={this.state.totalPrice.toFixed(2)}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        
        if(this.state.loading){
            orderSummary= <Spinner/>
        }

        return(
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addedIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler} />
            </Auxiliary>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);