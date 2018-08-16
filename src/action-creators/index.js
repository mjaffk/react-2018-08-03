import {
  INCREASE,
  DELETE_ARTICLE,
  SELECT_ARTICLES,
  SELECT_DATES,
  SELECT_ARTICLES_BY_DATES
} from '../action-types'

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

export const selectedDate = (day) => ({
  type: SELECT_DATES,
  payload: {
    day
  }
})

export const selectArticlesByDate = (from, to) => ({
  type: SELECT_ARTICLES_BY_DATES,
  payload: {
    from,
    to
  }
})
