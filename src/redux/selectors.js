// import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.loader;
export const getLanguage = (state) => state.language;
export const getFilter = (state) => state.filter;

// export const getVisibleContacts = (state) =>
//   getContacts(state).filter((contact) =>
//     contact.name.toLowerCase().includes(getFilter(state))
//   );

// export const getVisibleContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) =>
//     contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
// );

export const getFilteredData = (state) =>
  state.data.filter(
    (contact) =>
      contact.name.toLowerCase().includes(state.filter) ||
      contact.name
        .toLowerCase()
        .replace(/^([^\s]+)(\s+)([^\s]+)/, "$3$2$1")
        .includes(state.filter)
  );
