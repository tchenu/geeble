import { mapState, mapActions } from "vuex";

export const authMethods = mapActions("modules/auth", [
  "login",
  "registeruser",
  "logout",
]);
