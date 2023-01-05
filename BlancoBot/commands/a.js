const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('A') //Default
		.setDescription('Posts A') //The Default Layout of a Command
        ,
	async execute(interaction) {
		await interaction.reply({
            embeds: [
                {
                    color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                    image : {url : "https://c.tenor.com/ITCxOG7Jd_EAAAAC/gawr-gura-gawr.gif"},
                }],
        }); //Response
	},
};
