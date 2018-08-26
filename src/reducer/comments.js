import {
  ADD_COMMENT,
  FAIL,
  LOAD_COMMENTS,
  START,
  SUCCESS
} from '../action-types'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentModel = new Record({
  id: null,
  user: null,
  text: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentModel),
  loading: false,
  loaded: false,
  error: null
})

export default (comments = new ReducerRecord(), action) => {
  const { type, payload, randomId, response, error } = action

  switch (type) {
    case ADD_COMMENT: {
      return comments.update('entities', (comments) =>
        comments.merge(
          arrToMap(
            [
              {
                ...payload.comment,
                id: randomId
              }
            ],
            CommentModel
          )
        )
      )
    }

    case LOAD_COMMENTS + START:
      return comments
        .set('loading', true)
        .set('loaded', false)
        .set('error', null)

    case LOAD_COMMENTS + SUCCESS:
      return comments
        .update('entities', (comments) =>
          comments.merge(arrToMap(response, CommentModel))
        )
        .set('loading', false)
        .set('loaded', true)

    case LOAD_COMMENTS + FAIL:
      console.log('LOAD_COMMENTS', error)
      return comments
        .set('error', error)
        .set('loading', false)
        .set('loaded', true)

    default:
      return comments
  }
}
