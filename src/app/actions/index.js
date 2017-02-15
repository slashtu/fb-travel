export const RENAME_PLACES = 'RENAME_PLACES';
export const SET_FB_SDK = 'SET_FB_SDK';
export const FETCH_FB_LOGIN_STATUS = 'FETCH_FB_LOGIN_STATUS';
export const UPDATE_FB_LOGIN_STATUS = 'UPDATE_FB_LOGIN_STATUS';

export const renamePlaces = places => {
  return {
    type: RENAME_PLACES,
    places
  }
}

export const setFBSDK = () => {
  return {
    type: SET_FB_SDK,
  }
}

export const fetchFBLoginStatus = () => {
  return {
    type: FETCH_FB_LOGIN_STATUS,
  }
}

export const updateFBLoginStatus = (status) => {
  return {
    type: UPDATE_FB_LOGIN_STATUS,
    status
  }
}