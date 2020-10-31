import React from "react";
import { getTime } from "./App";

import "./Chat.css";

export const Chat = ({
  currentUser,
  currentChat,
  chats,
  onDraftChange,
  onSendMessage,
}) => {
  const onChangeHandle = (event) => {
    const text = event.currentTarget.value;
    onDraftChange(text);
  };

  const onSendMessageHandler = (event) => {
    event.preventDefault();
    onSendMessage();
  };

  return (
    <div className="chat">
      <div className="chat__chatTitle">
        <div className="chat__media">
          <div className="chat-img">
            <img
              className="avatar"
              src={process.env.PUBLIC_URL + `/` + currentChat.avatar}
              alt="chat-img"
            />
          </div>
          <div>
            <h5 className="chatTitle">{currentChat.title}</h5>
          </div>
        </div>
      </div>
      <div className="chat__conversation">
        <ul className="chat__messages">
          {currentChat.messages.map((message) => (
            <li
              key={message.time + message.from}
              className={message.from === currentUser.id ? "right" : ""}
            >
              <div className="message">
                <div className="chat-avatar">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `/` +
                      (message.from === currentUser.id
                        ? currentUser.avatar
                        : chats[message.from].avatar)
                    }
                    alt=""
                    className="avatar"
                  />
                </div>
                <div className="message-content">
                  <div className="chat__message-textWrapper">
                    <div className="chat__message-text-content">
                      <div>{message.text} </div>
                      <div className="chat__message-time">
                        {getTime(message.time)}
                      </div>
                    </div>
                  </div>
                  <div className="conversation-name">
                    {message.from === currentUser.id
                      ? currentUser.nickName
                      : chats[message.from].title}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="chat__footer">
        <form onSubmit={onSendMessageHandler}>
          <div className="chat__footer-input">
            <div className="chat__footer-inputWidth">
              <input
                type="text"
                placeholder="Enter Message..."
                className="form-control"
                value={currentChat.draft}
                onChange={onChangeHandle}
              />
            </div>
            <div className="chat__footer-buttons">
              <button type="submit" className="button-primary">
                {">"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
