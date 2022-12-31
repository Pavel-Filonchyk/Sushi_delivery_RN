import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_SUSHI, getSushiSuccess } from '../actions/getSushiAction'
import httpProvider from '../../common/httpProvider'
import { GET_SUSHI_URL } from '../../common/api'

function* workerLoader() {
    try {
        const { data } = yield call(httpProvider.get, GET_SUSHI_URL)
        yield put(getSushiSuccess(data))
      } catch (error) {
        console.log(error)
      }
  }

export default function* watcherLoader() {
    yield takeEvery(GET_SUSHI, workerLoader)
  }
  