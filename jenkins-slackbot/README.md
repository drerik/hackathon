# Jenkins SlackBot Hackathon

This hackathon is all about creating cool bot's for [Slack](https://slack.com).
We are going to use [NodeJS](https://nodejs.org) for this since we have not
yet a fully working bot-framework for Enonic XP.

## Requirements:

* [NodeJS](https://nodejs.org) installed.
* [Enonic Slack](https://enonic.slack.com) account.
* Assigned a bot token (ask me for one).
* Current clone of this repository.

## Documentation

We are using [BotKit](https://www.botkit.ai/) in this example. Feel free to use
what you want, but I found out that [BotKit](https://www.botkit.ai/) has the
most features out of the box.

* [BotKit Docs](https://github.com/howdyai/botkit/blob/master/docs/readme.md)
* [BotKit Docs for Slack](https://github.com/howdyai/botkit/blob/master/docs/readme-slack.md)

## Running
Install dependencies if you haven't done it already
```
npm install
```

Set token as `TOKEN` environment variable.
```
export TOKEN=<your token>
export JENKINS_USER=<jenkins username>
export JENKINS_PWD=<jenkins user password>
```

Start the application
```
$> npm start
```

## Ideas

### Consultants
* Download url
* App installed notif
* App started/stopped notif
* Error notif
* Documentation finder
* Discuss bot
* New release notif (with changelog)
* Market bot (new apps, updated apps)

### Ops
* Status (metrics)
* Network notif
* Start and stop doccer containers
* Trigger jenkins job

### QA
* Support bot
* Github issues bot
