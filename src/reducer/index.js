import { combineReducers } from 'redux'
import countReducer from './count'
import articles from './articles'
import constArticles from './constArticles'
import selectedDate from './selectedDate'

export default combineReducers({
  count: countReducer,
  articles,
  constArticles,
  selectedDate
})
