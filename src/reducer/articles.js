import { DELETE_ARTICLE } from '../action-types'
import { normalizedArticles } from '../fixtures'

export default (state = normalizedArticles, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      return state.filter((article) => article.id !== action.payload.id)
    default:
      return state
  }
}
