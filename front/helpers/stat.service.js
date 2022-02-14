import { authHeader } from "./authservice/auth-header";
import { userService } from "./authservice/user.service";

export const statService = {
  adminEarn,
};

function adminEarn() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(
    `${process.env.eventdomain}/stat/admin/earn`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
