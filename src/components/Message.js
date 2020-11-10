import React from "react";
import { getTime } from "./App";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const currentUser = useSelector((state) => state.userProfile);
  const currentChat = useSelector((state) => state.chats[message.from]);
  return (
    <li className={message.from === currentUser.id ? "right" : ""}>
      <div className="message">
        <div className="chat-avatar">
          <img
            src={
              process.env.PUBLIC_URL +
              `/` +
              (message.from === currentUser.id
                ? currentUser.avatar
                : currentChat.avatar)
            }
            alt=""
            className="avatar"
          />
        </div>
        <div className="message-content">
          <div className="chat__message-textWrapper">
            <div className="chat__message-text-content">
              <div>{message.text} </div>
              <div className="chat__message-time">{getTime(message.time)}</div>
            </div>
          </div>
          <div className="conversation-name">
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
