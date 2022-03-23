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

//var module_list = [""]
//for (var i = 0; i < module_list.length; ++i){}
//"./module_store/" + module_variable + "_module.js"


const {cat_pictures} = require('./module_store/cat_module.js');
const {fox_pictures} = require('./module_store/fox_module.js');
const {ferret_pictures} = require('./module_store/ferret_module.js');
const {gura_pictures} = require('./module_store/gura_module.js');
const {koala_pictures} = require('./module_store/koala_module.js');
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
const update_info = "https://cdn.discordapp.com/attachments/955121751094882336/956226641514872902/Info_v1.0.8.png"


function inter_reply(module_var, output_list){
    try{
        console.log("Checkpoint 1")
        interaction.reply({
            content: String(output_list[Math.floor(Math.random() * output_list.length)]),
            ephemeral: true,
            components: [
                interaction_buttons(module_var)
            ]
        })
    }
    catch{
        console.log("Checkpoint 2")
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
bot_reply("info", ["Currently running v1.0.8 of BlancoBot\n\n***UPDATE LOG***\n```Major Image Bank Update\nYou Can now repeat a command by clicking the green button...\nButton times out after 10 seconds :P\nThe Repeated commands are all hidden and only you can see them```\nhttps://cdn.discordapp.com/attachments/955121751094882336/955525144963596348/Thanks.png\n" + update_info]);
bot_reply("help", [update_info]);

bot_reply("catto", cat_pictures);
bot_reply("koko", koala_pictures);
bot_reply("foxy", fox_pictures);
bot_reply("ferret", ferret_pictures);
bot_reply("guwr", gura_pictures);
bot_reply("panda", panda_pictures);
bot_reply("lion", lion_pictures);
bot_reply("awoo", wolf_pictures);
bot_reply("bnuy", rabbit_pictures);
bot_reply("meemee", fish_pictures);