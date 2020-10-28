import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'redux/reducers/root.reducer'
import rootSaga from 'redux/sagas/root.saga'

export const logger = (store: any) => (next: any) => (action: any) => {
  next(action)
  console.log(action) // this line is correct when in development
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

export default store
