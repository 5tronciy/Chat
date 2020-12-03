export const getUserId = (state: any) => state.userProfile.id;

export const getModalAddChatState = (state: any) => state.modal;

export const getCurrentChatId = (state: any) => state.currentChat.currentChatId;

export const getCurrentChat = (state: any) =>
  state.chats[state.currentChat.currentChatId];

export const getChats = (state: any) => state.chats;

export const getCurrentUser = (state: any) => state.userProfile;
interface MessageInterface {
  from: String;
  time: String;
  text: String;
}
export const getChatOfMessage = (message: MessageInterface) => {
  return (state: any) => state.chats[Number(message.from)];
};
