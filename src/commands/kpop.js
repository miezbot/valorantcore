module.exports.run = async (client, message, args) => {
  const Discord = require("discord.js")

   if(message.guild === null)return;
  

    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        var VC = message.member.voiceChannel;
  
        var newUserChannel = message.member.voiceChannel;
//http://hyades.shoutca.st:8043/stream
        var embed = new Discord.RichEmbed()
.setColor("FF4654")
.setAuthor(`Join Channel!`,message.author.avatarURL)        
.setDescription(`**Channel Name : ${newUserChannel}**
Thanks for using K-Pop Radio's, hope u enjoy the song.. and don't forget to join Support Server available [here](https://discord.gg/uz8TfFm)`)
.setFooter("if you want change radio's station please stop first! | vc!stop")
        if(!newUserChannel) return message.reply("Please join `Voice Channel` first.")
        if (!VC)return;
    VC.join()
        .then(connection => {
      message.reply(embed)
            const dispatcher = connection.playStream('https://listen.moe/kpop/fallback');
            dispatcher.on("end", end => {VC.leave()});
      

        })
        .catch(console.error);
};

module.exports.help = {
    aliases: [],
    name: 'kpop',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}