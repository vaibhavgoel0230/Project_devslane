import { userStateSelector } from "./app.selectors";
import { createSelector } from "reselect";

export const userIdSelector = createSelector(
  [userStateSelector],
  (userState) => {
    return userState.byId;
  }
);
