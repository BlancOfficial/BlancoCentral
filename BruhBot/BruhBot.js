const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`);});
client.login(require("../auth.json").Bruh); 
client.on('messageCreate', async msg => { 
    if(msg.member.id !== "970759696933859429") {
        await msg.reply({ 
                content:"Bruh"
        })}})