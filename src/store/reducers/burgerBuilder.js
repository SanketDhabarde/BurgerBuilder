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

const addIngredient = (state, action) => {
    return {
        ...state,
        ingredients:{
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredientName]
    };
};

const removeIngredient = (state, action) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredientName]
    };
};

const setIngredients = (state, action) => {
    return {
        ...state,
        ingredients: {
            salad: action.ingredients.salad,
            cheese: action.ingredients.cheese,
            bacon: action.ingredients.bacon,
            meat: action.ingredients.meat
        },
        totalPrice:4,
        error:false
    };
};

const fetchIngredientsFailed = (state, action) => {
    return{
        ...state,
        error:true
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.ADD_INCREDIENT: return addIngredient(state, action);
        case actionsTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionsTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionsTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
}

export default reducer;