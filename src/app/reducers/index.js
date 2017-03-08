import { combineReducers } from 'redux';
import { 
  RENAME_PLACES, 
  UPDATE_FB_LOGIN_STATUS, 
  UPDATE_TAGGED_PLACES 
} from '../actions'

const initState = {
  data: [],
  isLoading: true,
}

const taggedPlaces = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_TAGGED_PLACES:
      return { 
        data: [...state.data, ...action.places.data],
        isLoading: false,
      };
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