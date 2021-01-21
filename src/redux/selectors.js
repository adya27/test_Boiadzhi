import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.loader;
export const getContacts = (state) => state.contacts;
export const getFilter = (state) => state.filter;

// export const getVisibleContacts = (state) =>
//   getContacts(state).filter((contact) =>
//     contact.name.toLowerCase().includes(getFilter(state))
//   );

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
);
