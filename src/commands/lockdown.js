exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌**Error:** You don't have the permission to do that!");

  message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    })
      message.channel.send(`Damnn, **${message.author.username}** just locked the channel down. Don't worry, Admins will soon open the chat again so be patient.`);
  };
  
module.exports.help = {
    aliases: ['lock'],
    name: 'lockdown',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}