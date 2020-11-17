import React from "react";
import { getTime } from "./module";
import { useSelector } from "react-redux";
import styles from "./Message.module.css";

const Message = ({ message }) => {
  const currentUser = useSelector((state) => state.userProfile);
  const currentChat = useSelector((state) => state.chats[message.from]);
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
export default Message;
