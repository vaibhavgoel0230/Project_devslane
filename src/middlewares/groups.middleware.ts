import { groupActions } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsApi } from "../api/group";
import { groupLoadingQuerySelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {
  const queryLoading = groupLoadingQuerySelector(store.getState());
  const query = request.query;
  const groupIds = queryLoading[query];
  groupActions.query(query);

  if (groupIds) {
    return;
  }
  fetchGroupsApi(request).then((groups) => {
    groupActions.queryExecuted(groups, query);
  });
};
