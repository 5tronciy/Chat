function setCurrentChat(value) {
  return {
    type: "SET_CURRENT_CHAT",
    currentPage: value,
  };
}

export default setCurrentChat;
