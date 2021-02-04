import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import AddChat from "./../../components/AddChat/AddChat";
import Chat from "./../../components/Chat/Chat";
import ChatList from "./../../components/ChatList/ChatList";
import { fetchChats } from "../../store/actionCreators";
import styles from "./HomePage.module.css";
import serverUrl from "../../Server";
import { getUserId, getModalAddChatState } from "../../store/selectors";

const RouterConnected = () => {
  const dispatch = useDispatch();

  const userId = useSelector(getUserId);

  useEffect(() => {
    async function fetchData() {
      const chatsResponse = await fetch(serverUrl + "/chats/" + userId);
      dispatch(fetchChats(await chatsResponse.json()));
    }
    fetchData();
  }, [dispatch, userId]);

  const toggleModalAddChat = useSelector(getModalAddChatState);
  return <Router showModalAddChat={toggleModalAddChat} />;
};

export const Router = ({ showModalAddChat }: any) => {
  return (
    <div className={styles.wrapper}>
      <ChatList />
      <Chat />
      {showModalAddChat && <AddChat />}
    </div>
  );
};

export default RouterConnected;
