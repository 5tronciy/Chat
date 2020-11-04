import initialState from "../initialState";
import produce from "immer";
import { combineReducers } from "redux";

function userProfileReducer(state = initialState.userProfile, action) {
  switch (action.type) {
    case "SET_USER":
      return action.userProfile;
    default:
      return state;
  }
}

function currentChatReducer(state = initialState.currentChat, action) {
  switch (action.type) {
    case "SET_CURRENT_CHAT":
      return action.currentChat;
    case "VIEW_CHAT":
      return action.chatId;
    default:
      return state;
  }
}

function modalReducer(state = false, action) {
  switch (action.type) {
    case "ADD_CHAT_MODAL":
      return action.modal;
    default:
      return state;
  }
}

function chatsReducer(state = initialState.chats, action) {
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
          from: draftState.userProfile.id,
        });
        draftState[action.currentChatId].draft = "";
      });
    case "CHAT_NAME_CHANGE":
      return produce(state, (draftState) => {
        draftState.draft.title = action.title;
      });
    case "LOAD_AVATAR":
      return produce(state, (draftState) => {
        draftState.draft.avatar = action.avatar;
      });
    case "CREATE_CHAT":
      return produce(state, (draftState) => {
        draftState[action.currentChatId].push({
          title: draftState.draft.title,
          id: action.id,
          messages: [],
          draft: "",
          avatar: draftState.draft.avatar,
        });
      });
    default:
      return state;
  }
}

export default combineReducers({
  userProfile: userProfileReducer,
  currentChat: currentChatReducer,
  modal: modalReducer,
  chats: chatsReducer,
});
