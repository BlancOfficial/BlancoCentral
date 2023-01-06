const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pat') //Default
		.setDescription('Posts pat gif') //The Default Layout of a Command
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
