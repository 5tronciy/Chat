import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import styles from "./Chat.module.css";
import Message from "./Message";
import { draftChange, sendMessage } from "../store/action_creators";
import initialState from "../store/initialState";
import { chatsReducer } from "../store/reducers/chatsReducer";

const Chat = () => {
  const [state, dispatch] = useReducer(chatsReducer, initialState);

  const currentChatId = useSelector(() => state.currentChat.currentChatId);

  const currentChat = useSelector(() => state.chats[currentChatId]);

  const userProfileId = useSelector(() => state.userProfile.id);

  const onChangeHandle = (event) => {
    dispatch(draftChange(event.currentTarget.value, currentChatId));
  };

  const onSendMessageHandler = (event) => {
    event.preventDefault();
    dispatch(sendMessage(currentChatId, userProfileId));
  };

  return (
    <div className={styles.chat}>
      <div className={styles.chatTitle}>
        <div className={styles.media}>
          <div className={styles.image}>
            <img
              className={styles.avatar}
              src={process.env.PUBLIC_URL + `/` + currentChat.avatar}
              alt="chat-img"
            />
          </div>
          <div>
            <h5 className={styles.chatTitleText}>{currentChat.title}</h5>
          </div>
        </div>
      </div>
      <div className={styles.conversation}>
        <ul className={styles.messages}>
          {currentChat.messages.map((message) => (
            <Message message={message} key={message.time + message.from} />
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <form onSubmit={onSendMessageHandler}>
          <div className={styles.footerInput}>
            <div className={styles.footerInputWidth}>
              <input
                type="text"
                placeholder="Enter Message..."
                className={styles.formControl}
                value={currentChat.draft}
                onChange={onChangeHandle}
              />
            </div>
            <div className={styles.footerButtons}>
              <button type="submit" className={styles.buttonPrimary}>
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
