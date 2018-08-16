import { INCREASE, DELETE_ARTICLE, SELECT_ARTICLES } from '../action-types'

export const count = () => ({
  type: INCREASE
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: {
    id
  }
})

export const selectArticles = (selected) => ({
  type: SELECT_ARTICLES,
  payload: {
    selected
  }
})
