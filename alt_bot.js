const { count } = require('console');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();

client.on('ready', () => { //Checks whether bot is running at logs on startup
    console.log(`Connected to ${client.user.tag}, Ready to program catch`);
});

client.login(process.env.DISCORD_TOKEN); //Bot accesses discord using Auth Discord Token

let exec = require('child_process').exec

client.on('messageCreate', msg => {
    if ((msg.content).toLowerCase() === "restart") {
        exec("./run.bat", function (err, stdout, stderr) {
            if (err) {
                 console.log(stderr);
                 return;
            }
            // Done.
            console.log(stdout);
        });

        }
    if ((msg.content).toLowerCase() === "status") {
        msg.reply("Bot loader: Staus Online")
        }
    }
)