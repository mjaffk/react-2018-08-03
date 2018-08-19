import { ADD_COMMENT, DELETE_ARTICLE } from '../action-types'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce(
  (result, article) => ({
    ...result,
    [article.id]: article
  }),
  {}
)

export default (state = defaultArticles, action) => {
  switch (action.type) {
    case DELETE_ARTICLE:
      delete state[action.payload.id]
      return state

    case ADD_COMMENT:
      if (!state[action.payload.articleId].comments)
        state[action.payload.articleId].comments = []
      state[action.payload.articleId].comments.push(action.payload.id)
      return state

    default:
      return state
  }
}
