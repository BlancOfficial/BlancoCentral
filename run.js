if (require("./auth.json").BlancoBot == "")
    {
        console.log("\n\nERROR: Enter Bot Tokens inside './auth.json'\n\n")
    }

else 
    {
        require("./BlancoBot/BlancoBot")
        require("./BruhBot/BruhBot")
        require("./RepeatoBot/RepeatoBot")
        //require("./TestoBot/TestoBot")
    }