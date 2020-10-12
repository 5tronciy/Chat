import React from "react";
import { getTime } from "./App";

export const Chat = ({ currentChat, onDraftChange, onSendMessage }) => {
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
          <div>
            {currentChat.messages.map((message) => (
              <li>
                <div key={message.time + message.from}>
                  {message.text} {getTime(message.time)}
                </div>
              </li>
            ))}
          </div>
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
