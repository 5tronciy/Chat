import * as actions from  "../actionCreators"

type InferValueTypes<T> = T extends {[key:string]: infer U}
? U
: never;

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;


const initialState = {
    id: "1",
    nickName: "Alfons",
    avatar: "pahonia.png",  
};

export function userProfileReducer(state = initialState, action:ActionTypes) {
  switch (action.type) {
    case "LOGIN_USER":
      return action.userProfile;
    default:
      return state;
  }
}
