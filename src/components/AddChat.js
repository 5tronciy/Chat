import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./AddChat.module.css";
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
    <div className={styles.modal}>
      <div className={styles.addChat}>
        <div className={styles.addChatBody}>
          <div className={styles.addChatTitle}>
            <h5 className={styles.addChatTitleText}>Create New Chat</h5>
            <button
              type="button"
              className={styles.close}
              onClick={onCloseModalAddChat}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className={styles.addChatDescription}>
            <form onSubmit={onAddChatHandler}>
              <div className={styles.formGroup}>
                <label className={styles.inputLabel}>Chat Name</label>
                <input
                  placeholder="Enter Chat Name"
                  type="text"
                  value={newChat.title}
                  onChange={onChangeHandler}
                  className={styles.formControl}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Avatar</label>
                <input
                  type="file"
                  className={styles.formControl}
                  accept=".jpg, .jpeg, .png"
                  value={newChat.avatar}
                  onChange={onLoadAvatar}
                />
              </div>
            </form>
          </div>
          <div className={styles.modalFooter}>
            <button
              onClick={onAddChatHandler}
              className={styles.createChatButton}
            >
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
