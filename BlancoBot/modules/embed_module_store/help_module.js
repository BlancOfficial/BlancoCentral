const thank = "https://cdn.discordapp.com/attachments/806288700736405506/1034498054956531803/unknown.png"
const version_Bot = "Public Release Version: Alpha_c"
const update_log = "`Added server verification options, just to prevent bot going boom incase my coding goes wrong 😌`"

module.exports = {
        color : (String("#" + Math.floor(Math.random()*16777215).toString(16))),
        description : ("Currently running " + version_Bot ),
        image : {url : thank},
        fields: [
            { name: '***UPDATE LOG***', value: update_log }
        ],
        fields: [
            { name: 'Commands', value: '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=' },
            { name: 'a', value: 'a', inline: true },
            { name: 'awoo', value: 'Wolf Image (ig some dogs aswell)', inline: true },
            { name: 'bnuy', value: 'Bunny Image (Floooooff)', inline: true },
            { name: 'catto', value: 'Cat Image (Meow?)', inline: true },
            { name: 'ferret', value: 'Ferret Image (ofc the best)', inline: true },
            { name: 'foxy', value: 'Fox Image (Curtesy of Foxy)', inline: true },
            { name: 'guwr', value: 'Guwr Gura Image (Our Resident Shark)', inline: true },
            { name: 'hug', value: 'Hugs You (^^)', inline: true },
            { name: 'koko', value: 'Koala Image', inline: true },
            { name: 'lion', value: 'Lion Image', inline: true },
            { name: 'meemee', value: 'Aquatic life (Not varied enough TwT)', inline: true },
            { name: 'panda', value: 'Panda Image', inline: true },
            { name: 'pat', value: 'Pats You', inline: true },
            { name: 'ping / pong', value: 'Play a Game of Ping Pong', inline: true },
            { name: 'Profile (Pingable)', value: 'View Profile (Ping someone to see their profile)'},
        ]
    }