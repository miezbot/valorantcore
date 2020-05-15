const Discord = require("discord.js");
const osu = require('node-osu');

// Cached variables
let osuApi;

exports.run = (client, message, args) => {
    const { config } = client;
    osuApi = osuApi || new osu.Api("6ea434297ba5c3eaa25b04912c7c1623d2305a65");

    osuApi.getUser({ u: args.join(' ') }).then(user => {
      if(!osu) return message.channel.send("User Not Found.")
        //console.log(user)
        const embed = new Discord.RichEmbed()
            .setColor("#ff4654")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Osu%21Logo_%282015%29.png/600px-Osu%21Logo_%282015%29.png")
            .setAuthor(`${user.name} (${user.id})`, `https://a.ppy.sh/${user.id}`, `https://osu.ppy.sh/users/${user.id}`)
            .setDescription(`User Stats as of ${new Date().toLocaleString()}`)
            .addField("Hit Accuracy", `${Math.round(user.accuracy * 100) / 100}%`, false)
            .addField("Total Score", user.scores.total, false)
            .addField("Ranked Score", user.scores.ranked, false)
            .addField("Level", Math.floor(user.level), true)
            .addField("Play Count", user.counts.plays, true)
            .addField("Rank A Plays", user.counts.A, true)
            .addField("Rank S Plays", user.counts.S, true)
            .addField("Rank SS Plays", user.counts.SS, true);
        message.channel.send(embed);
    })
}
module.exports.help = {
    aliases: [],
    name: 'osu',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}