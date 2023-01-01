import getSushiReducer from './getSushiReducer'
import addToCartReducer from './addToCartReducer'

export const rootReducer = () => {
    return { getSushiReducer, addToCartReducer }
}