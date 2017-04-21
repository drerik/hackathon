console.log(process.env); process.exit;

// Require libraries.
const botkit = require('botkit');

// Create slackbot controller.
const controller = botkit.slackbot({
  debug: false,
  send_via_rtm: true,
  json_file_store: './db'
});

// Create the slackbot.
const slackBot = controller.spawn({
  // IMPORTANT! Do not check in this token to GIT.
  token: process.env.TOKEN
});

// Listen for a direct message.
controller.hears([/^hello robot$/i], ['direct_message'], function(bot, message) {
  bot.reply(message, 'Hello Human!');
});

// Start real-time messaging.
slackBot.startRTM();
