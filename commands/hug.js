const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug') //Default
		.setDescription('Posts hug gif')
        .addUserOption(option =>
            option.setName('victim')
                .setDescription('Hugs the victim')
                .setRequired(false))
        ,
	async execute(interaction) {
        data = require('../modules/module_store/hug_module.js')
        const target = interaction.options.getUser('victim') ?? interaction.member ?? interaction.user ?? "I"
        if (target == null ||  interaction.member == null || target.id == interaction.member.id){text_ = "BlancoBot hugged You!"}
        else {text_ = "<@!" + interaction.member + "> hugs <@!" + target.id + ">"}

		await interaction.reply({
            embeds: [
                {
                    description : text_,
                    color : Math.floor(Math.random()*16777215),
                    image : {url : data[Math.floor(Math.random() * String(data.length))]}
                }],
        }); //Response
	},
};
