const Discord = require("discord.js");
  
exports.run = (client, message, args) => {
    var statuses = {
			online: '💚 Online',
			idle: '💛 Idle',
			dnd: '❤ Do Not Disturb',
			offline: '💔 Offline'
		}
  let embed2 = new Discord.RichEmbed()
  .setColor("#ff4654")
  .setThumbnail(message.author.avatarURL)
  .addField("Username ", `${message.author.tag} (ID: ${message.author.id})`, true)
  .addField("Playing ", `${message.author.presence.game === null ? "None" :  message.author.presence.game.name}`, true)
  .addField("Nickname ", `${message.member.displayName}`, true)
  .addField("Role(s) ", `${message.member.roles.map(r => r.name).join(", ")}`)
  .addField("Highest Role ", message.member.highestRole.name)
  .addField("Joined Guild At ", `${message.member.joinedAt.toDateString()}`)
  .addField("Joined Discord At ", `${message.author.createdAt.toDateString()}`)
  .addField("Status", `${statuses[message.member.presence.status]}`, true)
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL);
if (message.mentions.users.size < 1) return message.channel.send(embed2);
let member = message.mentions.members.first();
 if(!member) return message.reply("Sorry user not found.") 
let embed = new Discord.RichEmbed()
  .setColor("#ff4654")
  .setThumbnail(member.user.avatarURL)
  .addField("Username ", `${member.user.tag} (ID: ${member.id})`, true)
  .addField("\nPlaying ", `${member.user.presence.game === null ? "Nothing" :  member.user.presence.game.name}`, true)
  .addField("\nNickname ", `${member.nickname === null ? "None" : member.nickname}`, true)
  .addField("Role(s) ", `${member.roles.map(r => r.name).join(", ")}`)
  .addField("Highest Role ", member.highestRole.name)
  .addField("Joined Guild At ", `${member.joinedAt.toDateString()}`)
  .addField("Joined Discord At ", `${member.user.createdAt.toDateString()}`)
  .addField("Status", `${statuses[message.member.presence.status]}`, true)
  .setTimestamp()
  .setFooter(member.user.username, member.user.avatarURL);
  message.channel.send({embed})
}
module.exports.help = {
    aliases: ['user', 'info'],
    name: 'userinfo',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}
