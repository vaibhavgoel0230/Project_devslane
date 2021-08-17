import { Group } from "../modals/Group";
import { GROUP_QUERY, GROUP_QUERY_RESULT } from "./actions.constants";

export const fetchQuery = (query: string) => ({
  type: GROUP_QUERY,
  payload: query,
});

export const fetchedQueryExecuted = (groups: Group[], query: string) => ({
  type: GROUP_QUERY_RESULT,
  payload: { groups, query },
});
