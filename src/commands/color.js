const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");

exports.run = async (client, message, args) => {
    if(!args[0] || args[0] === 'help') return message.reply(" :white_check_mark: `Usage : vc!color ff4654`")
    var isOk = /^[0-9A-F]{6}$/i.test(args[0])
    if (isOk === false) return message.reply("Please input correct hex color! / without the #")
    
    const { body } = await superagent
    .get(`https://api.alexflipnote.dev/color/` + args[0]);

    const embed = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle(body.name)
    .setDescription("Hex: " + body.hex + '\n' + "RGB: " + body.rgb)
    .setImage(body.image) 
    message.channel.send({embed});
};

module.exports.help = {
    aliases: ['searchcolor', 'sc'],
    name: 'color',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}