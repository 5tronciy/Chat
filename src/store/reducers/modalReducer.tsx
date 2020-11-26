export function modalReducer(state = false, action:any) {
  switch (action.type) {
    case "SHOW_MODAL_ADD_CHAT":
      return action.modal;
    default:
      return state;
  }
}
