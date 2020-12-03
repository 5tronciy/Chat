export const chatNameChange = (value: String) =>
  <const>{
    type: "CHAT_NAME_CHANGE",
    title: value,
  };

export const createChat = (
  id: Number | String,
  title: String,
  avatar: String
) =>
  <const>{
    type: "CREATE_CHAT",
    id: id,
    title: title,
    avatar: avatar,
  };

export const draftChange = (value: String, currentChatId: Number | String) =>
  <const>{
    type: "DRAFT_CHANGE",
    message: value,
    currentChatId: currentChatId,
  };

export const loadAvatar = (value: String) =>
  <const>{
    type: "LOAD_AVATAR",
    avatar: value,
  };

export const sendMessage = (
  currentChatId: Number | String,
  userProfileId: Number | String
) =>
  <const>{
    type: "SEND_MESSAGE",
    currentChatId: currentChatId,
    userProfileId: userProfileId,
  };

export const loginUser = (value: String) =>
  <const>{
    type: "LOGIN_USER",
    userProfile: value,
  };

export const showModalAddChat = (value: Boolean) =>
  <const>{
    type: "SHOW_MODAL_ADD_CHAT",
    modal: value,
  };

export const viewChat = (id: Number | String) =>
  <const>{
    type: "VIEW_CHAT",
    id: id,
  };

export const fetchChats = (chats: any) =>
  <const>{
    type: "FETCH_CHATS",
    chats: chats,
  };
