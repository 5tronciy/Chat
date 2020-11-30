import initialState from "../initialState";
import produce from "immer";

export function chatsReducer(state = initialState.chats, action:any) {
  switch (action.type) {
    case "DRAFT_CHANGE":
      return produce(state, (draftState:any) => {
        draftState[action.currentChatId].draft = action.message;
      });
    case "SEND_MESSAGE":
      return produce(state, (draftState:any) => {
        draftState[action.currentChatId].messages.push({
          text: draftState[action.currentChatId].draft,
          time: new Date().toISOString(),
          from: action.userProfileId,
        });
        draftState[action.currentChatId].draft = "";
      });
    case "CREATE_CHAT":
      return {
        ...state,
        [action.id]: {
          title: action.title,
          id: action.id,
          messages: [],
          draft: "",
          avatar: action.avatar,
        },
      };
    case "FETCH_CHATS":
      return action.chats.reduce((chats:any, chat:any) => {
        chats[chat.id] = chat;
        return chats;
      }, {});
    default:
      return state;
  }
}