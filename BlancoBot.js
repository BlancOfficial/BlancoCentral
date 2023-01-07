//perma variables and origin variables
const Discord = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
save_list = ["https://cdn.discordapp.com/attachments/974423774877347891/987468861752352818/BlancoError.png"];
error_count = 0;
const thanks = "https://cdn.discordapp.com/attachments/806288700736405506/973295870550360164/Thanks.png";
const trying = "https://cdn.discordapp.com/attachments/974423774877347891/984579953830019072/Keep_Trying.png";
const oh = "https://cdn.discordapp.com/attachments/721166435413524490/1033994602207776799/unknown.png";
const recieved = "https://i.redd.it/3belzjkbpex61.jpg";
var data = [];


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();


client.once(Events.ClientReady, c => { console.log(`Ready! Logged in as ${c.user.tag}`);}); //activates client and awaits connecetion confirmation

client.login(require("./auth.json").BlancoBot); //Bot accesses discord using Auth Discord Token

require('events').EventEmitter.defaultMaxListeners = 80; // Current Event Listeners are below this, increased for better slack 

process.on('unhandledRejection', error => {console.log(error); error_count = error_count + 1}); //>.> if it works, it works

client.on('guildCreate', guild => { // Runs when joining a new server
    guild.systemChannel.send(`Thanks for inviting me to the server ^^`)
    guild.systemChannel.send("Enter `/info` to get started, Just like this : ")
    });

client.on('guildMemberAdd', new_member => { //DM new user
    new_member.send(`Welcome New Friend!`)
    new_member.send("https://cdn.discordapp.com/attachments/974423774877347891/993944924720480398/Welcome.png")
});

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});



