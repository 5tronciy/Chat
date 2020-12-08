import * as actions from "../actionCreators";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export interface InitialStateInterface {
  id: String;
  nickName: String;
  avatar: String;
}

const initialState: InitialStateInterface = {
  id: "1",
  nickName: "Alfons",
  avatar: "pahonia.png",
};

export const userProfileReducer = (
  state: InitialStateInterface = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.userProfile;
    default:
      return state;
  }
};
