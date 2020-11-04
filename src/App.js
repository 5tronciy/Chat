import React from "react";
import AddChat from "./AddChat";
import Chat from "./Chat";
import ChatList from "./ChatList";
//import axios from "axios";

export const getTime = (isoTime) => {
  const time = new Date(isoTime);
  return `${time.getHours()}:${time.getMinutes().toString().padStart(2, "0")}`;
};

const modal = false;

const Router = () => {
  /*axios
    .get(`https://github.com/5tronciy/JSON_Server/blob/[main|master]/db.json`)
    .then((res) => {
      const posts = res.data.data.children.map((obj) => obj.data);
      setState({ posts });
    });*/

  return (
    <div className="wrapper">
      <ChatList />
      <Chat />
      {modal && <AddChat />}
    </div>
  );
};

export default Router;
