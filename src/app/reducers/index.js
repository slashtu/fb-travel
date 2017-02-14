import { combineReducers } from 'redux';
import { RENAME_PLACES } from '../actions'

const taggedPlaces = (state = [], action) => {
  switch (action.type) {
    case RENAME_PLACES:
      return state.push({name: 'slash'});
    default:
      return state
  }
}

const rootReducer = combineReducers({
  taggedPlaces
})

export default rootReducer