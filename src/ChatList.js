import React from "react";
import { connect, Provider } from "react-redux";
import store from "./store/store";
import mapStateToProps from "./store/mapStateToPropsGenerator";

const ChatList = ({ chats, onViewChat, onAddChat }) => {
  return (
    <Provider store={store}>
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
          ))}
        </ul>
      </div>
    </Provider>
  );
};

export default connect(mapStateToProps)(ChatList);
