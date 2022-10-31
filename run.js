if (require("./auth.json").BlancoBot == "") { console.log("\nERROR: Enter BlancoBot Tokens inside './auth.json'\n") }
else { console.log("Token has been read... Authenticating"); require("./BlancoBot/BlancoBot") };

if (require("./auth.json").Bruh == "") { console.log("\nERROR: Enter BruhBot Tokens inside './auth.json'\n") }
else { console.log("Token has been read... Authenticating"); require("./BruhBot/BruhBot") };

if (require("./auth.json").Repeato == "") { console.log("\nERROR: Enter RepeatoBot Tokens inside './auth.json'\n") }
else { console.log("Token has been read... Authenticating"); require("./RepeatoBot/RepeatoBot") };

//if (require("./auth.json").Testo == "") { console.log("\nERROR: Enter TestoBot Tokens inside './auth.json'\n") }
//else { console.log("Token has been read... Authenticating"); require("./TestoBot/TestoBot") };