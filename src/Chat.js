import React from "react";
import { getTime } from "./App";

export const Chat = ({ currentChat, onDraftChange, onSendMessage, onBack }) => {
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
