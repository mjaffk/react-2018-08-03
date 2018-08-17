import { normalizedComments } from '../fixtures'

export default (comments = normalizedComments, action) => {
  switch (action.type) {
    default:
      return comments
  }
}
