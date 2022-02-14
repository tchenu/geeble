import { authHeader } from "./auth-header";
import jwt_decode from "jwt-decode";

export const userService = {
  login,
  logout,
  register,
  getMe,
  readJwt,
  hasRole,
  hasCompany,
};

function readJwt() {
  const token = localStorage.getItem("user");

  const jwt = jwt_decode(token);

  return {
    id: jwt.id,
    roles: jwt.roles,
    companyId: jwt.company_id,
  };
}

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };
  return fetch(`${process.env.authdomain}/authentication_token`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // login successful if there's a jwt token in the response
      if (user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
      }
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${process.env.authdomain}/users`, requestOptions).then(
    handleResponse
  );
}

function getMe() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  const { id } = this.readJwt();

  return fetch(`${process.env.authdomain}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

async function hasRole(role) {
  const { roles } = await this.getMe();

  return roles.includes(role);
}

async function hasCompany() {
  const { company } = await this.getMe();

  return company != null;
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
