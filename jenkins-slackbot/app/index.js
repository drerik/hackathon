// Require libraries.
const config = require('../config');
const botkit = require('botkit');
const jenkins = require('jenkins')({ baseUrl: config.JENKINS_URL, crumbIssuer: true });

// Create slackbot controller.
const controller = botkit.slackbot({
  debug: false,
  send_via_rtm: true,
  json_file_store: './db'
});

// Create the slackbot.
const slackBot = controller.spawn({
  // IMPORTANT! Do not check in this token to GIT.
  token: config.TOKEN
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
      jenkins.job.list(function(err, jobs) {
        if (err) throw err;
        console.log('info', jobs);
        bot.reply(message, `Job list:\n${jobs.map((j) = j.name).join("\n")}`);
      });
    }
  },
  'start job': {
    description: 'List Jenkins jobs',
    hears: /^start job /,
    callback: (bot, message) => {
      //console.log(message);
      const job = message.text.replace(/^start job/,'')
      jenkins.job.build(job, function(err, data) {
        if (err) throw err;
        console.log('queue item number', data);
        bot.reply(message, `Building job:${job} queue item number:${data}`);
      });
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
