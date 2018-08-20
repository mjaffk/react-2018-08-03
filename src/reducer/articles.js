import { DELETE_ARTICLE, ADD_COMMENT } from '../action-types'
import { normalizedArticles as defaultArticles } from '../fixtures'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const ArticleModel = new Record({
  id: null,
  title: null,
  text: null,
  date: null,
  comments: []
})

export default (articles = arrToMap(defaultArticles, ArticleModel), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articles.delete(payload.id)
    case ADD_COMMENT:
      console.log('ADD_COMMENT', payload)
      return articles.updateIn([payload.articleId, 'comments'], (comments) =>
        comments.concat(randomId)
      )

    default:
      return articles
  }
}
