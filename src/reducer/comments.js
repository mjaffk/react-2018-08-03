import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../action-types'

const defaultComments = normalizedComments.reduce(
  (res, comment) => ({
    ...res,
    [comment.id]: comment
  }),
  {}
)

export default (comments = defaultComments, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...comments,
        [action.payload.id]: {
          id: action.payload.id,
          user: action.payload.user,
          text: action.payload.text
        }
      }

    default:
      return comments
  }
}
