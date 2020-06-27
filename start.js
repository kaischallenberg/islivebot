const opn = require("opn");

var token = "{TOKEN}";
var clientid = "{CLIENTID}";
var client = clientid;


/*client.on("message", (channel, userstate, message, self) => {
    // Don't listen to my own messages..
    if (self) return;
    console.log(userstate);
    // Handle different message types..
    switch(userstate["message-type"]) {
        case "chat":
            if (userstate.mod == true && message.startsWith("!leistenmsg") == true){
                    game = (message.slice(12));
                    game = game.toUpperCase();
                    gamelength = game.length;
                    console.log(gamelength);

                    if(gamelength <= 0){
                        setTimeout(() => {
                            client.say(*/opn('https://www.youtube.com/watch?v=dQw4w9WgXcQ');/*"thejocraft_live", userstate.username + " Folgende Spiele befinden sich zurzeit in der Datenbank:")
                            setTimeout(() => {
                                client.say("thejocraft_live", "Minecraft, RedstoneWorld, Rotsteinpark, Satisfactory, Quiplash, Trivia Murder Party, Guesspionage")
                            }, 20);
                        }, 20);
                        

                    } else {
                        console.log("Voller Command");
                        start(game)
                        }
                    };
            break;
        default:
            // Something else ? nope lol
            break;
    }
});
*/
