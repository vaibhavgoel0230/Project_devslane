import { Group } from "../modals/Group";

export const GROUP_QUERY = "groups/query";
export const GROUP_QUERY_RESULT = "groups/query_executed";

export const fetchQuery = (query: string) => ({
  type: GROUP_QUERY,
  payload: query,
});

export const fetchedQueryExecuted = (groups: Group[], query: string) => ({
  type: GROUP_QUERY_RESULT,
  payload: { groups, query },
});
