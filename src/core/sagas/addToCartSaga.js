import { takeEvery, put, select } from 'redux-saga/effects'
import { ADD_TO_CART, addToCartSuccess } from '../actions/addToCartAction'

function* workerAddToCart({payload :id}) {
    try {
        const getSushiState = yield select(state => state.getSushiReducer.sushi)
        
        yield put(addToCartSuccess([id, getSushiState]))
      } catch (error) {
        console.log(error)
      }
  }
export default function* watcherAddToCart() {
    yield takeEvery(ADD_TO_CART, workerAddToCart)
  }
  