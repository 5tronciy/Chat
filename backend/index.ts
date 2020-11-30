const Koa = require("koa");
const Router = require("koa-router");
const serve = require("koa-static");
const session = require("koa-session");
const logger = require("koa-logger");

const app = new Koa();

app.use(logger());

// app.keys = ["Some keys"];
// app.use(session(app));

const router = new Router();

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

const getChats = (ctx) => {
  const chatIds = state.users[ctx.params.id].chatIds;
  ctx.body = chatIds.map((chatId) => {
    return state.chats[chatId];
  });
};

router.get("/chats/:id", getChats);

const setACookie = (ctx) => {
  ctx.cookies.set("name", "value", {
    httpOnly: false,
    // expires: 360000 + Date.now(),
  });
};

router.get("/", setACookie);

// app.use((ctx) => {
//   var n = ctx.session.views || 0;
//   ctx.session.views = ++n;

//   if (n === 1) {
//     ctx.body = "Welcome here for the first time!";
//   } else {
//     ctx.body = "You've visited this page " + n + " times!";
//   }
// });

app.use(router.routes());

app.use(serve("./public"));
app.use(serve("./backend/images"));

app.listen(3000);
