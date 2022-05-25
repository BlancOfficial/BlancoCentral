const { Client } = require("discord.js")
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

require("./bot")
require("./BruhBot/BruhBot")
require("./RepeatoBot/RepeatoBot")

client.options.shards = 'auto'