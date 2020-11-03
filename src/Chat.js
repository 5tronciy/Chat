import React from "react";
import { getTime } from "./App";
import { connect, Provider } from "react-redux";
import "./Chat.css";
import mapStateToProps from "./store/mapStateToPropsGenerator";
import store from "./store/store";

const Chat = ({ onDraftChange, onSendMessage }) => {
  const onChangeHandle = (event) => {
    const text = event.currentTarget.value;
    onDraftChange(text);
  };

  const onSendMessageHandler = (event) => {
    event.preventDefault();
    onSendMessage();
  };

  return (
    <Provider store={store}>
      <div className="chat">
        <div className="chat__chatTitle">
          <div className="chat__media">
            <div className="chat-img">
              <img
                className="avatar"
                src={process.env.PUBLIC_URL + `/` + store.currentChat.avatar}
                alt="chat-img"
              />
            </div>
            <div>
              <h5 className="chatTitle">{store.currentChat.title}</h5>
            </div>
          </div>
        </div>
        <div className="chat__conversation">
          <ul className="chat__messages">
            {store.currentChat.messages.map((message) => (
              <li
                key={message.time + message.from}
                className={message.from === store.currentUser.id ? "right" : ""}
              >
                <div className="message">
                  <div className="chat-avatar">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/` +
                        (message.from === store.currentUser.id
                          ? store.currentUser.avatar
                          : store.chats[message.from].avatar)
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
                      {message.from === store.currentUser.id
                        ? store.currentUser.nickName
                        : store.chats[message.from].title}
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
                  value={store.currentChat.draft}
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
    </Provider>
  );
};

export default connect(mapStateToProps)(Chat);
