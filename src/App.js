import produce from "immer";
import React, { useState } from "react";
import { AddChat } from "./AddChat";
import { Chat } from "./Chat";
import { ChatList } from "./ChatList";

const initialState = {
  userProfile: {
    id: "1",
    nickName: "Alfons",
    avatar: "pahonia.png",
  },
  chats: {
    777: {
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
  },
  currentPage: {
    type: "chat",
    currentChatId: 777,
  },
};

const generateId = () => {
  return Math.random().toString();
};

export const getTime = (isoTime) => {
  const time = new Date(isoTime);
  return `${time.getHours()}:${time.getMinutes().toString().padStart(2, "0")}`;
};

const Router = () => {
  const [state, setState] = useState(initialState);
  const [modal, setModal] = useState(false);
  const currentChat = state.chats[state.currentPage.currentChatId];
  const currentUser = state.userProfile;
  const chats = state.chats;

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

  const onGoToAddChat = () => {
    setModal(true);
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
    setModal(false);
    setState(newState);
  };

  const onCloseModal = () => {
    setModal(false);
  };

  return state.currentPage.type === "chat" ? (
    <div className="wrapper">
      <ChatList
        chats={state.chats}
        onViewChat={onViewChat}
        onAddChat={onGoToAddChat}
      />
      <Chat
        currentUser={currentUser}
        currentChat={currentChat}
        chats={chats}
        onDraftChange={onDraftChange}
        onSendMessage={onSendMessage}
      />
      {modal && <AddChat onAddChat={onAddChat} onCloseModal={onCloseModal} />}
    </div>
  ) : (
    <div>Page Not Found</div>
  );
};

export default Router;
