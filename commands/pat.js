const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pat') //Default
		.setDescription('Posts pat gif') //The Default Layout of a Command
        ,
	async execute(interaction) {
        const data = require('../modules/module_store/pat_module.js')
		await interaction.reply({
            embeds: [
                {
                    color : Math.floor(Math.random()*16777215),
                    image : {url : data[Math.floor(Math.random() * String(data.length))]}
                }],
        }); //Response
	},
};
