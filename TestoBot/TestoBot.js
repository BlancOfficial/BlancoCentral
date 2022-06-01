const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const { MessageEmbed } = require('discord.js');
require('events').EventEmitter.defaultMaxListeners = 30;
process.on('unhandledRejection', error => {console.log(error)})

client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`);});
client.login("OTgxNTQ0NTE2ODQ0NjgzMzM0.GBcAWW.bKoX7YN-8kFa57Vp6HBrA14YvwRBsUFWPdGfXk"); 
client.on('messageCreate', async msg => { 
    if(msg.member.id !== "970759696933859429" && msg.member.id !== "971885766449963008" && msg.member.displayName !== "𝓑𝓵𝓪𝓷𝓬𝓓𝓮𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵") {
        await msg.reply({ 
            embeds: [
                new MessageEmbed()
                    .setColor("#0099ff")
                    .setTitle('Some title')
                    .setImage('https://i.imgur.com/AfFp7pu.png')
                    .setTimestamp()
            ]
        })
    }
})