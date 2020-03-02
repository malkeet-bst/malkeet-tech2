import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import parseReducer from "./parseReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  parse: parseReducer
});
