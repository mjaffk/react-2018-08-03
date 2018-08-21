import { ADD_COMMENT } from '../action-types'
import { normalizedComments } from '../fixtures'
import { arrToMap } from './utils'

export default (state = arrToMap(normalizedComments), action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case ADD_COMMENT:
      console.log('REDUCER COMMENT', payload)
      return state.set(randomId, {
        ...payload.comment,
        id: randomId
      })

    default:
      return state
  }
}
