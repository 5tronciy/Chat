export const getUserId = (state) => state.userProfile.id;

export const getModalAddChatState = (state) => state.modal;

export const getCurrentChatId = (state) => state.currentChat.currentChatId;

export const getCurrentChat = (state) =>
  state.chats[state.currentChat.currentChatId];

export const getChats = (state) => state.chats;

export const getCurrentUser = (state) => state.userProfile;

export function getChatOfMessage(message) {
  return (state) => state.chats[message.from];
}
