const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`);});
client.login(require("../auth.json").Repeato); 
client.on('messageCreate', async msg => { 
    if(msg.member.id !== "971885766449963008") {
        await msg.reply({ 
            content: msg.content
        })
    }
})