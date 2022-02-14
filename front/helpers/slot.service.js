import { authHeader } from "./authservice/auth-header";
import { userService } from "./authservice/user.service";

export const slotService = {
  add,
  get,
  getMine,
  refund,
};

async function refund(slotId) {
  const requestOptions = {
    method: "PUT",
    headers: authHeader(),
  };

  const response = await fetch(
    `${process.env.eventdomain}/slot/${slotId}/refund`,
    requestOptions
  );

  handleResponse(response);
}

function getMine() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${process.env.eventdomain}/slot/`, requestOptions).then(
    handleResponse
  );
}

function get(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${process.env.eventdomain}/slot/${id}`, requestOptions).then(
    handleResponse
  );
}

function add(slug, quantity) {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ slug, quantity }),
  };

  return fetch(`${process.env.eventdomain}/slot`, requestOptions).then(
    handleResponse
  );
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
