import { Show } from "models/Show";

export const FETCH_WATCHLIST_REQUEST = "FETCH_WATCHLIST_REQUEST";
export const FETCH_WATCHLIST_SUCCESS = "FETCH_WATCHLIST_SUCCESS";
export const FETCH_WATCHLIST_FAILURE = "FETCH_WATCHLIST_FAILURE";
export const ADD_TO_WATCHLIST_REQUEST = "ADD_TO_WATCHLIST_REQUEST";
export const ADD_TO_WATCHLIST_SUCCESS = "ADD_TO_WATCHLIST_SUCCESS";
export const ADD_TO_WATCHLIST_FAILURE = "ADD_TO_WATCHLIST_FAILURE";
export const REMOVE_FROM_WATCHLIST_REQUEST = "REMOVE_FROM_WATCHLIST_REQUEST";
export const REMOVE_FROM_WATCHLIST_SUCCESS = "REMOVE_FROM_WATCHLIST_SUCCESS";
export const REMOVE_FROM_WATCHLIST_FAILURE = "ADD_TO_WATCHLIST_FAILURE";

export const addToWatchList = (show: Show) => ({
  type: ADD_TO_WATCHLIST_REQUEST,
  payload: show
});

export const removeFromWatchList = (show: Show) => ({
  type: REMOVE_FROM_WATCHLIST_REQUEST,
  payload: show
});
