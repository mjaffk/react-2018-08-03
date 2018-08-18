import {
  INCREASE,
  DELETE_ARTICLE,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION
} from '../action-types'

export const count = () => ({
  type: INCREASE
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  payload: {
    id
  }
})

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}
export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}
