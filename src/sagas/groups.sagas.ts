import {
  call,
  put,
  takeLatest,
  delay,
  takeEvery,
  all,
} from "@redux-saga/core/effects";
import { fetchGroups as fetchGroupsApi, fetchOneGroup } from "../api/group";
import { AnyAction } from "redux";
import { GROUP_QUERY, GROUP_RETRIEVE } from "../actions/actions.constants";
import {
  fetchedQueryExecuted,
  retrievalOneGroupComplete,
} from "../actions/groups.actions";

export function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(1000);
  const GroupResponse: any = yield call(fetchGroupsApi, {
    query: action.payload,
    status: "all-groups",
  });

  yield put(fetchedQueryExecuted(GroupResponse.data.data, action.payload));
}

export function* fetchOne(action: AnyAction): Generator<any> {
  const GroupResponse: any = yield call(fetchOneGroup, action.payload);

  yield put(retrievalOneGroupComplete(GroupResponse.data.data));
}

export function* watchGroupQueryChanged() {
  yield all([
    takeLatest(GROUP_QUERY, fetchGroups),
    takeEvery(GROUP_RETRIEVE, fetchOne),
  ]);
}
