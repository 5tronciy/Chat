import React from "react";
import { getTime } from "./Utils";
import { useSelector } from "react-redux";
import styles from "./Message.module.css";
import { getCurrentUser, getChatOfMessage } from "../store/selectors";

const MessageConnected = ({ message }) => {
  const currentUser = useSelector(getCurrentUser);
  const currentChat = useSelector(getChatOfMessage(message));
  return (
    <Message
      message={message}
      currentUser={currentUser}
      currentChat={currentChat}
    />
  );
};

export const Message = ({ message, currentUser, currentChat }) => {
  return (
    <li className={message.from === currentUser.id ? styles.right : ""}>
      <div className={styles.message}>
        <div className={styles.avatar}>
          <img
            src={
              process.env.PUBLIC_URL +
              `/` +
              (message.from === currentUser.id
                ? currentUser.avatar
                : currentChat.avatar)
            }
            alt=""
            className={styles.avatarImage}
          />
        </div>
        <div className={styles.messageContent}>
          <div className={styles.messageTextWrapper}>
            <div className={styles.messageTextContent}>
              <span>{message.text} </span>
              <div className={styles.messageTime}>{getTime(message.time)}</div>
            </div>
          </div>
          <div className={styles.conversationName}>
            {message.from === currentUser.id
              ? currentUser.nickName
              : currentChat.title}
          </div>
        </div>
      </div>
    </li>
  );
};
export default MessageConnected;
