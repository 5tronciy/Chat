import React, { useEffect } from "react";
import AddChat from "./AddChat";
import Chat from "./Chat";
import ChatList from "./ChatList";
import { useSelector, useDispatch } from "react-redux";
import { fetchChats } from "../store/action_creators";

export const getTime = (isoTime) => {
  const time = new Date(isoTime);
  return `${time.getHours()}:${time.getMinutes().toString().padStart(2, "0")}`;
};

const Router = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const chatsResponse = await fetch("http://localhost:3000/chats");
    dispatch(fetchChats(await chatsResponse.json()));
  }, [dispatch]);

  const modalAddChat = useSelector((state) => state.modalAddChat);
  return (
    <div className="wrapper">
      <ChatList />
      <Chat />
      {modalAddChat && <AddChat />}
    </div>
  );
};

export default Router;
