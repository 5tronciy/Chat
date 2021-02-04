import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./AddChat.module.css";
import { useDispatch } from "react-redux";
import { showModalAddChat, createChat } from "../../store/actionCreators";
import { generateId } from "../Utils";
import { ChatInterface } from "../../store/reducers/chatsReducer";

const portal = document.getElementById("portal") as HTMLElement;

const AddChatConnected = () => {
  const [newChat, setNewChat] = useState({
    title: "",
    avatar: "",
    id: "",
    messages: [],
    draft: "",
  });

  const dispatch = useDispatch();

  const onChangeHandler = (event: any) => {
    setNewChat({ ...newChat, title: event.currentTarget.value });
  };

  const onLoadAvatar = (event: any) => {
    setNewChat({ ...newChat, avatar: event.currentTarget.value });
  };

  const onAddChatHandler = (event: any) => {
    event.preventDefault();
    if (newChat.title === "") {
      return;
    }
    const newChatId = generateId();
    dispatch(createChat(newChatId, newChat.title, newChat.avatar));
    onCloseModalAddChat();
  };

  const onCloseModalAddChat = () => {
    dispatch(showModalAddChat(false));
  };
  return (
    <AddChat
      onCloseModalAddChat={onCloseModalAddChat}
      onAddChatHandler={onAddChatHandler}
      newChat={newChat}
      onChangeHandler={onChangeHandler}
      onLoadAvatar={onLoadAvatar}
    />
  );
};

export interface Props {
  onCloseModalAddChat: () => void;
  onAddChatHandler: (event: any) => void;
  newChat: ChatInterface;
  onChangeHandler: (event: any) => void;
  onLoadAvatar: (event: any) => void;
}

export const AddChat = ({
  onCloseModalAddChat,
  onAddChatHandler,
  newChat,
  onChangeHandler,
  onLoadAvatar,
}: Props) => {
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
    portal
  );
};

export default AddChatConnected;
