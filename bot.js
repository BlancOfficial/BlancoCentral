function bot_reply(user_input, bot_output)
    {
    client.on('message', msg => {
      if ((msg.content).toLowerCase() === user_input) {
        msg.reply(bot_output[Math.floor(Math.random()*bot_output.length)]);
  }})
}

const {cat_pictures} = require('./cat_module.js');
const {fox_pictures} = require('./fox_module.js');
const {ferret_pictures} = require('./ferret_module.js');
const {gura_pictures} = require('./gura_module.js');
const {lion_pictures} = require('./lion_module.js');
const {panda_pictures} = require('./panda_module.js');
const {wolf_pictures} = require('./wolf_module.js');
const {server_stat} = require('./server_module.js');
//const {ver_info} = require('./package.json');

// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

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
bot_reply("a", ["https://tenor.com/view/gawr-gura-gawr-gura-gif-18439720"]);
bot_reply("info", ["https://cdn.discordapp.com/attachments/955121751094882336/955525144963596348/Thanks.png https://cdn.discordapp.com/attachments/955121751094882336/955532320050380881/Info.png"]);
bot_reply("help", ["https://cdn.discordapp.com/attachments/955121751094882336/955532320050380881/Info.png"]);
bot_reply("Server stats", server_stat);
