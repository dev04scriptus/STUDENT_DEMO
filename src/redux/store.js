import { createStore, applyMiddleware } from 'redux'
import rootreducer from './rootReducer'
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunk)))

export default store