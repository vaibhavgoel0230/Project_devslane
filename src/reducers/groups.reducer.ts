import { Reducer } from "redux";
import { GROUP_QUERY, GROUP_QUERY_RESULT } from "../actions/actions.constants";
import { Group } from "../modals/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  loadingQuery: { [query: string]: boolean };
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loadingQuery: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_QUERY:
      return {
        ...state,
        query: action.payload,
        loadingQuery: {
          ...state.loadingQuery,
          [action.payload]: true,
        },
      };
    case GROUP_QUERY_RESULT:
      const groups = action.payload.groups as Group[];
      const groupIds = getIds(groups);

      const newState = addMany<GroupState>(state, groups);

      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        loadingQuery: {
          ...newState.loadingQuery,
          [action.payload.query]: false,
        },
      };
    default:
      return state;
  }
};
