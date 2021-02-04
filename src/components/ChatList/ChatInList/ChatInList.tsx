import React from "react";
import { useDispatch } from "react-redux";
import { viewChat } from "../../../store/actionCreators";
import styles from "./ChatInList.module.css";

const ChatInListConnected = ({ chat }: any) => {
  const dispatch = useDispatch();

  const onViewChat = (chatId: any) => {
    dispatch(viewChat(chatId));
  };

  return <ChatInList chat={chat} onViewChat={onViewChat} />;
};

export const ChatInList = ({ chat, onViewChat }: any) => {
  return (
    <li>
      <div
        className={styles.chatTitleContainer}
        onClick={() => {
          onViewChat(chat.id);
        }}
      >
        <div className={styles.media}>
          <div className={styles.chatImage}>
            <img
              className={styles.avatar}
              src={process.env.PUBLIC_URL + `/` + chat.avatar}
              alt="chat-img"
            />
          </div>
          <div>
            <h5 className={styles.chatTitle}>{chat.title}</h5>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ChatInListConnected;
