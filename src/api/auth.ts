import axios from "axios";
import { User } from "../modals/User";
import { BASE_URL, LS_AUTH_TOKEN } from "./base";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };
  token: string;
  user: User;
}

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  console.log(data);

  return axios.post<LoginResponse>(url, data).then((response) => {
    console.log(response.data.token);
    localStorage.setItem(LS_AUTH_TOKEN, response.data.token);
    return response.data.user;
  });

  // return fetch(url, {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: { "Content-Type": "application/json" },
  // }).then((response) => {
  //   response
  //     .json()
  //     .then((data) => console.log("response body in JSON Format", data));
  //   return response;
  // });
};

export const logout = () => {
  localStorage.removeItem(LS_AUTH_TOKEN);
};
