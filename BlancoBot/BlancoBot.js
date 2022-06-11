//Required info to run, don't edit
const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const fs = require('fs')
const { MessageEmbed } = require('discord.js');
save_list = ["https://cdn.discordapp.com/attachments/806288700736405506/957373290681339984/Error_MSG.png"]
whitelist = [require("./modules/admin_module/white_list.json")]

process.on('unhandledRejection', error => {})

client.on('guildCreate', guild => { // Runs when joining a new server
    guild.systemChannel.send(`Thanks for inviting me to the server ^^`)
    guild.systemChannel.send("There is no prefix, enter `info` to get started, Just like this : ")
    guild.systemChannel.send(`info`)
    guild.systemChannel.send(`*pout* Seems my creator hasn't activated me just yet, DM him at 𝓑𝓵𝓪𝓷𝓬𝓓𝓮𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵#2485`)
    }
)
  
client.on('ready', () => { //Checks whether bot is running at logs on startup
    console.log(`Logged in as ${client.user.tag}!`);
    }
)

client.login("OTU1MTE5NTUwMDU4MzQ4NTg1.YjdCZQ.iZlAabxKBwCgK8SPe7N1sKOyTbE"); //Bot accesses discord using Auth Discord Token

require('events').EventEmitter.defaultMaxListeners = 80; // Current Event Listeners are below this, increased for better slack 


client.on('messageCreate', async msg => {
    if ((msg.content).toLowerCase() === "admin.setup"){
        if (whitelist[0].users.includes(String(msg.author.id)) ===  true) {
            if (whitelist[0].channels.includes(msg.channelId) === false){
                whitelist[0].channels.push(msg.channelId)
                fs.writeFile("BlancoBot/modules/admin_module/white_list.json", JSON.stringify(whitelist[0]), err => {})
                await msg.reply({
                    embeds: [require("./modules/admin_module/channel_ac")]
                })
            }
            else {
                await msg.reply({
                    embeds : [
                        {
                            color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                            title: "This Channel Has Already Been Activated",
                            image: {url: "https://cdn.discordapp.com/attachments/974423774877347891/984579953830019072/Keep_Trying.png"}
                        }
                    ],
                })
            }
        }
        else {
            await msg.reply({
                embeds : [
                    {
                        color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                        title: "Contact A Verified User To Activate This Channel",
                        image: {url: "https://cdn.discordapp.com/attachments/974423774877347891/984579953830019072/Keep_Trying.png"}
                    }
                ],
            })
        }
    }
})

fs.readdirSync("./BlancoBot/modules/str_module_store/").forEach(file => {
    client.on('messageCreate', async msg => {
        if (whitelist[0].channels.includes(String(msg.channelId))){
            if ((msg.content).toLowerCase() === (file.slice(0, - 10)).toLowerCase()) {
                await msg.reply({
                    content: String(require('./modules/str_module_store/' + file.slice(0, - 10) + '_module.js'))
                    })
                }
            }
        })
    })

fs.readdirSync("./BlancoBot/modules/embed_module_store/").forEach(file => {
    client.on('messageCreate', async msg => {
        if (whitelist[0].channels.includes(String(msg.channelId))){
            if ((msg.content).toLowerCase() === (file.slice(0, - 10)).toLowerCase()) {
                await msg.reply({
                    embeds: [require('./modules/embed_module_store/' + file.slice(0, - 10) + '_module.js')]
                    })
                }
            }
        })
    })

client.on('messageCreate', async msg => {
    if (whitelist[0].channels.includes(String(msg.channelId))){
        if ((msg.content).toLowerCase().slice(0, 7) === "profile") {
            if (JSON.parse((JSON.stringify(msg.mentions.users)))[0] === undefined){
                await msg.reply({
                    embeds: [{
                        color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                        title: (msg.member.user.tag),
                        description : ("Current Server Nickname! : " + msg.member.displayName),
                        image : {url : ("https://cdn.discordapp.com/avatars/" + msg.member.user.id + "/" + msg.member.user.avatar + ".png")}
                        }
                    ]
                })
            }
            
            else {
                await msg.reply({
                    embeds: [
                        {
                            color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                            title: (JSON.parse((JSON.stringify(msg.mentions.users)))[0].tag),
                            description : ("Current Server Nickname : " + JSON.parse((JSON.stringify(msg.mentions.members)))[0].displayName),
                            image : {url : ("https://cdn.discordapp.com/avatars/" + JSON.parse((JSON.stringify(msg.mentions.users)))[0].id + "/" + JSON.parse((JSON.stringify(msg.mentions.users)))[0].avatar + ".png")}
                        }
                    ]
                })
            }
        }
    }
})

fs.readdirSync("./BlancoBot/modules/module_store").forEach(file => {
    client.on('messageCreate', async msg => {
        if (whitelist[0].channels.includes(String(msg.channelId))){
            if ((msg.content).toLowerCase() === (file.slice(0, - 10)).toLowerCase()) {
                await msg.reply({
                    embeds: [
                        new MessageEmbed()
                            .setColor(String("#" + Math.floor(Math.random()*16777215).toString(16)))
                            .setImage(String(save_list[0] = String(require('./modules/module_store/' + file.slice(0, - 10) + '_module.js')[Math.floor(Math.random() * String(require('./modules/module_store/' + file.slice(0, - 10) + '_module.js').length))])))
                    ],
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
                                    "label": "View Original",
                                    "style": "LINK",
                                    "url": save_list[0]
                                }
                            ]
                        }
                    ]
                })

            client.on('interactionCreate', async interaction => { //Function to handle Button Interaction replies
                if (interaction.isButton()) {
                    if (whitelist[0].channels.includes(String(interaction.channelId))){
                        if (interaction.customId === (file.slice(0, - 10)).toLowerCase() + "_repeat") {
                            await interaction.reply({
                                embeds: [
                                    new MessageEmbed()
                                        .setColor(String("#" + Math.floor(Math.random()*16777215).toString(16)))
                                        .setImage(String(save_list[0] = String(require('./modules/module_store/' + file.slice(0, - 10) + '_module.js')[Math.floor(Math.random() * String(require('./modules/module_store/' + file.slice(0, - 10) + '_module.js').length))])))
                                ],
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
                                                "label": "View Original",
                                                "style": "LINK",
                                                "url": save_list[0]
                                            }
                                                    ]
                                        }
                                    ]
                                })
                            }
                        }
                    }
                })
            }
        }
    })
})