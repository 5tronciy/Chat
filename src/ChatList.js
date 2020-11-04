import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatInList from "./ChatInList";
import addChatModal from "./store/actionCreators/action_add_chat_modal";

const ChatList = () => {
  const chats = useSelector((state) => state.chats);

  const dispatch = useDispatch();

  const onAddChat = () => {
    dispatch(addChatModal(true));
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
          <ChatInList chat={chat} />
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
