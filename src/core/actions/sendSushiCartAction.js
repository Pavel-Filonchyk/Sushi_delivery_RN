const sendSushiCart = () => {
    return {
        type: 'SEND_SUSHI_CART' 
    } 
}
export const SEND_SUSHI_CART = 'SEND_SUSHI_CART'

const sendSushiCartSuccess = (data) => {
    return {
        type: 'SEND_SUSHI_CART_SUCCESS',
        payload: data
    } 
}
export {
    sendSushiCart,
    sendSushiCartSuccess
}