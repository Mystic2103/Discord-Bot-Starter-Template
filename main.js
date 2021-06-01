

module.exports = function(client) {   //Always has to be added when adding a new file to the bot

    //Required constants
    const prefix = "YOUR PREFIX";
    const Discord = require("discord.js");


    client.on("message", function(message) {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();


        //Simple latency command
        if (command === "ping") {
            message.channel.send(`:ping_pong: Pong **(${Date.now() - message.createdTimestamp}ms)**`) 
        }


       // You could add more commands here
    


    });





};  //End of the module.exports 