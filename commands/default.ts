const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('') //Default
		.setDescription('') //The Default Layout of a Command
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The Category.')
                .setRequired(true)
                .addChoices(
                    { name: '', value: '' },
                )),
	async execute(interaction) {
        const category = interaction.options.getString('category');
		await interaction.reply(''); //Response
	},
};
