import * as actionsTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    },
    totalPrice: 4
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
        default:
            return state;
    }
}

export default reducer;