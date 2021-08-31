import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";
import { User } from "../modals/User";
import { addOne, EntityState, initialEntityState } from "./entity.reducer";

export interface UserState extends EntityState<User> {}

export const initialState = {
  byId: {},
};

export const userReducer: Reducer<UserState> = (
  state = initialEntityState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return addOne<UserState>(state, action.payload);
    default:
      return state;
  }
};
