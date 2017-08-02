import { takeEvery } from 'redux-saga/effects' // allows us to listen to any actions we want to and when that action is emitted through the redux store, take that action and call a function we specify

// 1. Swap currency
// 2. Change base currency
// 3. Make a request upon initial app load

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../actions/currencies'

function* fetchLastestConversionRates(action) {
  console.log('TODO: update the things', action)
}

// function* means it's a generator function for setting up a middleware
export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLastestConversionRates) // generator functions always have yield statement
  yield takeEvery(SWAP_CURRENCY, fetchLastestConversionRates)
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLastestConversionRates)
}

