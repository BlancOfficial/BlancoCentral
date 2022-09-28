//Required info to run, don't edit
const Discord = require('discord.js');
const fs = require('fs');
save_list = ["https://cdn.discordapp.com/attachments/974423774877347891/987468861752352818/BlancoError.png"];
const thanks = "https://cdn.discordapp.com/attachments/806288700736405506/973295870550360164/Thanks.png";
const trying = "https://cdn.discordapp.com/attachments/974423774877347891/984579953830019072/Keep_Trying.png";
const oh = "https://cdn.discordapp.com/attachments/974423774877347891/988830572363272222/Oh_No.png";
const whitelist = [require("./modules/admin_module/white_list.json")]; //User and Channel whitelist
const blacklist = [require("./modules/admin_module/black_list.json")]; //User and Channel blacklist
var data = [];


const client = new Discord.Client({
    makeCache: Discord.Options.cacheWithLimits({
		MessageManager: 500,
		PresenceManager: 0,
        messageCacheLifetime: 21600,
        messageSweepInterval: 43200,
        messageCacheMaxSize: 500,
        messageEditHistoryMaxSize: 0,
	}),
    intents: ["GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILDS"] //"MESSAGE_CONTENT"
});


function DM_User(ID, msg_data) {
    client.users.fetch(ID, false).then((user) => {
        user.send(msg_data);
       })};


function verifyMSG(msg, userID){
    if (whitelist[0].servers.includes(String(msg.guildId)) || whitelist[0].channels.includes(String(msg.channelId))){
        if (blacklist[0].servers.includes(String(msg.guildId)) || blacklist[0].channels.includes(String(msg.channelId)) || blacklist[0].users.includes(String(userID))){}
        else {return true}}
    return false};

client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`)});

client.login("OTU1MTE5NTUwMDU4MzQ4NTg1.YjdCZQ.iZlAabxKBwCgK8SPe7N1sKOyTbE"); //Bot accesses discord using Auth Discord Token

require('events').EventEmitter.defaultMaxListeners = 80; // Current Event Listeners are below this, increased for better slack 

process.on('unhandledRejection', error => {console.log(error)}); //>.> if it works, it works

client.on('guildCreate', guild => { // Runs when joining a new server
    guild.systemChannel.send(`Thanks for inviting me to the server ^^`)
    guild.systemChannel.send("There is no prefix, enter `info` to get started, Just like this : ")
    guild.systemChannel.send(`help`)
    guild.systemChannel.send(`*pout* Seems my creator hasn't activated me just yet, DM him at 𝓑𝓵𝓪𝓷𝓬𝓓𝓮𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵#2485`)
    });

client.on('guildMemberAdd', new_member => { //DM new user
    new_member.send(`Welcome New Friend!`)
    new_member.send("https://cdn.discordapp.com/attachments/974423774877347891/993944924720480398/Welcome.png")
});

fs.readdirSync("./BlancoBot/modules/str_module_store/").forEach(file => {
    client.on('messageCreate', async msg => {
        if (verifyMSG(msg, msg.member.id)){
            if ((msg.content).toLowerCase() === (file.slice(0, - 10)).toLowerCase()) {
                await msg.reply({
                    fetchReply: true,
                    content: String(require('./modules/str_module_store/' + file.slice(0, - 10) + '_module.js'))
                    })}}})});

fs.readdirSync("./BlancoBot/modules/embed_module_store/").forEach(file => {
    client.on('messageCreate', async msg => {
        if (verifyMSG(msg, msg.member.id)){
            if ((msg.content).toLowerCase() === (file.slice(0, - 10)).toLowerCase()) {
                await msg.reply({
                    fetchReply: true,
                    embeds: [require('./modules/embed_module_store/' + file.slice(0, - 10) + '_module.js')]
                    })}}})});

