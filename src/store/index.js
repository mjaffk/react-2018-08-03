import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import logger from '../middleware'

const store = createStore(reducer, {}, applyMiddleware(logger))

// Just for dev/show purpose
window.store = store

export default store
