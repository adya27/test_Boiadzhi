import { createAction } from "@reduxjs/toolkit";

export const fetchDataSuccess = createAction("fetchDataSuccess");
export const fetchDataRequest = createAction("fetchDataRequest");
export const fetchDataError = createAction("fetchDataError");

export const filterData = createAction("filterDataSuccess");
export const toggleLanguage = createAction("toggleLanguage");
export const toggleFavorite = createAction("toggleFavorite");
