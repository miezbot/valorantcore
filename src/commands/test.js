const Discord = require("discord.js");
const request = require("request");

exports.run = (client, message, _args) => {
    try {
    //This is a command purely for memes
    request("https://some-random-api.ml/meme", function (error, _response, body) {
        if(error) return message.channel.send('Sorry, it appears an error has occurred fetching your meme!').then(() => console.error(error.message))

        const json = JSON.parse(body);
        const { id, image, caption, category } = json;

        const emb = new Discord.RichEmbed();
            emb.setDescription(`${caption} - ${category} #${id}`);
            emb.setColor("#ff4654");
            emb.setImage(image);

        message.channel.send(emb);
    });
    } catch (e) {
        console.error(e.message);
    }
}


module.exports.help = {
    aliases: ['tos', 't'],
    name: 'test',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}

