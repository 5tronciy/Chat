function setUser(value) {
  return {
    type: "SET_USER",
    userProfile: value,
  };
}

export default setUser;
