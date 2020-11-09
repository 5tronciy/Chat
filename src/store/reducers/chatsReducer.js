import initialState from "../initialState";
import produce from "immer";

export function chatsReducer(state = initialState.chats, action) {
  switch (action.type) {
    case "DRAFT_CHANGE":
      return produce(state, (draftState) => {
        draftState[action.currentChatId].draft = action.message;
      });
    case "SEND_MESSAGE":
      return produce(state, (draftState) => {
        draftState[action.currentChatId].messages.push({
          text: draftState[action.currentChatId].draft,
          time: new Date().toISOString(),
          from: action.userProfileId,
        });
        draftState[action.currentChatId].draft = "";
      });
    case "CREATE_CHAT":
      return {
        [action.id]: {
          title: action.title,
          id: action.id,
          messages: [],
          draft: "",
          avatar: action.avatar,
        },
      };
    default:
      return state;
  }
}
