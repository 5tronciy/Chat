import produce from "immer";
import * as actions from "../actionCreators";

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export type MessageType = {
  time: string;
  from: string;
  text: string;
};

export interface ChatInterface {
  title: string;
  id: string;
  messages: Array<MessageType>;
  draft: string;
  avatar: string;
}

export interface InitialStateInterface {
  [chatId: string]: ChatInterface;
}

const initialState: InitialStateInterface = {
  "777": {
    title: "",
    id: "",
    messages: [],
    draft: "",
    avatar: "",
  },
};

export const chatsReducer = (
  state: InitialStateInterface = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case "DRAFT_CHANGE":
      return produce(state, (draftState: any) => {
        draftState[action.currentChatId].draft = action.message;
      });
    case "SEND_MESSAGE":
      return produce(state, (draftState: any) => {
        draftState[action.currentChatId].messages.push({
          text: draftState[action.currentChatId].draft,
          time: new Date().toISOString(),
          from: action.userProfileId,
        });
        draftState[action.currentChatId].draft = "";
      });
    case "CREATE_CHAT":
      return produce(state, (draftState: any) => {
        draftState[action.id] = {
          title: action.title,
          id: action.id,
          messages: [],
          draft: "",
          avatar: action.avatar,
        };
      });
    case "FETCH_CHATS":
      return action.chats.reduce(
        (chats: InitialStateInterface, chat: ChatInterface) => {
          chats[chat.id] = chat;
          return chats;
        },
        {}
      );
    default:
      return state;
  }
};
