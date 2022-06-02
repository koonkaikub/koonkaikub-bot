// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Require file system
const fs = require('fs');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  client.user.setPresence({ activities: [{ name: '/help | kb!help' }], status: 'online' });
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);