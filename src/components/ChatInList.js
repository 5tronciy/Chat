import React from "react";
import { useDispatch } from "react-redux";
import { viewChat } from "../store/action_creators";
import styles from "./ChatInList.module.css";

const ChatInList = ({ chat }) => {
  const dispatch = useDispatch();

  const onViewChat = (chatId) => {
    dispatch(viewChat(chatId));
  };

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

export default ChatInList;
