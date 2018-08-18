import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (res, comment) => ({
    ...res,
    [comment.id]: comment
  }),
  {}
)

export default (comments = defaultComments, action) => {
  switch (action.type) {
    default:
      return comments
  }
}
