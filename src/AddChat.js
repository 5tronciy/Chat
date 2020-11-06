import React from "react";
import ReactDOM from "react-dom";
import "./AddChat.css";
import { useSelector, useDispatch } from "react-redux";
import {
  chatNameChange,
  loadAvatar,
  showModalAddChat,
  createChat,
} from "./store/action_creators";

const generateId = () => {
  return Math.random().toString();
};

const AddChat = () => {
  const newChatId = generateId();
  const chats = useSelector((state) => state.chats);

  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    dispatch(chatNameChange(event.currentTarget.value));
  };

  const onLoadAvatar = (event) => {
    dispatch(loadAvatar(event.currentTarget.value));
  };

  const onAddChatHandler = (event) => {
    event.preventDefault();
    if (chats.draft.title === 0) {
      return;
    }
    dispatch(createChat(newChatId));
  };

  const onCloseModal = () => {
    dispatch(showModalAddChat(false));
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
                  value={chats.draft.title}
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
                  value={chats.draft.avatar}
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
