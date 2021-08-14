import { Reducer } from "redux";
import { GROUP_QUERY, GROUP_QUERY_RESULT } from "../actions/actions.constants";
import { Group } from "../modals/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  loading: boolean;
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loading: false,
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
        loading: true,
      };
    case GROUP_QUERY_RESULT:
      const groups = action.payload.groups as Group[];
      const groupIds = getIds(groups);
      // console.log(groupIds);
      const newState = addMany<GroupState>(state, groups);

      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        loading: false,
      };
    default:
      return state;
  }
};
