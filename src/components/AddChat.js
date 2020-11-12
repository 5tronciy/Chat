import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/AddChat.css";
import { useDispatch } from "react-redux";
import {
  showModalAddChat,
  createChat,
  viewChat,
} from "../store/action_creators";

const generateId = () => {
  return Math.random().toString();
};

const AddChat = () => {
  const newChatId = generateId();

  const [newChat, setNewChat] = useState({
    id: newChatId,
    title: "",
    avatar: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setNewChat({ ...newChat, title: event.currentTarget.value });
  };

  const onLoadAvatar = (event) => {
    setNewChat({ ...newChat, avatar: event.currentTarget.value });
  };

  const onAddChatHandler = (event) => {
    event.preventDefault();
    if (newChat.title === 0) {
      return;
    }
    dispatch(createChat(newChatId, newChat.title, newChat.avatar));
    onCloseModalAddChat();
    dispatch(viewChat(newChatId));
  };

  const onCloseModalAddChat = () => {
    dispatch(showModalAddChat(false));
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="addChat">
        <div className="addChat-body">
          <div className="addChat-title">
            <h5>Create New Chat</h5>
            <button
              type="button"
              className="close"
              onClick={onCloseModalAddChat}
            >
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
                  value={newChat.title}
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
                  value={newChat.avatar}
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

export default AddChat;
