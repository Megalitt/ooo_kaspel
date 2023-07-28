import { combineReducers, createStore, applyMiddleware } from "redux";
import lineReduser from "./lineReduser";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const rootReduser = combineReducers({
  posts: lineReduser,
});

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))