import { all } from 'redux-saga/effects'

import watcherLoader from './getSushiSaga'
import watcherAddToCart from './addToCartSaga'

export default function* rootSaga() {
    yield all([watcherLoader(), watcherAddToCart()])
}