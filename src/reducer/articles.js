import {
  DELETE_ARTICLE,
  SELECT_ARTICLES,
  SELECT_ARTICLES_BY_DATES
} from '../action-types'
import articlesMock from '../fixtures'
import { DateUtils } from 'react-day-picker'

export default (state = articlesMock, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      return state.filter((article) => article.id !== action.payload.id)

    case SELECT_ARTICLES:
      if (action.payload.selected.length === 0) {
        return (state = articlesMock)
      }
      let selectedArticleId = action.payload.selected.map(
        (article) => article.value
      )
      return articlesMock.filter(
        (article) => selectedArticleId.indexOf(article.id) !== -1
      )

    case SELECT_ARTICLES_BY_DATES:
      if (action.payload.from && action.payload.to)
        return state.filter((article) =>
          DateUtils.isDayInRange(article.date, {
            from: action.payload.from,
            to: action.payload.to
          })
        )
      else return state

    default:
      return state
  }
}
