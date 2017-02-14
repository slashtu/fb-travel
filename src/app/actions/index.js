export const RENAME_PLACES = 'RENAME_PLACES';
export const SET_FB_SDK = 'SET_FB_SDK';

export const renamePlaces = places => {
  return {
    type: RENAME_PLACES,
    places
  }
}

export const setFBSDK = sdk => {
  return {
    type: SET_FB_SDK,
    sdk
  }
}