type state = {userProfile:{id:string
nickName: string
avatar:string}
chats:{}
currentChat:{}
}

const initialState:state = {
  userProfile: {
    id: "1",
    nickName: "Alfons",
    avatar: "pahonia.png",
  },
  chats: {777: {
    title: "nexta",
    id: "777",
    messages: [
      { time: "2020-09-30T20:00", from: "777", text: "Hello" },
      { time: "2020-08-30T24:00", from: "888", text: "Hi" },
    ],
    draft: "",
    avatar: "nexta.png",
  },
  888: {
    title: "tutBY",
    id: "888",
    messages: [{ time: "2020-08-30T24:00", from: "888", text: "Hi" }],
    draft: "",
    avatar: "tutby.png",
  },},
  currentChat: {
    currentChatId: null,
  },
};

export default initialState;
