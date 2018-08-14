import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

// Just for dev/show purpose
window.store = store

export default store
