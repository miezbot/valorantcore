const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .addField("Invite Bot", `[**Click Here!**](${`https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958591`})`, true)
  .setFooter("Developer : Miiez#8781")
  .setColor("RANDOM")
  .addField("Support Server:", "https://discord.gg/zJYzD4P")
  message.channel.send(embed)
  
}
module.exports.help = {
    aliases: [],
    name: 'invite',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}