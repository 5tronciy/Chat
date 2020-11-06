import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Chat.css";
import Message from "./Message";
import { draftChange, sendMessage } from "./store/action_creators";

const Chat = () => {
  const onChangeHandle = (event) => {
    dispatch(draftChange(event.currentTarget.value));
  };

  const currentChatId = useSelector((state) => state.currentChat.currentChatId);

  const onSendMessageHandler = (event) => {
    event.preventDefault();
    dispatch(sendMessage(currentChatId));
  };

  const currentChat = useSelector((state) => state.chats[currentChatId]);

  const dispatch = useDispatch();

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
            <Message message={message} key={message.time + message.from} />
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

export default Chat;
