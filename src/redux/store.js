import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import rootReducer from "./rootReducer";

const middelwares = [];

if (process.env.NODE_ENV === "development") {
  middelwares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middelwares));
export default store;
