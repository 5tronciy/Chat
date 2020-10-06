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
    },
    888: {
      title: "tutBY",
      id: "888",
      messages: [{ time: "2020-08-30T24:00", from: "tutBY", text: "Hi" }],
      draft: "",
    },
  },
  currentChatId: null,
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

const getTime = (isoTime) => {
  const time = new Date(isoTime);
  return `${time.getHours()}:${time
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${time.getDate()} ${months[time.getMonth()]}`;
};

const Chat = ({ currentChat, onDraftChange, onSendMessage }) => {
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
      <div>{currentChat.title}</div>
      <div>
        {currentChat.messages.map((message) => (
          <div>
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

const ChatList = ({chats, onViewChat}) => {
  return (
    <div>
      {Object.values(chats).map((chat) => (
        <div onClick={()=>{onViewChat(chat.id)}}>{chat.title}</div>
      ))}
    </div>
  );
};

const Router = () => {
  const [state, setState] = useState(initialState);
  const currentChat = state.chats[state.currentChatId];
  const onDraftChange = (text) => {
    const newState = produce(state, (draftState) => {
      draftState.chats[state.currentChatId].draft = text;
    });
    setState(newState);
  };
  const onSendMessage = () =>{
    const newState = produce(state, (draftState) => {
      draftState.chats[state.currentChatId].messages.push({
        text: draftState.chats[state.currentChatId].draft,
        time: new Date().toISOString(),
        from: draftState.userProfile.id,
      });
      draftState.chats[state.currentChatId].draft = "";
    });
    setState(newState);
  }
  const onViewChat = (chatId) => {
    const newState = {...state, currentChatId:chatId}
    setState(newState);
  }
  return state.currentChatId !== null ? (
    <Chat currentChat={currentChat} onDraftChange={onDraftChange} onSendMessage={onSendMessage}/>
  ) : (
    <ChatList chats={state.chats} onViewChat={onViewChat}/>
  );
};

export default Router;
