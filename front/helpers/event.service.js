import { authHeader } from "./authservice/auth-header";
import { userService } from "./authservice/user.service";

export const eventService = {
  getAll,
  get,
  available,
  getByMyCompany,
};

function getAll() {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${process.env.eventdomain}/event`, requestOptions).then(
    handleResponse
  );
}

function get(slug) {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${process.env.eventdomain}/event/${slug}`, requestOptions).then(
    handleResponse
  );
}

function getByMyCompany() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${process.env.eventdomain}/event/company`, requestOptions).then(
    handleResponse
  );
}

function available(slug) {
  const requestOptions = {
    method: "GET",
  };

  return fetch(
    `${process.env.eventdomain}/event/${slug}/available`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        userService.logout();
        location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
