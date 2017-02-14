import { put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
  console.log('delay')
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* helloSaga() {
  console.log('Hello Sagas!~~~')
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    // watchIncrementAsync()
  ]
}