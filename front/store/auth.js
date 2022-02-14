import { userService } from "../helpers/authservice/user.service";

const user = JSON.parse(window.localStorage.getItem("user"));

export const state = () => {
  return user
    ? { status: { loggeduser: true }, user }
    : { status: {}, user: null };
};

export const actions = {
  login({ dispatch, commit }, { email, password }) {
    commit("loginRequest", { email });

    userService.login(email, password).then(
      (user) => {
        commit("loginSuccess", user);
        this.$router.push({ path: "/" });
      },
      (error) => {
        commit("loginFailure", error);
      }
    );
  },
  logout({ commit }) {
    userService.logout();
    commit("logout");
  },
  registeruser({ dispatch, commit }, user) {
    commit("registerRequest", user);
    userService.register(user).then(
      (user) => {
        commit("registerSuccess", user);
        //this.$router.push({ path: "/account/login" });
      },
      (error) => {
        commit("registerFailure", error);
      }
    );
  },
};

export const mutations = {
  loginRequest(state, user) {
    state.status = { loggingIn: true };
    state.user = user;
  },
  loginSuccess(state, user) {
    state.status = { loggeduser: true };
    state.user = user;
  },
  loginFailure(state) {
    state.status = {};
    state.user = null;
  },
  logout(state) {
    state.status = {};
    state.user = null;
  },
  registerRequest(state) {
    state.status = { registering: true };
  },
  registerSuccess(state) {
    state.status = {};
  },
  registerFailure(state) {
    state.status = {};
  },
};
