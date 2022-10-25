if (require("./auth.json") == require("./_.json"))
    {
        console.log("Enter Bot Tokens inside './auth.json'")
    }

else 
    {
        require("./BlancoBot/BlancoBot")
        require("./BruhBot/BruhBot")
        require("./RepeatoBot/RepeatoBot")
        //require("./TestoBot/TestoBot")
    }