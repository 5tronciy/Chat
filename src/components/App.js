import React, { useEffect } from "react";
import AddChat from "./AddChat";
import Chat from "./Chat";
import ChatList from "./ChatList";
import { useSelector, useDispatch } from "react-redux";
import { fetchChats } from "../store/actionCreators";
import styles from "./App.module.css";

const RouterConnected = () => {
  const url = "http://localhost:3001";
  const dispatch = useDispatch();

  const userProfileId = useSelector((state) => state.userProfile.id);

  useEffect(() => {
    async function fetchData() {
      const chatsResponse = await fetch(url + "/chats/" + userProfileId);
      dispatch(fetchChats(await chatsResponse.json()));
    }
    fetchData();
  }, [dispatch, userProfileId]);

  const toggleModalAddChat = useSelector((state) => state.modal);
  return <Router showModalAddChat={toggleModalAddChat} />;
};

export const Router = ({ showModalAddChat }) => {
  return (
    <div className={styles.wrapper}>
      <ChatList />
      <Chat />
      {showModalAddChat && <AddChat />}
    </div>
  );
};

export default RouterConnected;