import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import userReducers from "./userReducers";

export default combineReducers({
  posts: postsReducer,
  users: userReducers,
});
