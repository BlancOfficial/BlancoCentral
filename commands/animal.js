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
                )),
	async execute(interaction) {
        const category = interaction.options.getString('species') ?? 'error';
        const data = require('../modules/module_store/' + category + '_module.js')
		await interaction.reply({
            embeds: [
                {
                    color : Math.floor(Math.random()*16777215),
                    image : {url : data[Math.floor(Math.random() * String(data.length))]},
                    footer : {text : "ⓘ Bot is suspected to contain illegal concentrations of cuteness. Appease it's appetite for wholesomeness by DMing Blanc cute pics", iconURL : "https://cdn.discordapp.com/attachments/806288700736405506/1064289826871967855/chel__1x1.png"}
                }],
        }); //Response
	},
};
