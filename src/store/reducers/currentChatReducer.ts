import produce from "immer";
import * as actions from "../actionCreators";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

interface initialStateInterface {
  currentChatId: Number;
}

const initialState: initialStateInterface = {
  currentChatId: 777,
};

export const currentChatReducer = (
  state: initialStateInterface = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case "VIEW_CHAT":
    case "CREATE_CHAT":
      return produce(state, (draftState: any) => {
        draftState.currentChatId = action.id;
      });
    default:
      return state;
  }
};
