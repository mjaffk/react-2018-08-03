import makeId from '../services/makeId'
import { ADD_COMMENT } from '../action-types'

export default (store) => (next) => (action) => {
  console.log('before', store.getState())
  console.log('dispatch', action)

  if (action.type === ADD_COMMENT) {
    action.payload.id = makeId(24)
  }

  next(action)
  console.log('after', store.getState())
}
