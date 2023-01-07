const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('animal') //Default
		.setDescription('Posts an Animal Image') //The Default Layout of a Command
        .addStringOption(option =>
            option.setName('species')
                .setDescription('Species of the animal')
                .setRequired(true)
                .addChoices(
                    { name: 'Dog', value: 'awoo' },
                    { name: 'Bunny', value: 'bnuy' },
                    { name: 'Cat', value: 'catto' },
                    { name: 'Ferret', value: 'ferret' },
                    { name: 'Fox', value: 'foxy' },
                    { name: 'Guwr Gura', value: 'guwr' },
                    { name: 'Koala', value: 'koko' },
                    { name: 'Lion', value: 'lion' },
                    { name: 'Fish', value: 'meemee' },
                    { name: 'Panda', value: 'panda' },
                    { name: 'ping', value: 'ping' },
                    { name: 'pong', value: 'ping' },
                )),
	async execute(interaction) {
        console.log("")
        const category = interaction.options.getString('species') ?? 'error';
        const data = require('../modules/module_store/' + category + '_module.js')
		await interaction.reply({
            embeds: [
                {
                    color : Math.floor(Math.random()*16777215),
                    image : {url : (String(save_list[0] = String(data[Math.floor(Math.random() * String(data.length))])))}
                }],
        }); //Response
	},
};
