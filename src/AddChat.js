import React, { useState } from "react";
import "./AddChat.css";

export const AddChat = ({ onAddChat }) => {
  const [chatName, setChatName] = useState("");

  const onChangeHandler = (event) => {
    const name = event.currentTarget.value;
    setChatName(name);
  };

  const onAddChatHandler = (event) => {
    event.preventDefault();
    onAddChat(chatName);
  };

  const onClose = () => {};

  return (
    <React.Fragment>
      <div className="modal">
        <div className="addChat">
          <div className="addChat-body">
            <div className="addChat-title">
              <h5>Create New Chat</h5>
              <button type="button" className="close" onClick={onClose}>
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
                  <input type="file" className="form-control" />
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
      </div>
    </React.Fragment>
  );
};
