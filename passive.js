const { count } = require('console');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();

client.on('ready', () => { //Checks whether bot is running at logs on startup
    console.log(`Background Handler is online, ${client.user.tag} active`);
});

client.login(process.env.DISCORD_TOKEN); //Bot accesses discord using Auth Discord Token

x = null
if (x === null){
    require("./bot.js")
}