const initialState = {
    id: "1",
    nickName: "Alfons",
    avatar: "pahonia.png",  
};

export function userProfileReducer(state = initialState, action:any) {
  switch (action.type) {
    case "LOGIN_USER":
      return action.userProfile;
    default:
      return state;
  }
}
