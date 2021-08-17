import { call, put, takeLatest, delay } from "@redux-saga/core/effects";
import { fetchGroups as fetchGroupsApi } from "../api/group";
import { AnyAction } from "redux";
import { GROUP_QUERY } from "../actions/actions.constants";
import { fetchedQueryExecuted } from "../actions/groups.actions";

export function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(1000);
  const GroupResponse: any = yield call(fetchGroupsApi, {
    query: action.payload,
    status: "all-groups",
  });

  yield put(fetchedQueryExecuted(GroupResponse.data.data, action.payload));
  console.log("group saga");
}

export function* watchGroupQueryChanged() {
  yield takeLatest(GROUP_QUERY, fetchGroups);
}
