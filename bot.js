function interaction_buttons(module_var){
    return{
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



const {MessageActionRow} = require('discord.js');
const {MessageButton} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
require('dotenv').config();

var update_info = "https://cdn.discordapp.com/attachments/955121751094882336/956226641514872902/Info_v1.0.8.png"


function inter_reply(module_var, output_list){
    try{
        interaction.reply({
            content: String(output_list[Math.floor(Math.random() * output_list.length)]),
            ephemeral: true,
            components: [
                interaction_buttons(module_var)
            ]
        })
    }
    catch{
    client.on('interactionCreate', interaction => {
        if (interaction.isButton()) {
            if (interaction.customId === module_var + "_repeat") {
                interaction.reply({
                    content: String(output_list[Math.floor(Math.random() * output_list.length)]),
                    ephemeral: true,
                    components: [
                        interaction_buttons(module_var)
                    ]
                })
            }}
        })
}}

function bot_reply(user_input, bot_output, user_only_visible = false)
    {
    client.on('messageCreate', msg => {
      if ((msg.content).toLowerCase() === (user_input).toLowerCase()) {

            msg.reply({
                content: String(bot_output[Math.floor(Math.random() * bot_output.length)]),
                ephemeral: user_only_visible,
                components: [
                        interaction_buttons(user_input)
                ]})

            inter_reply((msg.content).toLowerCase(), bot_output);
            }
        })
    }       


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);

bot_reply("a", ["https://tenor.com/view/gawr-gura-gawr-gura-gif-18439720"]);
bot_reply("info", ["Currently running v1.0.9 of BlancoBot\n\n***UPDATE LOG***\n```Major Image Bank Update\nYou Can now repeat a command by clicking the green button...\nButton times out after 10 seconds :P\nThe Repeated commands are all hidden and only you can see them```\nhttps://cdn.discordapp.com/attachments/955121751094882336/955525144963596348/Thanks.png\n" + update_info]);
bot_reply("help", [update_info]);


user_msg = ["catto", "koko", "foxy", "ferret", "guwr", "panda", "lion", "awoo", "bnuy", "meemee"]
module_dire = ["cat", "koala", "fox", "ferret", "gura", "panda", "lion", "wolf", "rabbit", "fish"]

for (var i = 0; i < user_msg.length; ++i) {
    console.log(require('./module_store/' + module_dire[i] + '_module.js'))
    bot_reply(user_msg[i], (require('./module_store/' + module_dire[i] + '_module.js')))
}

if (user_msg.length != module_dire.length) {
    console.log("There is an issue with inputs, oh no")
}
