const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('profile') //Default
		.setDescription('View Profile of a specific User (Currently a Work in Progress)') //The Default Layout of a Command
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
                ({
                    content : "https://cdn.discordapp.com/attachments/974423774877347891/984579953830019072/Keep_Trying.png"
                }); //Response
            }
        else
            {
                await interaction.reply
                ({
                    content : "https://cdn.discordapp.com/attachments/974423774877347891/984579953830019072/Keep_Trying.png"
                }); //Response
            }
	},
};
