import { combineReducers } from 'redux'
import countReducer from './count'
import articles from './articles'

export default combineReducers({
  count: countReducer,
  articles
})
