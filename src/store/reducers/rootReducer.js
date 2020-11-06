import { combineReducers } from "redux";
import { userProfileReducer } from "./userProfileReducer";
import { currentChatReducer } from "./currentChatReducer";
import { modalReducer } from "./modalReducer";
import { chatsReducer } from "./chatsReducer";

export default combineReducers({
  userProfile: userProfileReducer,
  currentChat: currentChatReducer,
  modal: modalReducer,
  chats: chatsReducer,
});
