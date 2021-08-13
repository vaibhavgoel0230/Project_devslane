import { authStateSelector } from "./app.selectors";
import { createSelector } from "reselect";
import { userIdSelector } from "./users.selectors";

const authIdSelector = createSelector([authStateSelector], (authState) => {
  return authState.id;
});

export const meSelector = createSelector(
  [authIdSelector, userIdSelector],
  (authId, userId) => {
    return authId !== undefined ? userId[authId] : undefined;
  }
);