client.on('messageCreate', async msg => {
    if (verifyMSG(msg, msg.member.id)){
        if ((msg.content).toLowerCase().slice(0, 7) === "profile") {
            if (JSON.parse((JSON.stringify(msg.mentions.users)))[0] === undefined || (String(msg.member.displayName) == JSON.parse((JSON.stringify(msg.mentions.members)))[0].displayName)){
                await msg.reply({
                    fetchReply: true,
                    embeds: [{
                        color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                        title: (msg.member.user.tag),
                        fields : [
                            {name: "Current Server Nickname!", value : String(msg.member.displayName)},
                            {name: "Highest Role!", value : String(msg.member.roles.highest)},
                            {name: "Colour Hexcode!", value: String(msg.member.displayHexColor)},
                            {name: "Server Joined Date!", value: String(msg.member.joinedAt)},
                        ],
                        
                        image : {url : ("https://cdn.discordapp.com/avatars/" + msg.member.user.id + "/" + msg.member.user.avatar + ".png?size=1280")}
                        }]})}
            
            else {
                await msg.reply({
                    fetchReply: true,
                    embeds: [
                        {
                            color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                            title: (JSON.parse((JSON.stringify(msg.mentions.users)))[0].tag),
                            fields : [
                                {name: "Current Server Nickname!", value : JSON.parse((JSON.stringify(msg.mentions.members)))[0].displayName},
                                {name: "Highest Role!", value : "<@&" + JSON.parse((JSON.stringify(msg.mentions.members)))[0].roles[0] + ">"},
                            ],
                            image : {url : ("https://cdn.discordapp.com/avatars/" + JSON.parse((JSON.stringify(msg.mentions.users)))[0].id + "/" + JSON.parse((JSON.stringify(msg.mentions.users)))[0].avatar + ".png?size=1280")}
                        }]})}}}});

fs.readdirSync("./BlancoBot/modules/module_store").forEach(file => {
    client.on('messageCreate', async msg => {
        if (verifyMSG(msg, msg.member.id)){
            if ((msg.content).toLowerCase().slice(0, (file.slice(0, - 10)).toLowerCase().length) === (file.slice(0, - 10)).toLowerCase()) {
                data[file] = require('./modules/module_store/' + file.slice(0, - 10) + '_module.js')
                await msg.reply({
                    fetchReply: true,
                    embeds: [
                        {
                            color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                            image : {url : (String(save_list[0] = String(data[file][Math.floor(Math.random() * String(data[file].length))])))}
                        }],
                    components: [
                        {
                            type: 1,
                            components: [
                                {
                                    type: 2,
                                    label: (file.slice(0, - 10)).toLowerCase() + " Again?",
                                    style: 'SUCCESS',
                                    custom_id: (file.slice(0, - 10)).toLowerCase() + "_repeat"
                                },
                                {
                                    type: 2,
                                    label: "View Original",
                                    style: "LINK",
                                    url: save_list[0]
                                }]}]});

            client.on('interactionCreate', async interaction => { //Function to handle Button Interaction replies
                if (interaction.isButton()) {
                        if (interaction.customId === (file.slice(0, - 10)).toLowerCase() + "_repeat") {
                            await interaction.reply({
                                fetchReply: true,
                                embeds: [
                                    {
                                        color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                                        image : {url : (String(save_list[0] = String(data[file][Math.floor(Math.random() * String(data[file].length))])))}
                                    }],
                                ephemeral: true,
                                components: [
                                    {
                                        type: 1,
                                        components: [
                                            {
                                                type: 2,
                                                label: (file.slice(0, - 10)).toLowerCase() + " Again?",
                                                style: 'SUCCESS',
                                                custom_id: (file.slice(0, - 10)).toLowerCase() + "_repeat"
                                            },
                                            {
                                                type: 2,
                                                label: "View Original",
                                                style: "LINK",
                                                url: save_list[0]
                                            }]}]})}}})}}})});

client.on('messageCreate', async msg => {
    if (verifyMSG(msg, msg.member.id)){
        if (msg.mentions.has("955119550058348585") == true) {
        await msg.reply({
            fetchReply: true,
            embeds: [
                {
                    color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                    image : {url : "https://cdn.discordapp.com/attachments/974423774877347891/987113907564986378/Pinged.png"}
                }]})}}});


