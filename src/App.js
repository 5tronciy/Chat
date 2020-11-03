import React, { useState } from "react";
import AddChat from "./AddChat";
import Chat from "./Chat";
import ChatList from "./ChatList";
import initialState from "./store/initialState";
import { connect } from "react-redux";
import mapStateToProps from "./store/mapStateToPropsGenerator";
//import axios from "axios";
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
  const currentChat = state.chats[state.currentChat.currentChatId];
  const currentUser = state.userProfile;
  const chats = state.chats;

  /*axios
    .get(`https://github.com/5tronciy/JSON_Server/blob/[main|master]/db.json`)
    .then((res) => {
      const posts = res.data.data.children.map((obj) => obj.data);
      setState({ posts });
    });*/

  store.dispatch({
    type: "SET_USER",
    userProfile: {},
  });

  store.dispatch({
    type: "SET_CURRENT_CHAT",
    currentPage: {},
  });

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
      <ChatList onViewChat={onViewChat} onAddChat={onGoToAddChat} />
      <Chat />
      {modal && <AddChat context={modal} />}
    </div>
  ) : (
    <div>Page Not Found</div>
  );
};

export default connect(mapStateToProps)(Router);
