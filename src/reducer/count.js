import { INCREASE } from '../action-types'

const countReducer = (state = 0, action) => {
  return action.type === INCREASE ? state + 1 : state
}
export default countReducer
