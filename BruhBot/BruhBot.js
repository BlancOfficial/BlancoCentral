const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('events').EventEmitter.defaultMaxListeners = 30;

client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`);});
client.login("OTcwNzU5Njk2OTMzODU5NDI5.YnAoaw.TWyI2i4rQOscWvkpNRegUqZIIPc"); 
client.on('messageCreate', async msg => { if(msg.member.id !== "970759696933859429" && msg.member.id !== "971885766449963008" && msg.member.displayName != "𝓑𝓵𝓪𝓷𝓬𝓓𝓮𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵") {await msg.reply({ content:"Bruh"})}})