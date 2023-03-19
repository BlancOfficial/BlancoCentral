//perma variables and origin variables
const Discord = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
process.on('unhandledRejection', error => {console.log(error)}); //>.> if it works, it works
client.commands = new Collection();

client.once(Events.ClientReady, c => 
	{ 
		console.log(`Ready! Logged in as ${c.user.tag}`);
		client.user.setActivity('You Commit War Crimes', { type: ActivityType.Watching });
	});


client.login(require("./auth.json").BlancoBot); //Bot accesses discord using Auth Discord Token

// Runs when bot joins a new server
client.on('guildCreate', guild => { guild.systemChannel.send(`Thanks for inviting me to the server ^^`) });

//Checking all .js files in the command path for all components
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

	if ('data' in command && 'execute' in command) { client.commands.set(command.data.name, command); } 
	else { console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`); }
}

//Command Event listeners
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) { console.error(`No command matching ${interaction.commandName} was found.`); return; }

	try { await command.execute(interaction); } 
	catch (error) { console.error(error); await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true }); }
	}
);
