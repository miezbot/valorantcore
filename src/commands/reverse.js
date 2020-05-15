exports.run = function (bot, msg, args) {
    if (args.length < 1) {
      throw msg.channel.send("Please input your text to reverse.")
    }
    msg.channel.send(args.join(' ').split('').reverse().join(''));


}


module.exports.help = {
    aliases: [],
    name: 'reverse',
    description: 'Reverse Text',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}