const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme') //Default
		.setDescription('Posts a Meme reaction') //The Default Layout of a Command
        .addStringOption(option =>
            option.setName('reaction')
                .setDescription('Type of reaction')
                .setRequired(true)
                .addChoices(
                    { name: '😤', value: '😤' },
                    { name: 'bonk', value: 'bonk' },
                    { name: 'duck', value: 'duck' },
                    { name: 'dumbass', value: 'dumbass' },
                    { name: 'huh?', value: 'huh?' },
                    { name: 'kinky', value: 'kinky' },
                    { name: 'mommy', value: 'mommy' },
                    { name: 'mood', value: 'mood' },
                    { name: 'nich', value: 'nich' },
                    { name: 'mornin', value: 'mornin' },
                    { name: 'okay?', value: 'okay?' },
                    { name: 'run', value: 'run' },
                    { name: 'sips', value: 'sips' },
                    { name: 'TwT', value: 'twt' },
                    { name: 'um', value: 'um' },


                )),
	async execute(interaction) {
        category = interaction.options.getString('reaction');
		await interaction.reply({
            content: String(require('./modules/str_module_store/' + category + '_module.js'))
        }); //Response
	},
};



                    
                    