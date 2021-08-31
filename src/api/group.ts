import { Group } from "../modals/Group";
import { BASE_URL, get } from "./base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query: string;
  status: "all-groups" | "favourite" | "archieved";
}

interface GroupResponse {
  data: Group[];
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";

  return get<GroupResponse>(url, { params: data });
};

export const fetchOneGroup = (id: string) => {
  const url = BASE_URL + "/groups/" + id;

  return get<GroupResponse>(url);
};
