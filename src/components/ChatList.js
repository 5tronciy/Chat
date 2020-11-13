import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatInList from "./ChatInList";
import { showModalAddChat } from "../store/action_creators";
import styles from "./ChatList.module.css";

const ChatList = () => {
  const chats = useSelector((state) => state.chats);

  const dispatch = useDispatch();

  const onAddChat = () => {
    dispatch(showModalAddChat(true));
  };

  return (
    <div className={styles.chats}>
      <div className={styles.listTitleMargins}>
        <div id="addChat">
          <button className={styles.addChat} onClick={onAddChat}>
            Add chat
          </button>
        </div>
        <h4 className={styles.listTitle}>Chats</h4>
      </div>
      <ul className={styles.chatList}>
        {Object.values(chats).map((chat) => (
          <ChatInList chat={chat} key={chat.id + chat.title} />
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
