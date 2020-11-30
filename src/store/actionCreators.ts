export function chatNameChange(value:any) {
  return { type: "CHAT_NAME_CHANGE", title: value };
}

export function createChat(id:any, title:any, avatar:any) {
  return { type: "CREATE_CHAT", id: id, title: title, avatar: avatar };
}

export function draftChange(value:any, currentChatId:any) {
  return {
    type: "DRAFT_CHANGE",
    message: value,
    currentChatId: currentChatId,
  };
}

export function loadAvatar(value:any) {
  return {
    type: "LOAD_AVATAR",
    avatar: value,
  };
}

export function sendMessage(currentChatId:any, userProfileId:any) {
  return {
    type: "SEND_MESSAGE",
    currentChatId: currentChatId,
    userProfileId: userProfileId,
  };
}

export function loginUser(value:any) {
  return {
    type: "LOGIN_USER",
    userProfile: value,
  };
}

export function showModalAddChat(value:any) {
  return {
    type: "SHOW_MODAL_ADD_CHAT",
    modal: value,
  };
}

export function viewChat(chatId:any) {
  return { type: "VIEW_CHAT", chatId: chatId };
}

export function fetchChats(chats:any) {
  return { type: "FETCH_CHATS", chats: chats };
}
