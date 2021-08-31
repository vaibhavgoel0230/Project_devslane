import { Group } from "../modals/Group";
import {
  GROUP_QUERY,
  GROUP_QUERY_RESULT,
  GROUP_RETRIEVE,
  GROUP_RETRIEVE_COMPLETE,
  GROUP_RETRIEVE_ERROR,
} from "./actions.constants";

export const fetchQuery = (query: string) => ({
  type: GROUP_QUERY,
  payload: query,
});

export const fetchedQueryExecuted = (groups: Group[], query: string) => ({
  type: GROUP_QUERY_RESULT,
  payload: { groups, query },
});

export const retrieveOneGroup = (id: number) => ({
  type: GROUP_RETRIEVE,
  payload: id,
});

export const retrievalOneGroupComplete = (group: Group) => ({
  type: GROUP_RETRIEVE_COMPLETE,
  payload: group,
});

export const retrieveGroupError = (id: number, msg: string) => ({
  type: GROUP_RETRIEVE_ERROR,
  payload: { id, msg },
});
