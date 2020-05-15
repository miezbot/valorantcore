const hastebin = require('hastebin-gen');

exports.run = (bot, msg, args) => {

     let haste = args.slice(0).join(" ")

        let type = args.slice(1).join(" ")

        if (!args[0]) { return msg.channel.send("Copy & Paste / Some text?") }

        hastebin(haste).then(r => {

            msg.channel.send("`Posted to Hastebin at this URL:`  " + r);

        }).catch(console.error);

        msg.delete();

}        

module.exports.help = {
    aliases: [],
    name: 'hastebin',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}

