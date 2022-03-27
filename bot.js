const { count } = require('console');
const {MessageActionRow} = require('discord.js');
const {MessageButton} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();
save_list = ["https://cdn.discordapp.com/attachments/806288700736405506/957373290681339984/Error_MSG.png"]

var update_info = "https://cdn.discordapp.com/attachments/806288700736405506/957589966794420224/info_v1.1.1.png"
version_Bot = "v1.1.1"
update_log = "***UPDATE LOG***\n```Reimplemented Ping Pong... but better\nRepeating commands that had previously been hidden can now be shared in server by pressing the 'Reveal?' button...\n    This feature was soo much harder to figure out than I'd thought it'd be\nOn request, an 'NSFW' command has been added```"
var countI = 0


client.on('guildCreate', guild => { // Runs when joining a new server
    guild.systemChannel.send(`Thanks for inviting me to the server ^^`)
    guild.systemChannel.send("There is no set prefix, enter `info` to get started, Just like this : ")
    guild.systemChannel.send(`info`)
  });
  


async function bot_reply(user_input, bot_output, user_only_visible = false) // Function to handle bot replies
    {
    client.on('messageCreate', async msg => {
      if ((msg.content).toLowerCase() === (user_input).toLowerCase()) {
            img_data = String(bot_output[Math.floor(Math.random() * bot_output.length)])
            await msg.reply({
                content: img_data,
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
                ]})

            client.on('interactionCreate', async interaction => { //Function to handle Button Interaction replies
                if (interaction.isButton()) {
                    if (interaction.customId === (user_input).toLowerCase() + "_repeat") {
                        var image_current = String(bot_output[Math.floor(Math.random() * bot_output.length)])
                        save_list.push(image_current)
                        countI++
                        await interaction.reply({
                            content: image_current,
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
                    }
        
                    if (interaction.customId === "_reveal"){
                        await interaction.reply({
                            "content": save_list[countI],
                            "ephemeral": false
                        })
                    }
                }
            })
            }
        })
    };


client.on('ready', () => { //Checks whether bot is running at logs on startup
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN); //Bot accesses discord using Auth Discord Token

//Bot replies that can't be iterated via 
bot_reply("info", ["Currently running " + version_Bot +  " of BlancoBot\n\n" + update_log + "\nhttps://cdn.discordapp.com/attachments/955121751094882336/955525144963596348/Thanks.png\n" + update_info]);
bot_reply("help", [update_info]);


user_msg = ["catto", "koko", "foxy", "ferret", "guwr", "panda", "lion", "awoo", "bnuy", "meemee", "nsfw", "ping", "a"]
module_dire = {catto : "cat", koko : "koala", foxy : "fox", ferret : "ferret", guwr : "gura", panda : "panda", lion : "lion", awoo : "wolf", bnuy : "rabbit", meemee : "fish", nsfw : "nsfw", ping : "pong", a : "a"}

require('events').EventEmitter.defaultMaxListeners = 20;
for (var i = 0; i < user_msg.length; ++i) {
    bot_reply(user_msg[i], require('./module_store/' + module_dire[String(user_msg[i])] + '_module.js'))
    }       


process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});