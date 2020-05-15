const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(bUser === message.author) return message.channel.send("Are you retarded? Why do you want to ban yourself?")
    if(!bUser) return message.reply("Can't find user!");
    let bReason = args.join(" ").slice(22);
   if(!bReason) return message.reply("Please provide a reason!")
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<:no_entry_sign:432418492667396097> **| You don't have `BAN_MEMBERS` permissons.**");
    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ff4654")
    .addField("User", bUser.user.tag)
    .addField("Moderator", message.author.tag)
    .addField("Reason", bReason)
    .setTimestamp()
    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("<:x:432418492667396097> **| Can't find `mod-logs` channel.**");
    let embed = new Discord.RichEmbed()
    .setTitle("BAN")
    .addField("Banned In", message.guild.name)
    .setColor("#ff4654")
    .addField("Moderator", message.author.tag)
    .addField("Reason", bReason)
    bUser.send(embed);
  message.channel.send("<:white_check_mark:432418492889694210> **| That member has been banned.**")
  bUser.ban(bReason)
  incidentchannel.send(banEmbed);
}
module.exports.help = {
    aliases: ['banned'],
    name: 'ban',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}
