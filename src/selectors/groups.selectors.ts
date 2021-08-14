import { groupStateSelector } from "./app.selectors";
import { createSelector } from "reselect";

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

const groupQueryIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

export const groupLoadingQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingQuery
);

export const groupLoadingSelector = createSelector(
  [groupQuerySelector, groupLoadingQuerySelector],
  (query, loadingMap) => loadingMap[query]
);

export const groupsSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupQueryIdSelector],
  (query, queryMap, byId) => {
    const groupIds = queryMap[query] || [];
    const finalGroups = groupIds.map((id) => byId[id]);
    return finalGroups;
  }
);
