const { count } = require('console');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();

client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`);});
client.login(process.env.DISCORD_TOKEN); //Bot accesses discord using Auth Discord Token 
                                        //Requires you to have a .env file declaring the DISCORD_TOKEN
client.on('messageCreate', async msg => { await msg.reply({ content: "Bruh"})})