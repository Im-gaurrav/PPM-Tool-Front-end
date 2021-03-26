import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import errorReducer from "./errorReducer";
import projectTaskReducer from "./projectTaskReducer";

export default combineReducers({
  project: projectReducer,
  error: errorReducer,
  project_task: projectTaskReducer,
});
