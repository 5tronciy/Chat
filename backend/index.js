// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   req.url === "/chats"
//     ? res.end(JSON.stringify(getChats(1)))
//     : res.end("Hello world");
// });
// server.listen(3000);

const Koa = require("koa");
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// response

app.use(async (ctx) => {
  ctx.body = "Hello, World!";
});

app.listen(3000);

let state = {
  users: {
    1: {
      id: "1",
      nickName: "Alfons",
      avatar: "pahonia.png",
      chatIds: ["777", "888"],
    },
    2: { id: "2", nickName: "Nick", avatar: "pahonia.png", chatIds: ["888"] },
    3: { id: "3", nickName: "Mike", avatar: "pahonia.png", chatIds: ["777"] },
  },
  chats: {
    777: {
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
    },
  },
  currentChat: {
    currentChatId: 777,
  },
};

const getChats = (userId) => {
  const chatIds = state.users[userId].chatIds;
  return chatIds.map((chatId) => {
    return state.chats[chatId];
  });
};
