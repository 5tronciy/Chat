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
    default:
      return state;
  }
}

function modalReducer(state = false, action) {
  switch (action.type) {
    case "ADD_CHAT":
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
