export default function({ store, route, redirect }) {
  const publicPages = [
    "/account/login",
    "/account/register",
    "/account/forgot-password",
  ];
  const authpage = !publicPages.includes(route.path);
  const loggeduser = localStorage.getItem("user");

  if (authpage && !loggeduser) {
    return redirect("/account/login");
  }

  redirect();
}
