import { takeEvery, select, call, put } from 'redux-saga/effects' // allows us to listen to any actions we want to and when that action is emitted through the redux store, take that action and call a function we specify

// 1. Swap currency
// 2. Change base currency
// 3. Make a request upon initial app load

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULT, CONVERSION_ERROR } from '../actions/currencies'

const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}`)

function* fetchLastestConversionRates(action) {
  try {
    let currency = action.currency
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency)
    }
    const response = yield call(getLatestRate, currency)
    const result = yield response.json() // yield allows to wait for the request to happen
    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error })
    } else {
      yield put({ type: CONVERSION_RESULT, result })
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message })
  }

}

// function* means it's a generator function for setting up a middleware
export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLastestConversionRates) // generator functions always have yield statement
  yield takeEvery(SWAP_CURRENCY, fetchLastestConversionRates)
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLastestConversionRates)
}

