import produce from "immer";
import React, { useState } from "react";
import "./App.css";

const initialState = {
  userProfile: {
    id: "1",
    nickName: "Alfons",
    avatar: "img",
  },
  chats: {
    777: {
      title: "nexta",
      id: "777",
      messages: [{ time: "2020-09-30T20:00", from: "nexta", text: "Hello" }],
      draft: "",
      avatar: "nexta.png"
    },
    888: {
      title: "tutBY",
      id: "888",
      messages: [{ time: "2020-08-30T24:00", from: "tutBY", text: "Hi" }],
      draft: "",
      avatar: "tutby.png"
    },
  },
  currentPage: {
    type: "chatList",
    currentChatId: null,
  },
};

const months = [
  "январь",
  "февраль",
  "март",
  "апрель",
  "май",
  "июнь",
  "июль",
  "август",
  "сентябрь",
  "октябрь",
  "ноябрь",
  "декабрь",
];

const generateId = () => {
  return Math.random().toString();
};

const getTime = (isoTime) => {
  const time = new Date(isoTime);
  return `${time.getHours()}:${time
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${time.getDate()} ${months[time.getMonth()]}`;
};

const ChatList = ({ chats, onViewChat, onAddChat }) => {
  return (
    <div className="Chats">
      <div className="pxt-4">
        <div id="addChat">
          <button className="chatList_addChat" onClick={onAddChat}>Add chat</button>
        </div>
        <h4 className="mb-4">Chats</h4>
      </div>
      <ul id="chat-list">
      {Object.values(chats).map((chat) => (
        <li>
          <div className="chat-title" onClick={() => {onViewChat(chat.id);}} key={chat.id}>
            <div className="media">
              <div className="chat-img">
					      <img className="avatar" src={process.env.PUBLIC_URL + `/` + chat.avatar} alt="chat-img" />
					    </div>
              <div>
				        <h5>{chat.title}</h5>	
              </div>
            </div>
          </div>
        </li>
      ))}
      </ul>
      
    </div>
  );
};

const Chat = ({ currentChat, onDraftChange, onSendMessage, onBack }) => {
  const onChangeHandle = (event) => {
    const text = event.currentTarget.value;
    onDraftChange(text);
  };

  const onSendMessageHandler = (event) => {
    event.preventDefault();
    onSendMessage();
  };

  return (
    <div className="App">
      <button onClick={onBack} type="button">{`<`}</button>
      <div>{currentChat.title}</div>
      <div>
        {currentChat.messages.map((message) => (
          <div key={message.time + message.from}>
            {message.text} {getTime(message.time)}
          </div>
        ))}
      </div>
      <form onSubmit={onSendMessageHandler}>
        <input
          type="text"
          value={currentChat.draft}
          onChange={onChangeHandle}
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

const AddChat = ({ onBack, onAddChat }) => {
  const [chatName, setChatName] = useState("");
  const onChangeHandler = (event) => {
    const name = event.currentTarget.value;
    setChatName(name);
  };

  const onAddChatHandler = (event) => {
    event.preventDefault();
    onAddChat(chatName);
  };
  return (
    <>
      <button onClick={onBack} type="button">{`<`}</button>
      <form onSubmit={onAddChatHandler}>
        <input type="text" value={chatName} onChange={onChangeHandler} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

const Router = () => {
  const [state, setState] = useState(initialState);
  const currentChat = state.chats[state.currentPage.currentChatId];
  const onDraftChange = (text) => {
    const newState = produce(state, (draftState) => {
      draftState.chats[state.currentPage.currentChatId].draft = text;
    });
    setState(newState);
  };
  const onSendMessage = () => {
    const newState = produce(state, (draftState) => {
      draftState.chats[state.currentPage.currentChatId].messages.push({
        text: draftState.chats[state.currentPage.currentChatId].draft,
        time: new Date().toISOString(),
        from: draftState.userProfile.id,
      });
      draftState.chats[state.currentPage.currentChatId].draft = "";
    });
    setState(newState);
  };
  const onViewChat = (chatId) => {
    const newState = {
      ...state,
      currentPage: { currentChatId: chatId, type: "chat" },
    };
    setState(newState);
  };
  const onBack = () => {
    const newState = { ...state, currentPage: { type: "chatList" } };
    setState(newState);
  };

  const onGoToAddChat = () => {
    const newState = { ...state, currentPage: { type: "addChat" } };
    setState(newState);
  };

  const onAddChat = (chatName) => {
    const id = generateId();
    const newState = {
      ...state,
      chats: {
        ...state.chats,
        [id]: { title: chatName, id: id, messages: [], draft: "" },
      },
      currentPage: { type: "chat", currentChatId: id },
    };
    setState(newState);
  };

  return state.currentPage.type === "chat" ? (
    <Chat
      currentChat={currentChat}
      onDraftChange={onDraftChange}
      onSendMessage={onSendMessage}
      onBack={onBack}
    />
  ) : state.currentPage.type === "chatList" ? (
    <ChatList
      chats={state.chats}
      onViewChat={onViewChat}
      onAddChat={onGoToAddChat}
    />
  ) : state.currentPage.type === "addChat" ? (
    <AddChat onBack={onBack} onAddChat={onAddChat} />
  ) : (
    <div>Page Not Found</div>
  );
};

export default Router;
