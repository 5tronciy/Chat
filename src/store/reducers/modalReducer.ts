import * as actions from "../actionCreators";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export const modalReducer = (state: Boolean = false, action: ActionTypes) => {
  switch (action.type) {
    case "SHOW_MODAL_ADD_CHAT":
      return action.modal;
    default:
      return state;
  }
};
