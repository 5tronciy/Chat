function loginUser(value) {
  return {
    type: "LOGIN_USER",
    userProfile: value,
  };
}

export default loginUser;
