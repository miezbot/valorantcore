const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args) => {
  if(message.channel.id !== '699905027405381662')
    return message.channel.send("Please go to <#699905027405381662> for change nickname.")
  let nick = args.join(" ").slice(0)
  if(!nick) return message.channel.send("Please, input your Nickname.")
  message.member.setNickname(nick)  
  message.reply(`Done! Changing your nickname to ${nick}`)
};
module.exports.help = {
    aliases: ['cn'],
    name: 'renick',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}
