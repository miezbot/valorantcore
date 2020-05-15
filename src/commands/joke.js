const Discord = require("discord.js");
let giveMeAJoke = require('give-me-a-joke');;

module.exports.run = async (bot, message, args) => {
    giveMeAJoke.getRandomCNJoke(function(joke){
        message.channel.send(joke)
    })
}

module.exports.help = {
    aliases: [],
    name: 'joke',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}