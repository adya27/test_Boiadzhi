import axios from "axios";

import { fetchDataSuccess, fetchDataRequest, fetchDataError } from "./actions";

const BASE_URL = "http://localhost:3004/data";

export const fetchData = () => (dispatch) => {
  dispatch(fetchDataRequest());
  axios
    .get(`${BASE_URL}`)
    .then((data) => dispatch(fetchDataSuccess(data)))
    .catch((error) => dispatch(fetchDataError(error)));
};
