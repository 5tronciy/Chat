interface ChatNameChangeInterface{
  type:String,
  title:String
}
export function chatNameChange (value:String):ChatNameChangeInterface {
  return { type: "CHAT_NAME_CHANGE", title: value };
}
interface CreateChatInterface{
  type:String,
  id:Number|String,
  title:String,
  avatar:String
}
export function createChat(id:Number|String, title:String, avatar:String):CreateChatInterface {
  return { type: "CREATE_CHAT", id: id, title: title, avatar: avatar };
}
interface DraftChangeInterface{
  type:String,
  message:String,
  currentChatId:Number|String
  
}
export function draftChange(value:String, currentChatId:Number|String):DraftChangeInterface {
  return {
    type: "DRAFT_CHANGE",
    message: value,
    currentChatId: currentChatId
  };
}
interface LoadAvatarInterface{
  type:String,
  avatar:String
}
export function loadAvatar(value:String):LoadAvatarInterface {
  return {
    type: "LOAD_AVATAR",
    avatar: value
  };
}
interface SendMessageInterface{
  type:String,
  currentChatId:Number|String,
  userProfileId:Number|String
}
export function sendMessage(currentChatId:Number|String, userProfileId:Number|String):SendMessageInterface {
  return {
    type: "SEND_MESSAGE",
    currentChatId: currentChatId,
    userProfileId: userProfileId
  };
}
interface LoginUserInterface{
  type:String,
  userProfile:Object
}
export function loginUser(value:String):LoginUserInterface {
  return {
    type: "LOGIN_USER",
    userProfile: value
  };
}
interface ShowModalAddChatInterface{
  type:String,
  modal:Boolean
}
export function showModalAddChat(value:Boolean):ShowModalAddChatInterface {
  return {
    type: "SHOW_MODAL_ADD_CHAT",
    modal: value
  };
}
interface ViewChatInterface{
  type:String,
  chatId:Number|String
}
export function viewChat(chatId:Number|String):ViewChatInterface {
  return { type: "VIEW_CHAT", chatId: chatId };
}
interface FetchChatsInterface{
  type:String,
  chats:Object
}
export function fetchChats(chats:Object):FetchChatsInterface {
  return { type: "FETCH_CHATS", chats: chats };
}
