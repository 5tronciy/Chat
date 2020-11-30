import initialState from "../initialState";
import produce from "immer";

export function currentChatReducer(state = initialState.currentChat, action:any) {
  switch (action.type) {
    case "VIEW_CHAT":
      return produce(state, (draftState:any) => {
        draftState.currentChatId = action.chatId;
      });
    default:
      return state;
  }
}
