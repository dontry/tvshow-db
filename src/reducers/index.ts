import { default as user } from "./user";
import { default as loading } from "./loading";
import { default as notification } from "./notification";
import { default as watchlist } from "./watchList";
import { default as searchlist } from "./searchlist";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user,
  loading,
  notification,
  watchlist,
  searchlist
});
