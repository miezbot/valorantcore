const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");

exports.run = async (client, message, args) => {
    const { body } = await superagent
    .get("http://aws.random.cat/meow");

    const embed = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle("Here's Your Cat")
    .setImage(body.file) 
    .setTimestamp();
    message.channel.send({embed}).then(msg =>{
      msg.react("🐈")
    })
};

module.exports.help = {
    aliases: [],
    name: 'cat',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}