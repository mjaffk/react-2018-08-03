import { START, SUCCES, FAIL } from '../action-types'

export default (store) => (next) => (action) => {
  const { callAPI, type, ...rest } = action

  if (!callAPI) return next(rest)

  next({
    type: type + START,
    ...rest
  })

  // just for dev only
  setTimeout(() => {
    fetch(callAPI)
      .then((res) => res.json())
      .then((responce) =>
        next({
          ...rest,
          type: type + SUCCES,
          responce
        })
      )
      .catch((error) =>
        next({
          ...rest,
          type: type + FAIL,
          error
        })
      )
  }, 1000)
}
