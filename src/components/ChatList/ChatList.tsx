import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatInList from "./ChatInList/ChatInList";
import { showModalAddChat } from "../../store/actionCreators";
import styles from "./ChatList.module.css";
import { getChats } from "../../store/selectors";

const ChatListConnected = () => {
  const chats = useSelector(getChats);

  const dispatch = useDispatch();

  const onAddChat = () => {
    dispatch(showModalAddChat(true));
  };

  return <ChatList onAddChat={onAddChat} chats={chats} />;
};

export const ChatList = ({ onAddChat, chats }: any) => {
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
        {Object.values(chats).map((chat: any) => (
          <ChatInList chat={chat} key={chat.id + chat.title} />
        ))}
      </ul>
    </div>
  );
};

export default ChatListConnected;
