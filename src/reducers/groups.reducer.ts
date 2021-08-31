import { Reducer } from "redux";
import {
  GROUP_QUERY,
  GROUP_QUERY_RESULT,
  GROUP_RETRIEVE,
  GROUP_RETRIEVE_COMPLETE,
  GROUP_RETRIEVE_ERROR,
} from "../actions/actions.constants";
import { Group } from "../modals/Group";
import {
  addMany,
  addOne,
  EntityState,
  getIds,
  initialEntityState,
  select,
  setErrorForOne,
} from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
}

const initialState = {
  ...initialEntityState,
  query: "",
  queryMap: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUP_RETRIEVE:
      return select(state, action.payload) as GroupState;
    case GROUP_QUERY:
      return {
        ...state,
        query: action.payload,
        loadingList: true,
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
        loadingList: false,
      };
    case GROUP_RETRIEVE_COMPLETE:
      return addOne(state, action.payload, false) as GroupState;
    case GROUP_RETRIEVE_ERROR:
      const { id, msg } = action.payload;
      return setErrorForOne(state, id, msg) as GroupState;
    default:
      return state;
  }
};
