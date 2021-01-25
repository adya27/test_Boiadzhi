import { createReducer } from "@reduxjs/toolkit";

import {
  fetchDataSuccess,
  filterData,
  toggleFavorite,
  toggleLanguage,
} from "./actions";

export const dataReducer = createReducer([], {
  [fetchDataSuccess]: (_, { payload }) => payload.data,
  [toggleFavorite]: (state, { payload }) => [
    ...state.filter((item) => item.id !== payload.id),
    { ...payload, favourite: !payload.favourite },
  ],
});
export const filterReducer = createReducer("", {
  [filterData]: (_, { payload }) => payload.toLowerCase(),
});

export const languageReducer = createReducer(true, {
  [toggleLanguage]: (_, { payload }) => payload,
});

export const loadingReducer = createReducer([], {
  [fetchDataSuccess]: () => false,
});
