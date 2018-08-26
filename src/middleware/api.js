import { START, SUCCESS, FAIL } from '../action-types'

export default (store) => (next) => (action) => {
  const { callAPI, type, ...rest } = action

  if (!callAPI) return next(action)

  next({
    type: type + START,
    ...rest
  })

  // just for dev only
  setTimeout(() => {
    fetch(callAPI)
      .then((res) => res.json())
      .then((response) => {
        if (response.error)
          return next({
            ...rest,
            type: type + FAIL,
            error: response.error
          })

        return next({
          ...rest,
          type: type + SUCCESS,
          response
        })
      })
      .catch((error) =>
        next({
          ...rest,
          type: type + FAIL,
          error
        })
      )
  }, 1000)
}
