function startup(_JSON, BotName){
    if (_JSON == "") {console.log("\nERROR: Enter " + BotName + " Tokens inside './auth.json'\n") }
    else { console.log(BotName + "'s Token has been read... Authenticating"); require("./" + BotName + "/" + BotName) }
}

startup(require("./auth.json").BlancoBot, "BlancoBot")
startup(require("./auth.json").Bruh, "BruhBot")
startup(require("./auth.json").Repeato, "RepeatoBot")