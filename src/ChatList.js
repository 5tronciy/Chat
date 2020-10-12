import React from "react";

export const ChatList = ({ chats, onViewChat, onAddChat }) => {
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
          <li>
            <div
              className="chatTitleContainer"
              onClick={() => {
                onViewChat(chat.id);
              }}
              key={chat.id}
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
        ))}
      </ul>
    </div>
  );
};
