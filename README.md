# discord-coins
Discord Coins is a free discord coins addon for npmjs.

## This is under HIGH development at the moment.
If these do not work then we are going to make a new one later. To be notified about the updates, [join my discord.](https://discord.gg/yNd3GWY)
  

## Installation

```js
npm i discord-coins
```

### Methods
**.Balance**


## Loading and using the module

We suggest you load the module via `require`, pending the stabalizing of es modules in node:

```js
const discordcoins = require("discord-coins")
```
You should start by using some code.
```js
const discordcoins = require("discord-coins")
const Discord = require("discord.js")
const bot = new Discord.Client();
const prefix = "."
bot.on("message", message => {
if (message.content === `${prefix}BAL`) {
let Balance = discordcoins.Balance(message.author.id)
message.channel.send(`Their balance is ${Balance}!`)
}
})
```
