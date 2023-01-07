const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile_wip') //Default
		.setDescription('View Profile of a specific User') //The Default Layout of a Command
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('The member to print the profile of. Default is yourself')
                .setRequired(false)),
	async execute(interaction) {
        const target = interaction.options.getUser('User') ?? 'null';
        if (target == 'null')
            {
                await interaction.reply
                (
                    ''
                ); //Response
            }
        else
            {
                await interaction.reply
                (
                    ''
                ); //Response
            }
	},
};
