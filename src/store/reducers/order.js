import * as actionTypes from '../actions/actionTypes';

const initaialState = {
    orders: [],
    loading: false
}

const reducer = (state = initaialState, action) => {
    switch(action.type){
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder={
                ...action.orderdata,
                id: action.orderId
            }
            return{
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            };
        case actionTypes.PURCHASE_BURGER_FAILURE:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}