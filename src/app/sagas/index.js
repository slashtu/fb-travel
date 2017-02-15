import { put, takeEvery } from 'redux-saga/effects'
import loadFBSDK from '../lib/FB'
import { updateFBLoginStatus } from 'actions'

export function* incrementAsync() {
  console.log('delay')
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* loadFBSDKAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

export function* fetchFBLoginStatus() {
  const SDK = yield loadFBSDK();
  const status = yield SDK.getLoginStatusAsync();
  yield put(updateFBLoginStatus(status));
}


// Saga event
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* helloSaga() {
  console.log('Hello Sagas!~~~')
}

export function* fetchFBLoginStatusSaga() {
  yield takeEvery('FETCH_FB_LOGIN_STATUS', fetchFBLoginStatus)
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    fetchFBLoginStatusSaga(),
  ]
}