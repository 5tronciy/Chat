import produce from "immer";
import React, { useState } from "react";
import { AddChat } from "./AddChat";
import { Chat } from "./Chat";
import { ChatList } from "./ChatList";

const initialState = {
  userProfile: {
    id: "1",
    nickName: "Alfons",
    avatar: "img",
  },
  chats: {
    777: {
      title: "nexta",
      id: "777",
      messages: [{ time: "2020-09-30T20:00", from: "nexta", text: "Hello" }],
      draft: "",
      avatar: "nexta.png",
    },
    888: {
      title: "tutBY",
      id: "888",
      messages: [{ time: "2020-08-30T24:00", from: "tutBY", text: "Hi" }],
      draft: "",
      avatar: "tutby.png",
    },
  },
  currentPage: {
    type: "chatList",
    currentChatId: null,
  },
};

const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

const generateId = () => {
  return Math.random().toString();
};

export const getTime = (isoTime) => {
  const time = new Date(isoTime);
  return `${time.getHours()}:${time
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${time.getDate()} ${months[time.getMonth()]}`;
};

const Router = () => {
  const [state, setState] = useState(initialState);
  const currentChat = state.chats[state.currentPage.currentChatId];
  const onDraftChange = (text) => {
    const newState = produce(state, (draftState) => {
      draftState.chats[state.currentPage.currentChatId].draft = text;
    });
    setState(newState);
  };
  const onSendMessage = () => {
    const newState = produce(state, (draftState) => {
      draftState.chats[state.currentPage.currentChatId].messages.push({
        text: draftState.chats[state.currentPage.currentChatId].draft,
        time: new Date().toISOString(),
        from: draftState.userProfile.id,
      });
      draftState.chats[state.currentPage.currentChatId].draft = "";
    });
    setState(newState);
  };
  const onViewChat = (chatId) => {
    const newState = {
      ...state,
      currentPage: { currentChatId: chatId, type: "chat" },
    };
    setState(newState);
  };
  const onBack = () => {
    const newState = { ...state, currentPage: { type: "chatList" } };
    setState(newState);
  };

  const onGoToAddChat = () => {
    const newState = { ...state, currentPage: { type: "addChat" } };
    setState(newState);
  };

  const onAddChat = (chatName) => {
    const id = generateId();
    const newState = {
      ...state,
      chats: {
        ...state.chats,
        [id]: { title: chatName, id: id, messages: [], draft: "" },
      },
      currentPage: { type: "chat", currentChatId: id },
    };
    setState(newState);
  };

  return state.currentPage.type === "chat" ? (
    <Chat
      currentChat={currentChat}
      onDraftChange={onDraftChange}
      onSendMessage={onSendMessage}
      onBack={onBack}
    />
  ) : state.currentPage.type === "chatList" ? (
    <ChatList
      chats={state.chats}
      onViewChat={onViewChat}
      onAddChat={onGoToAddChat}
    />
  ) : state.currentPage.type === "addChat" ? (
    <AddChat onBack={onBack} onAddChat={onAddChat} />
  ) : (
    <div>Page Not Found</div>
  );
};

export default Router;
