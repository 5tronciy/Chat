import initialState from "../initialState";
import produce from "immer";

export function currentChatReducer(state = initialState.currentChat, action) {
  switch (action.type) {
    case "VIEW_CHAT":
      return produce(state, (draftState) => {
        draftState.currentChatId = action.chatId;
      });
    default:
      return state;
  }
}
