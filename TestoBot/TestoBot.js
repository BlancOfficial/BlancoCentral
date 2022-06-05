const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const { MessageEmbed } = require('discord.js');
require('events').EventEmitter.defaultMaxListeners = 30;
const fs = require('fs')
process.on('unhandledRejection', error => {})
client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`);});
client.login("OTgxNTQ0NTE2ODQ0NjgzMzM0.GBcAWW.bKoX7YN-8kFa57Vp6HBrA14YvwRBsUFWPdGfXk"); 