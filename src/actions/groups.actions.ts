import { bindActionCreators } from "redux";
import { Group } from "../modals/Group";
import { store } from "../store";
import { GROUP_QUERY, GROUP_QUERY_RESULT } from "./actions.constants";

export const fetchQuery = (query: string, loading: boolean) => ({
  type: GROUP_QUERY,
  payload: { query, loading },
});

export const fetchedQueryExecuted = (groups: Group[], query: string) => ({
  type: GROUP_QUERY_RESULT,
  payload: { groups, query },
});

export const groupActions = bindActionCreators(
  {
    query: fetchQuery,
    queryExecuted: fetchedQueryExecuted,
  },
  store.dispatch
);
