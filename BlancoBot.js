//perma variables and origin variables
const Discord = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
save_list = ["https://cdn.discordapp.com/attachments/974423774877347891/987468861752352818/BlancoError.png"];
error_count = 0;
const thanks = "https://cdn.discordapp.com/attachments/806288700736405506/973295870550360164/Thanks.png";
const trying = "https://cdn.discordapp.com/attachments/974423774877347891/984579953830019072/Keep_Trying.png";
const oh = "https://cdn.discordapp.com/attachments/721166435413524490/1033994602207776799/unknown.png";
const recieved = "https://i.redd.it/3belzjkbpex61.jpg";
var data = [];


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();


client.once(Events.ClientReady, c => { console.log(`Ready! Logged in as ${c.user.tag}`);}); //activates client and awaits connecetion confirmation

client.login(require("./auth.json").BlancoBot); //Bot accesses discord using Auth Discord Token

require('events').EventEmitter.defaultMaxListeners = 80; // Current Event Listeners are below this, increased for better slack 

process.on('unhandledRejection', error => {console.log(error); error_count = error_count + 1}); //>.> if it works, it works

client.on('guildCreate', guild => { // Runs when joining a new server
    guild.systemChannel.send(`Thanks for inviting me to the server ^^`)
    guild.systemChannel.send("There is no prefix, enter `info` to get started, Just like this : ")
    guild.systemChannel.send(`help`)
    guild.systemChannel.send(`*pout* Seems my creator hasn't activated me just yet, DM him at 𝓑𝓵𝓪𝓷𝓬𝓓𝓮𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵#2485`)
    });

client.on('guildMemberAdd', new_member => { //DM new user
    new_member.send(`Welcome New Friend!`)
    new_member.send("https://cdn.discordapp.com/attachments/974423774877347891/993944924720480398/Welcome.png")
});