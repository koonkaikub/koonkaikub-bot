const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { token , CLIENT_ID , GUILD_ID } = require('./config.json');

const commands = [{
  name: 'ping',
  description: 'Replies with Pong!'
},{
    name: 'help',
    description: 'Replies with Command list!'
  },{
    name: 'invite',
    description: 'Replies with invite link!'
  },{
    name: 'user',
    description: 'Replies with user infomation!'
  },{
    name: 'server',
    description: 'Replies with server infomation!'
  },{
    name: 'whfoods',
    description: 'Replies with random foods!'
  },{
    name: 'dm',
    description: 'Direct massages'
  }]; 

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();