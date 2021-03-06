import { createStore, applyMiddleware, compose } from "redux"
import reducers from "./reducers"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
   typeof window === 'object' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const configureStore = (preloadedState: any) => createStore(
   reducers,
   preloadedState,
   composeEnhancers(applyMiddleware(sagaMiddleware)),
)

const store = configureStore({})
sagaMiddleware.run(rootSaga)

export default store