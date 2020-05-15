const Discord = require('discord.js')

module.exports.run = (client, message, args, utils) => {
    
  var koko = new Discord.RichEmbed()
  .setTitle("P")
  .setDescription("KOKO")
  .setFooter("PELER")
  message.channel.send(koko)
}

module.exports.help = {
    aliases: ['olah', 'hai', 'saymepinguselessbot'],
    name: 'halo',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}