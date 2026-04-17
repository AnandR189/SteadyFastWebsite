export const getRoleRedirectPath = (role) => {
  switch (role) {
    case "client":
      return "/client/home";
    case "mechanic":
      return "/mechanic/dashboard";
    case "admin":
      return "/admin/dashboard";
    default:
      return "/login";
  }
};
