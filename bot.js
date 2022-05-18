//Required info to run, don't edit
const { count } = require('console');
const {MessageActionRow} = require('discord.js');
const {MessageButton} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });


process.on('unhandledRejection', error => {})

client.on('guildCreate', guild => { // Runs when joining a new server
    guild.systemChannel.send(`Thanks for inviting me to the server ^^`)
    guild.systemChannel.send("There is no set prefix, enter `info` to get started, Just like this : ")
    guild.systemChannel.send(`info`)
  });
  
client.on('ready', () => { //Checks whether bot is running at logs on startup
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login("OTU1MTE5NTUwMDU4MzQ4NTg1.YjdCZQ.iZlAabxKBwCgK8SPe7N1sKOyTbE"); //Bot accesses discord using Auth Discord Token


async function bot_reply(user_input, bot_output, user_only_visible = false) // Function to handle bot replies
    {
    client.on('messageCreate', async msg => {
      if (msg.member.id !== "955119550058348585"){
        if ((msg.content).toLowerCase() === (user_input).toLowerCase()) {
            await msg.reply({
                content: String(image_current = [String(require('./module_store/' + bot_output + '_module.js')[Math.floor(Math.random() * String(require('./module_store/' + bot_output + '_module.js').length))])]),
                ephemeral: user_only_visible,
                components: [
                    {
                        "type": 1,
                        "components": [
                            {
                                "type": 2,
                                "label": (user_input).toLowerCase() + " Again?",
                                "style": 'SUCCESS',
                                "custom_id": (user_input).toLowerCase() + "_repeat"
                            }
                        ]
                    }
                ]
            })

            client.on('interactionCreate', async interaction => { //Function to handle Button Interaction replies
                if (interaction.isButton()) {
                    if (interaction.customId === (user_input).toLowerCase() + "_repeat") {
                        await interaction.reply({
                            content: String(image_current = [String(require('./module_store/' + bot_output + '_module.js')[Math.floor(Math.random() * String(require('./module_store/' + bot_output + '_module.js').length))])]),
                            ephemeral: true,
                            components: [
                                {
                                    "type": 1,
                                    "components": [
                                        {
                                            "type": 2,
                                            "label": (user_input).toLowerCase() + " Again?",
                                            "style": 'SUCCESS',
                                            "custom_id": (user_input).toLowerCase() + "_repeat"
                                        },
                                        {
                                            "type": 2,
                                            "label": (user_input).toLowerCase() + " Reveal?",
                                            "style": 'SUCCESS',
                                            "custom_id": "_reveal"
                                        }
                                    ]
                                }
                            ]
                        })
                                        save_list = ["https://cdn.discordapp.com/attachments/806288700736405506/957373290681339984/Error_MSG.png", String(image_current)]
                                        save_list.push(String(image_current))
                                    }
                                        
        
                    if (interaction.customId === "_reveal"){
                        await interaction.reply({
                            "content": save_list[1],
                            "ephemeral": false
                        })
                    }
                }
            })
        }
    }
})}


//Setting up user interaction for modules within module_store directory
user_msg = ["catto", "koko", "foxy", "ferret", "guwr", "panda", "lion", "awoo", "bnuy", "meemee", "ping", "pong", "a", "info", "help", "hug", "pat", "foxy fart"]
module_dire = {catto : "cat", koko : "koala", foxy : "fox", ferret : "ferret", guwr : "gura", panda : "panda", lion : "lion", awoo : "wolf", bnuy : "rabbit", meemee : "fish", nsfw : "nsfw", ping : "pong", pong : "pong", a : "a", info : "info", help : "help", hug : "hug", pat : "pat", "foxy fart" : "foxy fart"}

require('events').EventEmitter.defaultMaxListeners = 30; // Current Event Listeners are below this, increased for better slack 
for (var i = 0; i < user_msg.length; ++i) {
    bot_reply(user_msg[i], module_dire[String(user_msg[i])])
    }       // sets up user_msg inputs for loading modules from module_store
    
client.on('messageCreate', async msg => {
    if ((msg.content).toLowerCase() === "status") {
        msg.reply("Bot loader: Staus Online")
    }
})