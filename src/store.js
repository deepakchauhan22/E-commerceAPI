// import { createStore,applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers'
// const initialState = {};

// const middleware = [thunk];

// const store = createStore(rootReducer,
//     initialState, 
//     compose(applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     ));

// export default store;

import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index'

const store = createStore(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;