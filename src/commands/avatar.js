const Discord =  require('discord.js');
exports.run = (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL : message.author.avatarURL;
    if (message.mentions.users.size > 0) {
      const embed = new Discord.RichEmbed()
        .setColor("#ff4654")
        .setAuthor(`Avatar`)
        .setTitle(`ID : (${message.mentions.users.first().id})`)
        .setImage(`${avatar}`)
        message.channel.send({embed});
    } else {
      const embed = new Discord.RichEmbed()
      .setColor("#ff4654")
      .setAuthor(`Avatar`)
      .setTitle(`ID : (${message.author.id})`)
      .setImage(`${avatar}`)
      message.channel.send({embed});
    }
}

module.exports.help = {
    aliases: ['ava'],
    name: 'avatar',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}