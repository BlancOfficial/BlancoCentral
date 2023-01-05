fail_chck=0; chck=0

function startup(_JSON, BotName){
    chck=chck+1
    if (_JSON == "") {fail_chck=fail_chck+1; console.log("\nERROR: Enter " + BotName + " Tokens inside './auth.json'\n") }
    else { console.log(BotName + "'s Token has been read... Authenticating"); require("./" + BotName + "/" + BotName) }
}

startup(require("./auth.json").BlancoBot, "BlancoBot")
startup(require("./auth.json").Bruh, "BruhBot")
startup(require("./auth.json").Repeato, "RepeatoBot")
//startup(require("./auth.json").Testo, "TestoBot")

if(fail_chck=chck)
    {
        console.log("ERROR: No Tokens have been entered, Program failed to execute")
    }