client.on('messageCreate', async msg => { //admin
    if (msg.content.toLowerCase().slice(0, 6) === "admin."){
        if (whitelist[0].users.includes(String(msg.author.id)) ===  true){
            if ((msg.content).toLowerCase().slice(0, 11) === "admin.setup"){
                if ((msg.content).toLowerCase() === "admin.setup"){
                        if (whitelist[0].channels.includes(msg.channelId) === false){
                            whitelist[0].channels.push(msg.channelId)
                            fs.writeFile("BlancoBot/modules/admin_module/white_list.json", JSON.stringify(whitelist[0]), err => {})
                            await msg.reply({
                                fetchReply: true,
                                embeds: [{
                                    color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                                    title : ("Channel has been Activated"),
                                    image : {url : thanks},
                                }]})}
                        else {
                            await msg.reply({
                                fetchReply: true,
                                embeds : [
                                    {
                                        color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                                        title: "This Channel Has Already Been Activated",
                                        image: {url: trying}
                                    }]})}}

                else if (msg.content.toLowerCase() === "admin.setup.priority"){
                        if (whitelist[0].servers.includes(msg.guildId) === false){
                            whitelist[0].servers.push(msg.guildId)
                            fs.writeFile("BlancoBot/modules/admin_module/white_list.json", JSON.stringify(whitelist[0]), err => {})
                            await msg.reply({
                                fetchReply: true,
                                embeds: [{
                                    color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                                    title : ("Server has been Activated"),
                                    image : {url : thanks},
                                }]})}
                        else {
                            await msg.reply({
                                fetchReply: true,
                                embeds : [
                                    {
                                        color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                                        title: "This Server Has Already Been Activated",
                                        image: {url: trying}
                                    }]})}}}

            else if (msg.content.toLowerCase().slice(0, 13) === "admin.control"){

                if (msg.content.toLowerCase().slice(0, 20) == "admin.control.member"){
                    if (JSON.parse((JSON.stringify(msg.mentions.users)))[0].id === undefined){await msg.reply("undef Error")}
                    else{
                        if (blacklist[0].users.includes(JSON.parse((JSON.stringify(msg.mentions.users)))[0].id) === false){
                            blacklist[0].users.push(JSON.parse((JSON.stringify(msg.mentions.users)))[0].id)
                            fs.writeFile("BlancoBot/modules/admin_module/black_list.json", JSON.stringify(blacklist[0]), err => {}),
                            console.log(JSON.parse((JSON.stringify(msg.mentions.users)))[0].id)
                            DM_User(JSON.parse((JSON.stringify(msg.mentions.users)))[0].id,
                            {
                                embeds: [{
                                    color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                                    title : "You been blocked by BlancoBot",
                                    image : {url : oh}
                                }]
                            })}}}

                else if ((msg.content).toLowerCase() === "admin.control"){
                    if (blacklist[0].channels.includes(msg.channelId) === false){
                        blacklist[0].channels.push(msg.channelId)
                        fs.writeFile("BlancoBot/modules/admin_module/black_list.json", JSON.stringify(blacklist[0]), err => {})
                        await msg.reply({
                            fetchReply: true,
                            embeds: [{
                                color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                                title : ("Channel has been Blocked by BlancoBot"),
                                image : {url : oh},
                            }]})}
                    else {
                        await msg.reply({
                            fetchReply: true,
                            embeds : [
                                {
                                    color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                                    title: "This Channel Has Already Been Blocked by BlancoBot",
                                    image: {url: oh}
                                }]})}}

                else if (msg.content.toLowerCase() === "admin.control.priority"){
                    if (blacklist[0].servers.includes(msg.guildId) === false){
                        blacklist[0].servers.push(msg.guildId)
                        fs.writeFile("BlancoBot/modules/admin_module/black_list.json", JSON.stringify(blacklist[0]), err => {})
                        await msg.reply({
                            fetchReply: true,
                            embeds: [{
                                color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                                title : ("Server has been Blocked by BlancoBot"),
                                image : {url : oh}
                            }]})}
                    else {
                        await msg.reply({
                            fetchReply: true,
                            embeds : [
                                {
                                    color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                                    title: "This Server Has Already Been Blocked By BlancoBot",
                                    image: {url: oh}
                                }]})}}}}
    else {
        await msg.reply({
            fetchReply: true,
            embeds : [
                {
                    color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                    title: "Contact A Verified User To Activate This Channel",
                    image: {url: trying}}]})}}});
                    