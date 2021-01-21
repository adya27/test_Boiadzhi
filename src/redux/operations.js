import axios from "axios";

import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  fetchContactSuccess,
  fetchContactRequest,
  fetchContactError,
} from "./actions";

const BASE_URL = "http://localhost:3004/";

export const addContact = (data) => (dispatch) => {
  dispatch(addContactRequest());
  axios
    .post(`${BASE_URL}contacts`, data)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest(id));
  axios
    .delete(`${BASE_URL}contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export const fetchContact = () => (dispatch) => {
  dispatch(fetchContactRequest());
  axios
    .get(`${BASE_URL}contacts/`)
    .then((data) => dispatch(fetchContactSuccess(data)))
    .catch((error) => dispatch(fetchContactError(error)));
};
