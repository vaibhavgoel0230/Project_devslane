interface LoginData {
  email: string;
  password: string;
}

const BASE_URL = "https://api-dev.domecompass.com";

export const login = (data: LoginData) => {
  const url = BASE_URL + "/login";
  console.log(data);

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    response
      .json()
      .then((data) => console.log("response body in JSON Format", data));
    return response;
  });
};
