function sendMessage(currentChatId) {
  return { type: "SEND_MESSAGE", currentChatId };
}

export default sendMessage;
