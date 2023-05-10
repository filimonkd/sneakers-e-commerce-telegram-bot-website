const { Telegraf } = require("telegraf");
const TOKEN = env.TOKEN;
const bot = new Telegraf(TOKEN);

const web_link = env.url;

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();