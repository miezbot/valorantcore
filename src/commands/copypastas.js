const fs = require("fs");

exports.run = (client, message, args) => {
let copypastas = JSON.parse(fs.readFileSync("./src/data/copypastas.json", "utf8"));
    args = args.join(" ");
    message.channel.send(`${copypastas[Math.floor(Math.random() * copypastas.length)]}`);
}

module.exports.help = {
    aliases: ['cp'],
    name: 'copypastas',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}