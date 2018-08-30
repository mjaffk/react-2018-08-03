import {
  ADD_COMMENT,
  FAIL,
  LOAD_ALL_COMMENTS,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS
} from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
  error: null,
  total: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response, error } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    case LOAD_ALL_COMMENTS + START: {
      console.log('start loading')
      return state.set('loading', true)
    }

    case LOAD_ALL_COMMENTS + SUCCESS: {
      state
        .mergeIn(['entities'], arrToMap(response.get('records'), CommentRecord))
        .set('loading', false)
        .set('total', response.get('total'))
      console.log(response.get('total'), state.getIn(['entities']).length)

      if (response.get('total') === state.getIn(['entities']).length) {
        state.set('loaded', true)
      }

      return state
    }

    case LOAD_ALL_COMMENTS + FAIL:
      return state.set('loading', false).set('error', error)

    default:
      return state
  }
}
