export function modalReducer(state = false, action) {
  switch (action.type) {
    case "SHOW_MODAL_ADD_CHAT":
      return action.modal;
    default:
      return state;
  }
}
