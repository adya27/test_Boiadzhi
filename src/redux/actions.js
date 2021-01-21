import { createAction } from "@reduxjs/toolkit";

export const addContactSuccess = createAction("addContactSuccess");
export const addContactRequest = createAction("addContactRequest");
export const addContactError = createAction("addContactError");

export const deleteContactSuccess = createAction("deleteContactSuccess");
export const deleteContactRequest = createAction("deleteContactRequest");
export const deleteContactError = createAction("deleteContactError");

export const fetchContactSuccess = createAction("fetchContactSuccess");
export const fetchContactRequest = createAction("fetchContactRequest");
export const fetchContactError = createAction("fetchContactError");

export const filterContact = createAction("filterContactSuccess");
