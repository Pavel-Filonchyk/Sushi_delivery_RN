import { takeEvery, put, call, select } from 'redux-saga/effects'
import { SEND_SUSHI_CART, sendSushiCartSuccess } from '../actions/sendSushiCartAction'
import httpProvider from '../../common/httpProvider'
import { BUY_SUSHI, deleteSushi } from '../../common/api'

function* workerSendSushiCart() {

  const sushiInCart = yield select(state => state.addToCartReducer.sushiInCart)
  const totalPrice = yield select(state => state.addToCartReducer.totalPrice)
  //const userName = yield select(state => state.getToken.userName)
  const collector = sushiInCart?.map(item => {
    return {
        "sushiName": item.sushiName,
        "price": item.price,
    }
  })
  const invoice = {check: collector, totalPrice, userName: "User"}  // userName
  try {
      // const { data } = yield call(httpProvider.post, BUY_SUSHI, {
      //     data: invoice
      //   })
      yield put(sendSushiCartSuccess(invoice))
    } catch (error) {
      console.log(error)
  }
}

export default function* watcherSendSushiCart() {
    yield takeEvery(SEND_SUSHI_CART, workerSendSushiCart)
  }
  