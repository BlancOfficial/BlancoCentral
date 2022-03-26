const {MessageActionRow} = require('discord.js');
const {MessageButton} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();
save_list = ["https://cdn.discordapp.com/attachments/806288700736405506/957373290681339984/Error_MSG.png"]

var update_info = "https://cdn.discordapp.com/attachments/806288700736405506/957391007132029069/info_v1.1.0.png"
version_Bot = "v1.1.0"
update_log = "***UPDATE LOG***\n```Repeated images that had previously been hidden can now be shared in server by pressing the 'Reveal?' button...\n    This feature was soo much harder to figure out than I'd thought it'd be```"
count = -1


client.on('guildCreate', guild => {
    guild.systemChannel.send(`Thanks for inviting me to the server ^^`)
    guild.systemChannel.send("There is no set prefix, enter `info` to get started, Just like this : ")
    guild.systemChannel.send(`info`)
  });
  



function image_return(module_var, choices, repeat_image){
    choices = choices || 1;
    if (choices == 1){
        return {
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "label": module_var + " Again?",
                    "style": 'SUCCESS',
                    "custom_id": module_var + "_repeat"
                }
            ]
        }
    }
    else if (choices == 2){
        count++
        row = {
            "type": 1,
            "components": [
                {
                    "type": 2,
                    "label": module_var + " Again?",
                    "style": 'SUCCESS',
                    "custom_id": module_var + "_repeat"
                },
                {
                    "type": 2,
                    "label": module_var + " Reveal?",
                    "style": 'SUCCESS',
                    "custom_id": String(count) + "_reveal"
                },
            ]
        }
        return [row, repeat_image]
        
    }
};

async function inter_reply(module_var, output_list, image_list = save_list){
    client.on('interactionCreate', async interaction => {
        if (interaction.isButton()) {
            if (interaction.customId === module_var + "_repeat") {
                var image_data = image_return(module_var, 2, String(output_list[Math.floor(Math.random() * output_list.length)]))
                save_list.push(image_data[1])
                await interaction.reply({
                    content: image_data[1],
                    ephemeral: true,
                    components: [
                        image_data[0]
                    ]
                })
                }


            if (interaction.customId === String(count) + "_reveal") {
                await interaction.reply({
                    content: String(image_list[count + 1]),
                    ephemeral: false,
                })
            }
        }
    })
}

async function bot_reply(user_input, bot_output, user_only_visible = false)
    {
    client.on('messageCreate', async msg => {
      if ((msg.content).toLowerCase() === (user_input).toLowerCase()) {
            img_data = String(bot_output[Math.floor(Math.random() * bot_output.length)])
            await msg.reply({
                content: img_data,
                ephemeral: user_only_visible,
                components: [
                    image_return(user_input)
                ]})

            inter_reply((user_input).toLowerCase(), bot_output)
            }
        })
    };


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

bot_reply("a", ["https://tenor.com/view/gawr-gura-gawr-gura-gif-18439720"]);
bot_reply("info", ["Currently running " + version_Bot +  " of BlancoBot\n\n" + update_log + "\nhttps://cdn.discordapp.com/attachments/955121751094882336/955525144963596348/Thanks.png\n" + update_info]);
bot_reply("help", [update_info]);


user_msg = ["catto", "koko", "foxy", "ferret", "guwr", "panda", "lion", "awoo", "bnuy", "meemee"]
module_dire = {catto : "cat", koko : "koala", foxy : "fox", ferret : "ferret", guwr : "gura", panda : "panda", lion : "lion", awoo : "wolf", bnuy : "rabbit", meemee : "fish"}

require('events').EventEmitter.defaultMaxListeners = 20;
for (var i = 0; i < user_msg.length; ++i) {
    bot_reply(user_msg[i], require('./module_store/' + module_dire[String(user_msg[i])] + '_module.js'))
    }       


process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});