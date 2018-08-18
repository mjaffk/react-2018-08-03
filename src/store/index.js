import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middleware'

const middleware = [logger]

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
)

const store = createStore(reducer, enhancer)

// Just for dev/show purpose
window.store = store

export default store
