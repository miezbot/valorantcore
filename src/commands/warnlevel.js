const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
const error = ("./error.json")
exports.run = (client, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply('You must mention someone to check their warns.').catch(console.error);
    if(!user) return message.reply("Couldn't find that user...");
    let reason = `${warns[`${user.id}, ${message.guild.id}`].warns} Yolo`;
    if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };
  else{
    reason = `${error.message_error}`
  }


    const embed = new Discord.RichEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Action:', 'Check')
    .addField('User:', `<@!${user.id}>`)
    .addField('Number of warnings:', warns[`${user.id}, ${message.guild.id}`].warns)
    message.channel.send({embed});
}
module.exports.help = {
    aliases: ['warncheck'],
    name: 'warnlevel',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}