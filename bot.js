const {cat_pictures} = require('./module_store/cat_module.js');
const {fox_pictures} = require('./module_store/fox_module.js');
const {ferret_pictures} = require('./module_store/ferret_module.js');
const {gura_pictures} = require('./module_store/gura_module.js');
const {lion_pictures} = require('./module_store/lion_module.js');
const {panda_pictures} = require('./module_store/panda_module.js');
const {wolf_pictures} = require('./module_store/wolf_module.js');
const {rabbit_pictures} = require('./module_store/rabbit_module.js');
const {fish_pictures} = require('./module_store/fish_module.js');
const {MessageActionRow} = require('discord.js');
const {MessageButton} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();


function bot_reply(user_input, bot_output)
    {
    client.on('messageCreate', msg => {
      if ((msg.content).toLowerCase() === (user_input).toLowerCase()) {

            msg.reply({
                content: String(bot_output[Math.floor(Math.random() * bot_output.length)]),
                components: [
                    {
                        "type": 1,
                        "components": [
                            {
                                "type": 2,
                                "label": user_input + " Again?",
                                "style": 'SUCCESS',
                                "custom_id": "repeat"
                            }
                        ]
                    
                    }
                ]
                })
            
            client.on('interactionCreate', interaction => {
                if (interaction.isButton()) {
                    if (interaction.customId === "repeat") {
                        console.log("Test Pass")
                        interaction.reply({
                            content: String(bot_output[Math.floor(Math.random() * bot_output.length)]),
                            components: [
                                {
                                    "type": 1,
                                    "components": [
                                        {
                                            "type": 2,
                                            "label": user_input + " Again?",
                                            "style": 'SUCCESS',
                                            "custom_id": "repeat"
                                        }
                                    ]
                                }
                            ]
                        })
                    }}
                })
            }
        })
    }       


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

bot_reply("catto", cat_pictures);
bot_reply("foxy", fox_pictures);
bot_reply("ferret", ferret_pictures);
bot_reply("ping", ["pong"]);
bot_reply("guwr", gura_pictures);
bot_reply("panda", panda_pictures);
bot_reply("lion", lion_pictures);
bot_reply("awoo", wolf_pictures);
bot_reply("bnuy", rabbit_pictures);
bot_reply("meemee", fish_pictures);
bot_reply("a", ["https://tenor.com/view/gawr-gura-gawr-gura-gif-18439720"]);
bot_reply("info", ["Currently running v1.0.7 of BlancoBot\nhttps://cdn.discordapp.com/attachments/955121751094882336/955525144963596348/Thanks.png\nhttps://cdn.discordapp.com/attachments/806288700736405506/955903576985718784/Infov1.0.6.png"]);
bot_reply("help", ["https://cdn.discordapp.com/attachments/806288700736405506/955903576985718784/Infov1.0.6.png"]);