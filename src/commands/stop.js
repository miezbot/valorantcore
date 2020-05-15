const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
   if(message.guild === null)return;
  

    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        var VC = message.member.voiceChannel;
  var embed = new Discord.RichEmbed()
.setDescription(`Hai, thank you for using our radio's. and don't forget to join Support Server available [here](https://discord.gg/uz8TfFm)`)
.setFooter("For more information go to Help Menu | vc!help")
.setColor("FF4654")
        var newUserChannel = message.member.voiceChannel;

  
        if (!VC)return;
    VC.leave()
        
      message.reply(embed);
              
};
module.exports.help = {
    aliases: [],
    name: 'stop',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}