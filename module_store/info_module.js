const thank = "https://cdn.discordapp.com/attachments/955121751094882336/955525144963596348/Thanks.png"
const update_info = require('./module_store/help_module.js')
const version_Bot = "v1.1.1"
const update_log = "***UPDATE LOG***\n```Reimplemented Ping Pong... but better\nRepeating commands that had previously been hidden can now be shared in server by pressing the 'Reveal?' button...\n    This feature was soo much harder to figure out than I'd thought it'd be\nOn request, an 'NSFW' command has been added```"

module.exports = ["Currently running " + version_Bot +  " of BlancoBot\n\n" + update_log + "\n" + thank + "\n" + update_info]