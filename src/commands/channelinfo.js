const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let nsfwV = message.channel.nsfw ? 'Yes' : 'No';
    let parentV = message.channel.parent ? message.channel.parent : 'Not have any Catergory Channel.';
    let topicV = message.channel.topic ? message.channel.topic : 'No topic on this Channel.';
    let embed = new Discord.RichEmbed()
        .setTitle('Channel: ' + message.channel.name)
        .setDescription('Topic: ' + topicV)
        .addField('NSFW?', nsfwV, true)
        .addField("Category: ", parentV, true)
        .addField('Position: ', message.channel.position, true)
        .setColor("#ff4654");

    message.channel.send(embed);
}


module.exports.help = {
    aliases: ['channel'],
    name: 'channelinfo',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}