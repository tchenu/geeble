import { eventService } from "../helpers/event.service";

const user = JSON.parse(window.localStorage.getItem("user"));

export const actions = {
  // Logs in the user.
  // eslint-disable-next-line no-unused-vars
  getAll({ dispatch, commit }) {
    eventService.login().then(
      (user) => {
        commit("loginSuccess", user);
      },
      (error) => {
        commit("loginFailure", error);
        dispatch("modules/notification/error", error, { root: true });
      }
    );
  },
};
