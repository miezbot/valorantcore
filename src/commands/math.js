const math = require('mathjs')

exports.run = async (client, message, args, level) => {
  try {
    if (!args[0]) return message.reply('You need to give the equation!')

    message.channel.send('`Output:` ' + math.eval(args.join(' ')))
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch()
  }
}

module.exports.help = {
    aliases: ['berhitung'],
    name: 'math',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}