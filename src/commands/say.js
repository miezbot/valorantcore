const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if(message.author.id !== "312916765078192139") return message.channel.send("Only bot owner Miiez#8781")
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}
module.exports.help = {
    aliases: [],
    name: 'say',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}
