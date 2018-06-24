import { combineReducers } from 'redux'
import baseReducer from './baseReducer'
import { withReduxStateSync } from 'redux-state-sync'
import * as TYPE from '../constants/actionType';

const appReducer = combineReducers({
  baseReducer
})

const rootReducer = (state, action) => {

  if (action.type === TYPE.RESET_REDUX_STORE) {
    state = undefined
  }

  return appReducer(state, action)
}

export default withReduxStateSync(rootReducer)