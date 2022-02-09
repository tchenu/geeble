import { mapState, mapActions } from "vuex";

export const authFackMethods = mapActions("modules/authfack", [
  "login",
  "registeruser",
  "logout",
]);

export const notificationMethods = mapActions("modules/notification", [
  "success",
  "error",
  "clear",
]);
