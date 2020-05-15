const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);
  if(!reason) return message.channel.send("Cannot be empty reason.")

  let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#ff4654")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

  //return message.channel.send(reportEmbed); //send msg in current channel
  let reportsChannel = message.guild.channels.find(`name`, "logs") //TODO: set reports channel
  if(!reportsChannel) return message.channel.send("Couldn't find reports channel.");

  message.delete().catch(O_o=>{}); //delete previous message (input command)

  return reportsChannel.send(reportEmbed);
}

module.exports.help = {
    aliases: ['lapor', 'laporkan'],
    name: 'report',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}