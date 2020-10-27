import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "redux/reducers/root.reducer";
import rootSaga from "redux/sagas/root.saga";
import { loadState, saveState } from "utils/state";

export const logger = (store: any) => (next: any) => (action: any) => {
    next(action)
    console.log(action) // this line is correct when in development
}

const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, persistedState, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

store.subscribe(() => {
    saveState({
        auth: store.getState().auth,
    });
});

export default store


