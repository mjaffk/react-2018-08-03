import { combineReducers } from 'redux'
import countReducer from './count'
import articles from './articles'
import filters from './filters'

export default combineReducers({
  count: countReducer,
  articles,
  filters
})
