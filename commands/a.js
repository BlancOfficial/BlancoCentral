const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('a') //Default
		.setDescription('Posts A') //The Default Layout of a Command
        ,
	async execute(interaction) {
		await interaction.reply({
            embeds: [
                {
                    color : Math.floor(Math.random()*16777215),
                    image : {url : "https://c.tenor.com/ITCxOG7Jd_EAAAAC/gawr-gura-gawr.gif"},
                }],
        }); //Response
	},
};