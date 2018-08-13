import { DELETE_ARTICLE } from '../action-types'
import articlesMock from '../fixtures'

export default (state = articlesMock, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      return state.filter((article) => article.id !== action.payload.id)
    default:
      return state
  }
}
