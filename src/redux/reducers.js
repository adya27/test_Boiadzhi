import { createReducer } from "@reduxjs/toolkit";

import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  fetchContactSuccess,
  filterContact,
} from "./actions";

export const contactsReducer = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [fetchContactSuccess]: (state, { payload }) => payload.data,
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
export const filterReducer = createReducer("", {
  [filterContact]: (_, { payload }) => payload.toLowerCase(),
});

export const loadingReducer = createReducer([], {
  [addContactSuccess]: () => false,
  [addContactRequest]: () => true,
  [addContactError]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
  [fetchContactSuccess]: () => false,
});
