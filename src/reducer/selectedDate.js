import { SELECT_DATES } from '../action-types'
import { DateUtils } from 'react-day-picker'

export default (state = { from: null, to: null }, action) => {
  switch (action.type) {
    case SELECT_DATES:
      return (state = DateUtils.addDayToRange(action.payload.day, state))

    default:
      return state
  }
}
