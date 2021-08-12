import { Reducer } from "redux";
import { GROUP_QUERY, GROUP_QUERY_RESULT } from "../actions/groups.actions";
import { Group } from "../modals/Group";

export interface GroupState {
  byId: {
    [id: number]: Group;
  };
  query: string;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_QUERY:
      return { ...state, query: action.payload };
    case GROUP_QUERY_RESULT:
      const groups = action.payload.groups as Group[];
      const groupIds = groups.map((g) => g.id);

      const allGroups = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});

      return {
        ...state,
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIds,
        },
        byId: { ...state.byId, ...allGroups },
      };
    default:
      return state;
  }
};
