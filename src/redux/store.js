import { combineReducers } from "redux";
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {
  configureStore,
  getDefaultMiddleware,
  // createReducer,
} from "@reduxjs/toolkit";

import {
  dataReducer,
  filterReducer,
  languageReducer,
  loadingReducer,
} from "./reducers";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["filter"],
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const rootReducer = combineReducers({
  data: dataReducer,
  filter: filterReducer,
  loader: loadingReducer,
  language: languageReducer,
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
