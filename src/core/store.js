import {legacy_createStore as createStore , applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import watcherLoader from './sagas/getSushiSaga'
import reducer from './reducers/reducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(watcherLoader)
export default store

// import createSagaMiddleware from 'redux-saga';
// import {createStore, applyMiddleware} from 'redux';
 
// import {combinedReducers} from './reducers';
// import rootSaga from './sagas';
 
// const sagaMiddleware = createSagaMiddleware();
// const middlewares = [sagaMiddleware];
 
// const store = createStore(combinedReducers, applyMiddleware(...middlewares));
 
// sagaMiddleware.run(rootSaga);
 
// export {store};