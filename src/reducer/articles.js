import { DELETE_ARTICLE, SELECT_ARTICLES } from '../action-types'
import articlesMock from '../fixtures'

export default (state = articlesMock, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      return state.filter((article) => article.id !== action.payload.id)

    case SELECT_ARTICLES:
      console.log(action.payload.selected)
      console.log(action.payload.selected.length)

      if (action.payload.selected.length === 0) {
        return (state = articlesMock)
      }

      let selectedArticleId = action.payload.selected.map(
        (article) => article.value
      )
      console.log(selectedArticleId)

      return state.filter(
        (article) => selectedArticleId.indexOf(article.id) !== -1
      )

    default:
      return state
  }
}
