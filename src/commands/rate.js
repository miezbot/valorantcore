const Discord = require("discord.js")
 
module.exports.run = async (bot, message, args) => {

let ratus = message.mentions.members.first();
if(!ratus) return message.channel.send("Tag someone to rate them!");

let rates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let result = Math.floor((Math.random() * rates.length));

if(ratus.user.id === message.author.id) {
  return message.channel.send(`**${message.author.username}**, I'd give you ${result}/10 :white_check_mark:`);
} else return message.channel.send(`I'd give **__${ratus.user.username}__** ${result}/10 :white_check_mark:`);

}

module.exports.help = {
    aliases: [],
    name: 'rate',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}

