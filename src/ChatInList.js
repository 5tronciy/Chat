import React from "react";
import { useDispatch } from "react-redux";

const ChatInList = ({ chat }) => {
  const dispatch = useDispatch();

  const onViewChat = (chatId) => {
    dispatch({ type: "VIEW_CHAT", chatId: chatId });
  };

  return (
    <li key={chat.id}>
      <div
        className="chatTitleContainer"
        onClick={() => {
          onViewChat(chat.id);
        }}
      >
        <div className="media">
          <div className="chat-img">
            <img
              className="avatar"
              src={process.env.PUBLIC_URL + `/` + chat.avatar}
              alt="chat-img"
            />
          </div>
          <div>
            <h5 className="chatTitle">{chat.title}</h5>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ChatInList;
