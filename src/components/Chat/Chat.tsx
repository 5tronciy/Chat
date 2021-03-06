import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Chat.module.css";
import Message from "./Message/Message";
import { draftChange, sendMessage } from "../../store/actionCreators";
import {
  getUserId,
  getCurrentChatId,
  getCurrentChat,
} from "../../store/selectors";

const ChatConnected = () => {
  const dispatch = useDispatch();

  const currentChatId = useSelector(getCurrentChatId);

  const currentChat = useSelector(getCurrentChat);

  const userId = useSelector(getUserId);

  const onChangeHandle = (event: any) => {
    dispatch(draftChange(event.currentTarget.value, currentChatId));
  };

  const onSendMessageHandler = (event: any) => {
    event.preventDefault();
    dispatch(sendMessage(currentChatId, userId));
  };

  return (
    <Chat
      currentChat={currentChat}
      onSendMessageHandler={onSendMessageHandler}
      onChangeHandle={onChangeHandle}
    />
  );
};

export const Chat = ({
  currentChat,
  onSendMessageHandler,
  onChangeHandle,
}: any) => {
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
          {currentChat.messages.map((message: any) => (
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

export default ChatConnected;
