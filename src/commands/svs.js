const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  message.delete()
  if(message.author.id !== "312916765078192139") return message.channel.send("Only bot owner Miiez#8781")
  let msg =  bot.guilds.map(guild => `${guild.name}(${guild.id}) Members: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle("Server List")
  .setDescription(`\`\`\`\n${msg}\n\`\`\``)
  .setColor("#ff4654");
  message.channel.send(embed).then(msg =>{
    msg.delete(3000)
  })
}
module.exports.help = {
    aliases: ['serverlist'],
    name: 'svs',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}