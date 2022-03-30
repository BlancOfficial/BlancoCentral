require("./bot.js")
const { count } = require('console');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();

client.on('ready', () => { //Checks whether bot is running at logs on startup
    console.log(`Background Handler is online, ${client.user.tag} active`);
});

client.login(process.env.DISCORD_TOKEN); //Bot accesses discord using Auth Discord Token

client.on('messageCreate', msg => {
        if ((msg.content).toLowerCase() === "restart") {
            require("./bot.js")
        }

        if ((msg.content).toLowerCase() === "status") {
            msg.reply("Bot loader: Staus Online")
        }
    
        if ((msg.content).toLowerCase() === "stop active process") {
            msg.reply("This feature has not been implemented yet")
            msg.reply("restart")
        }
    }
)