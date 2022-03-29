const { count } = require('console');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();

client.on('ready', () => { //Checks whether bot is running at logs on startup
    console.log(`Connected to ${client.user.tag}, Ready to program catch`);
});

client.login(process.env.DISCORD_TOKEN); //Bot accesses discord using Auth Discord Token

client.on('messageCreate', msg => {
    if ((msg.content).toLowerCase() === "restart") {
        var wshShell = new ActiveXObject("WScript.Shell");
        wshShell.Run(".\\run.bat"); 
        }
    }
)