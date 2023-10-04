import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import reducer from "./reducer/reducer";
import localStorage from "redux-persist/lib/storage";
import {composeWithDevTools} from "redux-devtools-extension";

const middleware = [logger];
const persistConfig = {
  key: "root",
  storage: localStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer , composeWithDevTools());

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
  let persistor = persistStore(store);
  return { store, persistor };
};
