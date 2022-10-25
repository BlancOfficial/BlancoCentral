const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const { MessageEmbed } = require('discord.js');
const fs = require('fs')
process.on('unhandledRejection', error => {console.log(error)})
client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`);});
client.login(require("../auth.json").Repeato); 
