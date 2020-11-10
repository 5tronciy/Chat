import React, { useEffect } from "react";
import AddChat from "./AddChat";
import Chat from "./Chat";
import ChatList from "./ChatList";

import { useSelector } from "react-redux";

export const getTime = (isoTime) => {
  const time = new Date(isoTime);
  return `${time.getHours()}:${time.getMinutes().toString().padStart(2, "0")}`;
};

const Router = () => {
  useEffect(async () => {
    const chatsResponse = await fetch("http://localhost:3000/chats");
    dispatch(fetchChats(), await chatsResponse.json();
  }, []);

  const modal = useSelector((state) => state.modal);
  return (
    <div className="wrapper">
      <ChatList />
      <Chat />
      {modal && <AddChat />}
    </div>
  );
};

export default Router;
