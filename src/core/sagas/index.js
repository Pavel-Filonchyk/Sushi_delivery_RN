import { all } from 'redux-saga/effects'

import watcherLoader from './getSushiSaga'
import watcherAddToCart from './addToCartSaga'
import watcherSendSushiCart from './sendSushiCartSaga'

export default function* rootSaga() {
    yield all([watcherLoader(), watcherAddToCart(), watcherSendSushiCart()])
}