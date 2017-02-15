import { combineReducers } from 'redux';
import { RENAME_PLACES, UPDATE_FB_LOGIN_STATUS } from '../actions'

const taggedPlaces = (state = [], action) => {
  switch (action.type) {
    case RENAME_PLACES:
      return state.push({name: 'slash'});
    default:
      return state;
  }
}

const FB = ( state = {}, action) => {
  switch (action.type) {
    case UPDATE_FB_LOGIN_STATUS:
      return { ...state, loginStatue: action.status };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  taggedPlaces,
  FB,
})

export default rootReducer