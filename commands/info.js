const { SlashCommandBuilder } = require('discord.js');

const thank = "https://cdn.discordapp.com/attachments/806288700736405506/1034498054956531803/unknown.png"
const version_Bot = "Public Release Version: Alpha_D"
const update_log = "`Implemented Slash Commands, Still working on pingable hugs/pats and profile features`"

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info') //Default
		.setDescription('Information on the Bot') //The Default Layout of a Command
        ,
	async execute(interaction) {
        const info = require('../modules/embed_module_store/help_module.js')
		await interaction.reply({
            embeds: [
                {
                    color : Math.floor(Math.random()*16777215),
                    description : ("Currently running " + version_Bot + "\n" + "Change log : " + update_log),
                    image : {url : thank},
                    footer : {text : "ⓘ Bot is suspected to contain illegal concentrations of cuteness. Appease it's appetite for wholesomeness by DMing Blanc cute pics", iconURL : "https://cdn.discordapp.com/attachments/806288700736405506/1064289826871967855/chel__1x1.png"}
                }],
        }); //Response
	},
};