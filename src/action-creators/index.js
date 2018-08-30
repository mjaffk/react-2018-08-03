import {
  INCREMENT,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS,
  LOAD_ALL_COMMENTS,
  SUCCESS,
  FAIL,
  START
} from '../constants'
import { fetchData } from './service'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}

export function loadArticle(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE + START,
      payload: { id }
    })

    fetchData(`article/${id}`)
      .then((response) =>
        dispatch({
          type: LOAD_ARTICLE + SUCCESS,
          payload: { id },
          response
        })
      )
      .catch((error) =>
        dispatch({
          type: LOAD_ARTICLE + FAIL,
          payload: { id },
          error
        })
      )
  }
}

export function loadArticleComments(articleId) {
  return {
    type: LOAD_ARTICLE_COMMENTS,
    payload: { articleId },
    callAPI: `/api/comment?article=${articleId}`
  }
}

export function loadAllComments(limit, offset) {
  return (dispatch) => {
    dispatch({
      type: LOAD_ALL_COMMENTS + START,
      payload: { limit, offset }
    })

    fetchData(
      `http://localhost:3001/api/comment?limit=${limit}&offset=${offset}`
    )
      .then((response) =>
        dispatch({
          type: LOAD_ALL_COMMENTS + SUCCESS,
          payload: { limit, offset },
          response
        })
      )
      .catch((error) =>
        dispatch({
          type: LOAD_ALL_COMMENTS + FAIL,
          payload: { limit, offset },
          error
        })
      )
  }
}
