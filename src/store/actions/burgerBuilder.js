
import * as actionTypes from './actionTypes';


export const addIngredient = (name) => {
    return{
        type: actionTypes.ADD_INCREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}