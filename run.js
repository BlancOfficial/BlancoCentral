if (require("./auth.json").BlancoBot == "") {console.log("\nERROR: Enter BlancoBot's Tokens inside './auth.json'\n") }
else { console.log("BlancoBot's Token has been read... Authenticating"); require("./BlancoBot/BlancoBot") }