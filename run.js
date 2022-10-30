if (require("./auth.json").BlancoBot == "")
    {
        console.log("\nERROR: Enter BlancoBot Tokens inside './auth.json'\n")
    }
else { require("./BlancoBot/BlancoBot") }

if (require("./auth.json").Bruh == "")
    {
        console.log("\nERROR: Enter BruhBot Tokens inside './auth.json'\n")
    }
else { require("./BruhBot/BruhBot") }

if (require("./auth.json").Repeato == "")
    {
        console.log("\nERROR: Enter RepeatoBot Tokens inside './auth.json'\n")
    }
else { require("./RepeatoBot/RepeatoBot") }

//require("./TestoBot/TestoBot")