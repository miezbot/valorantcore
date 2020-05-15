exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("❌**Error:** You don't have the permission to do that!");

    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown lifted <:love:704591958106177557> WEEEEEEEEEEEEEEEEEEEEEE, enjoy talking while you still can:wink:');
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    })
  };
module.exports.help = {
    aliases: ['unlock'],
    name: 'unlockdown',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}