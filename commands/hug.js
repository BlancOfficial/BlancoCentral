const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug') //Default
		.setDescription('Posts hug gif') //The Default Layout of a Command
        ,
	async execute(interaction) {
        data = require('../modules/module_store/hug_module.js')
		await interaction.reply({
            embeds: [
                {
                    color : Math.floor(Math.random()*16777215),
                    image : {url : data[Math.floor(Math.random() * String(data.length))]}
                }],
        }); //Response
	},
};
