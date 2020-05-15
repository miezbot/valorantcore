const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.reply("Can't find user!");
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You don't have `KICK_MEMBERS` permissions.**")
  let kReason = args.join(" ").slice(22);
  if(!kReason) return message.reply("Please provide a reason!")

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#ff4654")
  .addField("User", `${kUser}`)
  .addField("Moderator", `${message.author}`)
  .addField("Reason", `${kReason ? kReason : "Because staff have self reason."}`)
  .setTimestamp();

  let kickChannel = message.guild.channels.find(`name`, 'mod-log');
  if(!kickChannel) return message.channel.send(":X: **| Can't find `mod-logs` channel.**");
   let embed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#f45642")
  .addField("User", kUser.user.tag)
  .addField("Moderator", message.author.tag)
  .addField("Time", message.createdAt.toLocaleString())
  .addField("Reason", `${kReason ? kReason : "Because staff have self reason."}`);
  var embed1 = new Discord.RichEmbed()
        .setColor("#3fe84d")
        .setTitle("Success Kicked Member!")
message.channel.send(embed1)
kUser.kick(kReason)
kickChannel.send(kickEmbed);
try{kUser.send(embed)}catch(e) {message.channel.send("Unable to send message to user.")}

}
module.exports.help = {
    aliases: [],
    name: 'kick',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}