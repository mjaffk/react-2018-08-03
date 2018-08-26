import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE,
  START,
  SUCCESS,
  FAIL
} from '../action-types'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const ArticleModel = new Record({
  id: null,
  title: null,
  text: null,
  date: null,
  comments: [],
  loading: false,
  loaded: false,
  error: false
})

const ReducerRecord = Record({
  entities: arrToMap([], ArticleModel),
  loading: false,
  loaded: false,
  error: null
})

export default (articles = new ReducerRecord(), action) => {
  const { type, payload, randomId, response, error } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articles.deleteIn(['entities', payload.id])
    case ADD_COMMENT:
      console.log('ADD_COMMENT', payload)
      return articles.updateIn(
        ['entities', payload.articleId, 'comments'],
        (comments) => comments.concat(randomId)
      )

    case LOAD_ALL_ARTICLES + START:
      return articles.set('loading', true)
    case LOAD_ALL_ARTICLES + SUCCESS:
      return articles
        .set('entities', arrToMap(response, ArticleModel))
        .set('loading', false)
        .set('loaded', true)
    case LOAD_ALL_ARTICLES + FAIL:
      return articles
        .set('error', error)
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ARTICLE + START:
      return articles.setIn(['entities', payload.id, 'loading'], true)
    case LOAD_ARTICLE + SUCCESS:
      return articles
        .setIn(['entities', payload.id, 'text'], response.text)
        .setIn(['entities', payload.id, 'loading'], false)
        .setIn(['entities', payload.id, 'loaded'], true)
    case LOAD_ARTICLE + FAIL:
      return articles
        .setIn(['entities', payload.id, 'error'], error)
        .setIn(['entities', payload.id, 'loading'], false)
        .setIn(['entities', payload.id, 'loaded'], true)

    default:
      return articles
  }
}
