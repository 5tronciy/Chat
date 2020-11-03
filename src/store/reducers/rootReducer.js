import initialState from "../initialState";

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case "SET_CURRENT_CHAT":
      return { ...state, currentPage: action.currentPage };
    case "ADD_CHAT":
      return { ...state, modal: action.modal };
    default:
      return state;
  }
}
export default rootReducer;
