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
        else {text_ = "<@" + interaction.member + "> pats <@" + target.id + ">"}

		await interaction.reply({
            embeds: [
                {
                    title : text_,
                    color : Math.floor(Math.random()*16777215),
                    image : {url : data[Math.floor(Math.random() * String(data.length))]}
                }],
        }); //Response
	},
};
