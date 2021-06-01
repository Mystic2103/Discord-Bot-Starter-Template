
//Constants must be declared for the bot to work
const Discord = require("discord.js");
const client = new Discord.Client();
const express = require( 'express' ); 
let app = express(),
Discordie = require( 'discordie' ),
Events    = Discordie.Events;



//config.json is the file with your bot's token
const config = require("./config.js");
Client = new Discordie( { autoReconnect : true } );



//Your bot's status

client.on('ready', () => {
    console.log(`${client.user.tag} is Online!`) //Console Logs "Name of your bot" is Online
    client.user.setActivity(`YOUR TEXT`, { type: 'LISTENING' }) //types can be "LISTENING", "PLAYING", "WATCHING", and "STREAMING" (Streaming however is more advanced)
});


//Maintains port connection
try {
	app.listen( config.port, () => {
		console.log( 'Express server listening on port ', config.port ); //Console Logs the port number
		Client.connect( {
			token : config.token
		} );
	} );
	
  } catch ( e ) {
	console.log( JSON.stringify( e ) );
}

// If you need to expand into more files copy the line below and add the name of your file instead of the example.js file in the new line
require('./main.js')(client);
//require('./newfilename.js')(client);   <---- replace "newfilename" with your files name and remove the //

client.login(config.token);