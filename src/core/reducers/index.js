import getSushiReducer from './getSushiReducer'
import addToCartReducer from './addToCartReducer'
import sendSushiCartReduser from './sendSushiCartReduser'

export const rootReducer = () => {
    return { getSushiReducer, addToCartReducer, sendSushiCartReduser }
}