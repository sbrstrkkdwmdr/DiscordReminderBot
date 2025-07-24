# Discord Reminder Bot

A simple Discord Bot for sending reminders

## Install/setup

install nodejs (v16) [here](https://nodejs.org/en/download/)

install all dependencies with `npm i` in the main directory

in the `./config/` folder rename `tempconfig.json` to `config.json`

`config.json` should look like this:

```json
{
    "token": "xxx",
    "prefix": "xxx",
    "owners": ["xxx"],
    "logs": {
        "console": true,
        "file": true
    }
}
```

change the values in `config.json` (see [here](#config-properties)) </br>
to compile the bot the bot use `tsc` or `npm run build`</br>
to run the compiled code use `npm run run` </br>
to compile and run at the same time `npm run br` </br>

## Config Properties

| Property       | Type     | Description                                                                                                                                                                                           |
| -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| token          | string   | application token for bot to connect to discords API. </br>go to https://discord.com/developers/applications, create a new app, and create a new bot under the bot section. copy the token from there |
| prefix         | string   | a string at the start of each message to detect if a message is a command. eg. `!` => `!ping` would ping the bot and `?ping` or `ping` wouldn't.                                                       |
| owners         | string[] | an array of user ids stored as strings. users with these ids can use any command                                                                                                                      |
| logs           | object   | see [here](#config-logging-properties)                                                                                                                                                                |