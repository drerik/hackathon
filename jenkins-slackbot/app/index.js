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

const commands = {
  commands: {
    description: 'List commands',
    hears: /^commands$/,
    callback: (bot, message) => {
      bot.reply(message, "Here are the commands:\n" + Object.keys(commands).map(c => `${c}: ${commands[c].description}`).join("\n"));
    }
  },
  example: {
    description: 'Says hello',
    hears: /^example$/,
    callback: (bot, message) => {
      bot.reply(message, 'example :)');
    }
  },
  'list jobs': {
    description: 'List Jenkins jobs',
    hears: /^list jobs$/,
    callback: (bot, message) => {
      bot.reply(message, 'Job list:');
    }
  }
}

Object.keys(commands).forEach(command => {
  // Listen for a direct message.
  controller.hears([commands[command].hears], ['direct_message'], function(bot, message) {
    commands[command].callback(bot, message);
  });
});

// Start real-time messaging.
slackBot.startRTM();
