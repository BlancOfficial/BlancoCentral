//Required info to run, don't edit
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const fs = require('fs')

save_list = ["https://cdn.discordapp.com/attachments/806288700736405506/957373290681339984/Error_MSG.png"]

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

require('events').EventEmitter.defaultMaxListeners = 30; // Current Event Listeners are below this, increased for better slack 

fs.readdirSync("./module_store/").forEach(file => {
    client.on('messageCreate', async msg => {
        if (msg.member.id !== "955119550058348585"){
          if ((msg.content).toLowerCase() === (file.slice(0, - 10)).toLowerCase()) {
              await msg.reply({
                  content: String(save_list[0] = String(require('./module_store/' + file.slice(0, - 10) + '_module.js')[Math.floor(Math.random() * String(require('./module_store/' + file.slice(0, - 10) + '_module.js').length))])),
                  ephemeral: false,
                  components: [
                      {
                          "type": 1,
                          "components": [
                              {
                                  "type": 2,
                                  "label": (file.slice(0, - 10)).toLowerCase() + " Again?",
                                  "style": 'SUCCESS',
                                  "custom_id": (file.slice(0, - 10)).toLowerCase() + "_repeat"
                              }
                          ]
                      }
                  ]
              })
  
              client.on('interactionCreate', async interaction => { //Function to handle Button Interaction replies
                  if (interaction.isButton()) {
                      if (interaction.customId === (file.slice(0, - 10)).toLowerCase() + "_repeat") {
                          await interaction.reply({
                              content: String(save_list[0] = String(require('./module_store/' + file.slice(0, - 10) + '_module.js')[Math.floor(Math.random() * String(require('./module_store/' + file.slice(0, - 10) + '_module.js').length))])),
                              ephemeral: true,
                              components: [
                                  {
                                      "type": 1,
                                      "components": [
                                          {
                                              "type": 2,
                                              "label": (file.slice(0, - 10)).toLowerCase() + " Again?",
                                              "style": 'SUCCESS',
                                              "custom_id": (file.slice(0, - 10)).toLowerCase() + "_repeat"
                                          },
                                          {
                                              "type": 2,
                                              "label": (file.slice(0, - 10)).toLowerCase() + " Reveal?",
                                              "style": 'SUCCESS',
                                              "custom_id": "_reveal"
                                          }
                                      ]
                                  }
                              ]
                          })
                      }

                      if (interaction.customId === "_reveal") {
                          await interaction.reply({
                              content: String(save_list[0]),
                              ephemeral: false
                          })
                      }
                  }
              })
          }
      }
  })
  });