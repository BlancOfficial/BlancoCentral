const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info') //Default
		.setDescription('Information on the Bot') //The Default Layout of a Command
        ,
	async execute(interaction) {
        data = require('../modules/embed_module_store/help_module.js')
		await interaction.reply({
            embeds: [
                {
                    data
                }],
        }); //Response
	},
};
