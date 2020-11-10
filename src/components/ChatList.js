import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatInList from "./ChatInList";
import { showModalAddChat } from "../store/action_creators";

const ChatList = () => {
  const chats = useSelector((state) => state.chats);

  const dispatch = useDispatch();

  const onAddChat = () => {
    dispatch(showModalAddChat(true));
  };

  return (
    <div className="chats">
      <div className="listTitle-margins">
        <div id="addChat">
          <button className="chatList_addChat" onClick={onAddChat}>
            Add chat
          </button>
        </div>
        <h4 className="listTitle">Chats</h4>
      </div>
      <ul className="chatList">
        {Object.values(chats).map((chat) => (
          <ChatInList chat={chat} key={chat.id + chat.title} />
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
