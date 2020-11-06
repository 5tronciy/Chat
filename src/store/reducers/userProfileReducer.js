export function userProfileReducer(state = { id: null }, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return action.userProfile;
    default:
      return state;
  }
}
