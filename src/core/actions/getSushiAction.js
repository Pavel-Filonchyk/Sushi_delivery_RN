const getSushi = (data) => {
    return {
        type: 'GET_SUSHI',
        payload: data 
    } 
}

const getSushiSuccess = (data) => {
    return {
        type: 'GET_SUSHI_SUCCESS',
        payload: data 
    } 
}
const onPlus = (data) => {
    return {
        type: 'ON_PLUS',
        payload: data 
    } 
}
const onMinus = (data) => {
    return {
        type: 'ON_MINUS',
        payload: data 
    } 
}
export const GET_SUSHI = 'GET_SUSHI'
export {
    getSushi,
    getSushiSuccess,
    onPlus,
    onMinus
}