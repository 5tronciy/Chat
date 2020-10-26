import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./AddChat.css";

export const AddChat = ({ onAddChat, onCloseModal }) => {
  const [chatName, setChatName] = useState("");
  const [avatar, setAvatar] = useState("");

  const onChangeHandler = (event) => {
    const name = event.currentTarget.value;
    setChatName(name);
  };

  const onLoadAvatar = (event) => {
    const avatar = event.currentTarget.value;
    setAvatar(avatar);
  };

  const onAddChatHandler = (event) => {
    event.preventDefault();
    if (chatName.length === 0) {
      return;
    }
    onAddChat(chatName, avatar);
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="addChat">
        <div className="addChat-body">
          <div className="addChat-title">
            <h5>Create New Chat</h5>
            <button type="button" className="close" onClick={onCloseModal}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="addChat-description">
            <form onSubmit={onAddChatHandler}>
              <div className="form-group">
                <label>Chat Name</label>
                <input
                  placeholder="Enter Chat Name"
                  type="text"
                  value={chatName}
                  onChange={onChangeHandler}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Avatar</label>
                <input
                  type="file"
                  className="form-control"
                  accept=".jpg, .jpeg, .png"
                  value={avatar}
                  onChange={onLoadAvatar}
                />
              </div>
            </form>
          </div>
          <div className="modalFooter">
            <button onClick={onAddChatHandler} className="createChat-button">
              Create Chat
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
