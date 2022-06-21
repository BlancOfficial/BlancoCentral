const thank = "https://cdn.discordapp.com/attachments/806288700736405506/973295870550360164/Thanks.png"
const version_Bot = "v1.1.5"
const update_log = "`Added server verification options, just to prevent bot going boom incase my coding goes wrong 😌`"

module.exports = {
        color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
        description : ("Currently running " + version_Bot ),
        image : {url : thank},
        fields: [
            { name: '***UPDATE LOG***', value: update_log }
        ],
        fields: [
            { name: 'Commands', value: '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=' },
            { name: 'a', value: 'a', inline: true },
            { name: 'awoo', value: 'Posts Wolf', inline: true },
            { name: 'bnuy', value: 'Posts Bunny', inline: true },
            { name: 'catto', value: 'Posts Cat', inline: true },
            { name: 'ferret', value: 'Posts Ferret', inline: true },
            { name: 'foxy', value: 'Posts Fox', inline: true },
            { name: 'guwr', value: 'Guwr Gura', inline: true },
            { name: 'hug', value: 'Hugs You', inline: true },
            { name: 'koko', value: 'Posts Koala', inline: true },
            { name: 'lion', value: 'Posts Lion', inline: true },
            { name: 'meemee', value: 'Posts Sealife', inline: true },
            { name: 'panda', value: 'Posts Panda', inline: true },
            { name: 'pat', value: 'Pats You', inline: true },
            { name: 'ping', value: 'Pongs Back', inline: true },
            { name: 'pong', value: 'Pings Back', inline: true },
            { name: 'Profile (Pingable)', value: 'View Profile'},
        ]
    }