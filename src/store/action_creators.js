import { createAction } from "@reduxjs/toolkit";

export function chatNameChange(value) {
  return { type: "CHAT_NAME_CHANGE", title: value };
}

export function createChat(id, title, avatar) {
  return { type: "CREATE_CHAT", id: id, title: title, avatar: avatar };
}

export const draftChange = createAction(
  "DRAFT_CHANGE",
  (value, currentChatId) => {
    return {
      message: value,
      currentChatId: currentChatId,
    };
  }
);

// export function (value, currentChatId) {
//   return {
//     type: "DRAFT_CHANGE",
//     message: value,
//     currentChatId: currentChatId,
//   };
// }

export function loadAvatar(value) {
  return {
    type: "LOAD_AVATAR",
    avatar: value,
  };
}

export function sendMessage(currentChatId, userProfileId) {
  return {
    type: "SEND_MESSAGE",
    currentChatId: currentChatId,
    userProfileId: userProfileId,
  };
}

export function loginUser(value) {
  return {
    type: "LOGIN_USER",
    userProfile: value,
  };
}

export function showModalAddChat(value) {
  return {
    type: "SHOW_MODAL_ADD_CHAT",
    modal: value,
  };
}

export function viewChat(chatId) {
  return { type: "VIEW_CHAT", chatId: chatId };
}

export function fetchChats(chats) {
  return { type: "FETCH_CHATS", chats: chats };
}
