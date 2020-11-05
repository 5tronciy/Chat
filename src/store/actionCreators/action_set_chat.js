function setCurrentChat(value) {
  return {
    type: "SET_CURRENT_CHAT",
    currentChat: value,
  };
}

export default setCurrentChat;
