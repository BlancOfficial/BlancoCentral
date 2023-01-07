const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo') //Default
		.setDescription('BlancoBot Echos Back what you type') //The Default Layout of a Command
        .addStringOption(option =>
            option
                .setName('text')
                .setDescription('The Text BlancoBot Echoes')
                .setRequired(true)
                ),
	async execute(interaction) {
        const replyText = interaction.options.getString('text') ?? '*Echo Echo*';
		await interaction.reply({
            content : replyText,
        }); //Response
	},
};
