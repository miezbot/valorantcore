const Discord = require('discord.js');
const request = require('request');

exports.run = (client, message, args) => {
    let url = 'https://random.dog/woof.json';
    try {
        request({
            url: url,
            json: true
        }, function (error, response, body) {

            if (!error && response.statusCode === 200) {
                var ok = new Discord.RichEmbed()
                .setColor("#ff4654")
                .setTitle("Here's Your Dog")
                .setImage(body.url) 
                .setTimestamp();
                message.channel.send(ok).then(msg =>{
                msg.react("🐕")
                })
              console.log(body.url);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports.help = {
    aliases: [],
    name: 'dog',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}
/*const { body } = await request.get('https://aws.random.cat/meow');
			return msg.say({ files: [body.file] });
		} catch (err) {
			return msg.reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}*/