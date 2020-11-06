import React from "react";
import { useDispatch } from "react-redux";
import { viewChat } from "./store/action_creators";

const ChatInList = ({ chat }) => {
  const dispatch = useDispatch();

  const onViewChat = (chatId) => {
    dispatch(viewChat(chatId));
  };

  return (
    <li>
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
