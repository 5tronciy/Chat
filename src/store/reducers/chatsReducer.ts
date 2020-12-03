import produce from "immer";
import * as actions from  "../actionCreators"

type InferValueTypes<T> = T extends {[key:string]: infer U}
? U
: never;

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

interface initialStateInterface{

}

const initialState:initialStateInterface = 
  {777: {
    title: "nexta",
    id: "777",
    messages: [
      { time: "2020-09-30T20:00", from: "777", text: "Hello" },
      { time: "2020-08-30T24:00", from: "888", text: "Hi" },
    ],
    draft: "",
    avatar: "nexta.png",
  },
  888: {
    title: "tutBY",
    id: "888",
    messages: [{ time: "2020-08-30T24:00", from: "888", text: "Hi" }],
    draft: "",
    avatar: "tutby.png",
  },
}

export function chatsReducer(state = initialState, action:ActionTypes) {
  switch (action.type) {
    case "DRAFT_CHANGE":
      return produce(state, (draftState:any) => {
        draftState(action.currentChatId).draft = action.message;
      });
    case "SEND_MESSAGE":
      return produce(state, (draftState:any) => {
        draftState(action.currentChatId).messages.push({
          text: draftState(action.currentChatId).draft,
          time: new Date().toISOString(),
          from: action.userProfileId,
        });
        draftState(action.currentChatId).draft = "";
      });
    case "CREATE_CHAT":
      return {
        ...state,
        [Number(action.id)]: {
          title: action.title,
          id: action.id,
          messages: [],
          draft: "",
          avatar: action.avatar,
        },
      };
    // case "FETCH_CHATS":
    //   return action.chats.reduce((chats:any, chat:any) => {
    //     chats[chat.id] = chat;
    //     return chats;
    //   }, {});
    default:
      return state;
  }
}
