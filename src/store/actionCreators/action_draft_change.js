function draftChange(value, currentChatId) {
  return { type: "DRAFT_CHANGE", message: value, currentChatId };
}

export default draftChange;
