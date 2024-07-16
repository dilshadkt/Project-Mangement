const user =
  typeof window !== "undefined" && localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : {};

export const DefaulUserData = {
  name: user.firstName || null,
  email: user.email || null,
  role: null,
  _id: null,
};
