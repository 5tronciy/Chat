import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatInList from "./ChatInList";
import { showModalAddChat } from "../store/action_creators";
import styles from "./ChatList.module.css";

const ChatListConnected = () => {
  const chats = useSelector((state) => state.chats);

  const dispatch = useDispatch();

  const onAddChat = () => {
    dispatch(showModalAddChat(true));
  };

  return <ChatList onAddChat={onAddChat} chats={chats} />;
};

export const ChatList = ({ onAddChat, chats }) => {
  return (
    <div className={styles.chats}>
      <div className={styles.listTitleMargins}>
        <span className={styles.listTitle}>Chats</span>
        <div className={styles.addChat}>
          <button className={styles.addChatButton} onClick={onAddChat}>
            Add chat
          </button>
        </div>
      </div>
      <ul className={styles.chatList}>
        {Object.values(chats).map((chat) => (
          <ChatInList chat={chat} key={chat.id + chat.title} />
        ))}
      </ul>
    </div>
  );
};

export default ChatListConnected;
