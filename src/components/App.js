import React, { useEffect } from "react";
import AddChat from "./AddChat";
import Chat from "./Chat";
import ChatList from "./ChatList";
import { useSelector, useDispatch } from "react-redux";
import { fetchChats } from "../store/action_creators";
import styles from "./App.module.css";

const RouterConnected = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function fetchData() {
      const chatsResponse = await fetch("http://localhost:3000/chats");
      dispatch(fetchChats(await chatsResponse.json()));
    }
    fetchData();
  }, [dispatch]);

  const modalAddChat = useSelector((state) => state.modal);
  return <Router modalAddChat={modalAddChat} />;
};

export const Router = ({ modalAddChat }) => {
  return (
    <div className={styles.wrapper}>
      <ChatList />
      <Chat />
      {modalAddChat && <AddChat />}
    </div>
  );
};

export default RouterConnected;
