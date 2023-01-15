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
                    footer : {text : "ⓘ Bot is suspected to contain illegal concentrations of cuteness. Appease it's appetite for wholesomeness by DMing Blanc cute pics", iconURL : "https://cdn.discordapp.com/attachments/806288700736405506/1064289826871967855/chel__1x1.png"}
                }],
        }); //Response
	},
};
