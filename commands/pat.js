const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pat') //Default
		.setDescription('Posts pat gif') //The Default Layout of a Command
        .addUserOption(option =>
            option.setName('victim')
                .setDescription('Pats the victim')
                .setRequired(false))
        ,
	async execute(interaction) {
        const data = require('../modules/module_store/pat_module.js')
        const target = interaction.options.getUser('victim') ?? interaction.member ?? interaction.user ?? "I"
        if (target == null ||  interaction.member == null || target.id == interaction.member.id){text_ = "BlancoBot Pats You!"}
        else {text_ = "<@!" + interaction.member + "> pats <@!" + target.id + ">"}

		await interaction.reply({
            embeds: [
                {
                    description: text_,
                    color : Math.floor(Math.random()*16777215),
                    image : {url : data[Math.floor(Math.random() * String(data.length))]},
                    footer : {text : "ⓘ Bot is suspected to contain illegal concentrations of cuteness. Appease it's appetite for wholesomeness by DMing Blanc cute pics", iconURL : "https://cdn.discordapp.com/attachments/806288700736405506/1064289826871967855/chel__1x1.png"}
                }],
        }); //Response
	},
};
