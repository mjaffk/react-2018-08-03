import { OrderedMap } from 'immutable'

export function arrToMap(arr, Record) {
  return arr.reduce(
    (acc, item) => acc.set(item.id, (Record && new Record(item)) || item),
    new OrderedMap({})
  )
}
