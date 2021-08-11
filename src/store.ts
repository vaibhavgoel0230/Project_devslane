import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./modals/Group";
import { User } from "./modals/User";

const ME_FETCH = "me/fetch";
export const ME_LOGIN = "me/login";
export const GROUP_QUERY = "groups/query";
export const GROUP_QUERY_RESULT = "groups/query_executed";

export interface AppState {
  me?: User;
  isSidebarOpen: boolean;

  groupQuery: string;
  groupQueryIds: { [query: string]: number[] };
  groups: { [id: number]: Group };
}

const initialState: AppState = {
  me: undefined,
  isSidebarOpen: true,
  groupQuery: "",
  groupQueryIds: {},
  groups: {},
};

// by default, INIT action is automatically dispatched for the first time when state is undefined.
const reducer: Reducer<AppState, AnyAction> = (
  currentState = initialState,
  dispatchedAction: AnyAction
) => {
  switch (dispatchedAction.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...currentState, me: dispatchedAction.payload };
    case GROUP_QUERY:
      return { ...currentState, groupQuery: dispatchedAction.payload };
    case GROUP_QUERY_RESULT:
      const groups = dispatchedAction.payload.groups as Group[];
      const groupIds = groups.map((g) => g.id);

      const allGroups = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});

      return {
        ...currentState,
        groupQueryIds: {
          ...currentState.groupQueryIds,
          [dispatchedAction.payload.query]: groupIds,
        },
        groups: { ...currentState.groups, ...allGroups },
      };

    default:
      return currentState;
  }
};

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const meFetchedAction = (u: User) => ({
  type: ME_FETCH,
  payload: u,
});
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
