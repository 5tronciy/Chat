import produce from "immer";
import React, { useState } from "react";
import { AddChat } from "./AddChat";
import { Chat } from "./Chat";
import { ChatList } from "./ChatList";
import initialState from "./store/initialState";
import { connect, Provider } from "react-redux";
import mapStateToProps from "./store/mapStateToPropsGenerator";
import axios from "axios";
import store from "./store/store";

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

  axios
    .get(`https://github.com/5tronciy/JSON_Server/blob/[main|master]/db.json`)
    .then((res) => {
      const posts = res.data.data.children.map((obj) => obj.data);
      setState({ posts });
    });

  store.dispatch({
    type: "SET_USER",
    userProfile: {},
  });

  store.dispatch({
    type: "SET_CURRENT_CHAT",
    currentPage: {},
  });

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
    <Provider store={store}>
      <div className="wrapper">
        <ChatList
          context={chats}
          onViewChat={onViewChat}
          onAddChat={onGoToAddChat}
        />
        <Chat
          context={store}
          onDraftChange={onDraftChange}
          onSendMessage={onSendMessage}
        />
        {modal && <AddChat context={modal} />}
      </div>
    </Provider>
  ) : (
    <div>Page Not Found</div>
  );
};

export default connect(mapStateToProps)(Router);
