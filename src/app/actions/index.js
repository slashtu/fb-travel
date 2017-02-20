export const FB_LOGIN = 'FB_LOGIN';
export const RENAME_PLACES = 'RENAME_PLACES';
export const SET_FB_SDK = 'SET_FB_SDK';
export const FETCH_FB_LOGIN_STATUS = 'FETCH_FB_LOGIN_STATUS';
export const UPDATE_FB_LOGIN_STATUS = 'UPDATE_FB_LOGIN_STATUS';
export const FETCH_TAGGED_PLACES = 'FETCH_TAGGED_PLACES';
export const UPDATE_TAGGED_PLACES = 'UPDATE_TAGGED_PLACES';

export const fbLogin = () => {
  return {
    type: FB_LOGIN,
  }
}

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

export const fetchTaggedPlaces = (status) => {
  return {
    type: FETCH_TAGGED_PLACES,
    status
  }
}

export const updateTaggedPlaces = (places) => {
  return {
    type: UPDATE_TAGGED_PLACES,
    places
  }
}