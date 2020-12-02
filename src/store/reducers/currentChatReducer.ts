import produce from "immer";

const initialState =  {
    currentChatId: 777,
  };

export function currentChatReducer(state = initialState, action:any) {
  switch (action.type) {
    case "VIEW_CHAT":
    case "CREATE_CHAT":
      return produce(state, (draftState:any) => {
        draftState.currentChatId = action.chatId;
      });
    default:
      return state;
  }
}
