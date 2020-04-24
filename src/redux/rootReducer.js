import { combineReducers } from "redux";
import panelReducer from "./panel/panel.reducer";

const rootReducer = combineReducers({
  panel: panelReducer,
});

export default rootReducer;
