const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: id 
    } 
}

const addToCartSuccess = (data) => {
    return {
        type: 'ADD_TO_CART_SUCCESS',
        payload: data
    } 
}
export const ADD_TO_CART = 'ADD_TO_CART'

const addToCounter = (id) => {
    return {
        type: 'ADD_TO_COUNTER',
        payload: id 
    } 
}
const deductFromCounter = (id) => {
    return {
        type: 'DEDUCT_FROM_COUNTER',
        payload: id 
    } 
}
const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id 
    } 
}
export {
    addToCart,
    addToCartSuccess,
    addToCounter,
    deductFromCounter,
    deleteItem
}