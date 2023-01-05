const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pat') //Default
		.setDescription('Posts pat gif') //The Default Layout of a Command
        ,
	async execute(interaction) {
        data[file] = require('../modules/module_store/pat_module.js')
		await interaction.reply({
            embeds: [
                {
                    color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
                    image : {url : (String(save_list[0] = String(data[file][Math.floor(Math.random() * String(data[file].length))])))}
                }],
        }); //Response
	},
};
