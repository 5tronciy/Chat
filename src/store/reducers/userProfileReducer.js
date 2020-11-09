import initialState from "../initialState";

export function userProfileReducer(state = initialState.userProfile, action) {
  switch (action.type) {
    case "LOGIN_USER":
      return action.userProfile;
    default:
      return state;
  }
}
