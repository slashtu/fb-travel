import { put, fork, takeEvery } from 'redux-saga/effects'
import loadFBSDK from '../lib/FB'
import { updateFBLoginStatus, updateTaggedPlaces, fbLogin, fetchTaggedPlaces } from 'actions'

export function* fbLoginTask() {
  const SDK = yield loadFBSDK();
  const response = yield SDK.loginAsync();
  yield put(updateFBLoginStatus(response));

  if (response.status === 'connected') {
    yield put(fetchTaggedPlaces());
  }
}

export function* fetchFBLoginStatus() {
  const SDK = yield loadFBSDK();
  const status = yield SDK.getLoginStatusAsync();
  yield put(updateFBLoginStatus(status));
}

export function* fetchTaggedPlacesTask() {
  const SDK = yield loadFBSDK();
  const response = yield SDK.getLoginStatusAsync();
  
  yield put(updateFBLoginStatus(response));

  if (response.status === 'connected') {
    const places = yield SDK.apiAsync('/me/tagged_places', 'GET', {});
    yield put(updateTaggedPlaces(places));

  }else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    yield put(fbLogin());

  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    yield put(fbLogin());
  }
}


// Saga event
export function* fbLoginSaga() {
  yield takeEvery('FB_LOGIN', fbLoginTask)
}

export function* fetchFBLoginStatusSaga() {
  yield takeEvery('FETCH_FB_LOGIN_STATUS', fetchFBLoginStatus)
}


export function* fetchTaggedPlacesSaga() {
  yield takeEvery('FETCH_TAGGED_PLACES', fetchTaggedPlacesTask)
}

export default function* rootSaga() {
  yield [
    // helloSaga(),
    // fetchFBLoginStatusSaga(),
    fork(fbLoginSaga),
    fork(fetchTaggedPlacesSaga),
  ]
}