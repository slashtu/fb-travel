import { put, takeEvery } from 'redux-saga/effects'
import loadFBSDK from '../lib/FB'
import { updateFBLoginStatus, updateTaggedPlaces } from 'actions'

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

export function* fetchTaggedPlaces() {
  const SDK = yield loadFBSDK();
  
  const status = yield SDK.getLoginStatusAsync();
  yield put(updateFBLoginStatus(status));

  const places = yield SDK.apiAsync('/me/tagged_places', 'GET', {});
  yield put(updateTaggedPlaces(places));
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


export function* fetchTaggedPlacesSaga() {
  yield takeEvery('FETCH_TAGGED_PLACES', fetchTaggedPlaces)
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    fetchFBLoginStatusSaga(),
    fetchTaggedPlacesSaga(),
  ]
}