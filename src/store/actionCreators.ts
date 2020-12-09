export const chatNameChange = (value: string) =>
  <const>{
    type: "CHAT_NAME_CHANGE",
    title: value,
  };

export const createChat = (id: string, title: string, avatar: string) =>
  <const>{
    type: "CREATE_CHAT",
    id: id,
    title: title,
    avatar: avatar,
  };

export const draftChange = (value: string, currentChatId: string) =>
  <const>{
    type: "DRAFT_CHANGE",
    message: value,
    currentChatId: currentChatId,
  };

export const loadAvatar = (value: string) =>
  <const>{
    type: "LOAD_AVATAR",
    avatar: value,
  };

export const sendMessage = (currentChatId: string, userProfileId: string) =>
  <const>{
    type: "SEND_MESSAGE",
    currentChatId: currentChatId,
    userProfileId: userProfileId,
  };

export const loginUser = (value: string) =>
  <const>{
    type: "LOGIN_USER",
    userProfile: value,
  };

export const showModalAddChat = (value: boolean) =>
  <const>{
    type: "SHOW_MODAL_ADD_CHAT",
    modal: value,
  };

export const viewChat = (id: string) =>
  <const>{
    type: "VIEW_CHAT",
    id: id,
  };

export const fetchChats = (chats: any) =>
  <const>{
    type: "FETCH_CHATS",
    chats: chats,
  };
