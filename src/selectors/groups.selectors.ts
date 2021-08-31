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

export const groupQueryIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

export const groupLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingList
);

export const groupsSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupQueryIdSelector],
  (query, queryMap, byId) => {
    const groupIds = queryMap[query] || [];
    const finalGroups = groupIds.map((id) => byId[id]);
    return finalGroups;
  }
);

export const selectedIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.selectedId
);

export const selectedIdGroupSelector = createSelector(
  [groupQueryIdSelector, selectedIdSelector],
  (byId, id) => id && byId[id]
);

export const selectedErrorSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.errorOne
);

export const selectedLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingOne
);
