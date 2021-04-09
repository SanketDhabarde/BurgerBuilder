import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const INGREDIENT_PRICE = {
    salad: 0.3,
    cheese: 0.4,
    bacon: 0.25,
    meat: 1.2
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.ADD_INCREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
            }
        case actionsTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
            }
        case actionsTypes.SET_INGREDIENTS:
            return{
                ...state,
                ingredients: action.ingredients,
                error:false
            }
        case actionsTypes.FETCH_INGREDIENTS_FAILED:
            return{
                ...state,
                error:true
            }
        default:
            return state;
    }
}

export default reducer;