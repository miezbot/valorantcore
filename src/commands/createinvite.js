const Discord = require('discord.js')
exports.run = (client, message, args) => {
    
    var embed = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle("Usage Command")
    .setFooter('Command for Create Invite.')
    .setDescription("`usage : vc!createinvite / vc!ci <id channel>` ")
  
    const setChannelID = message.content.split(' ');
  
    try{
      var embed1 = new Discord.RichEmbed()
        .setColor("#3fe84d")
        .setTitle("Success!")
        .setFooter("wait for 5 seconds.")
        message.guild.channels.get(setChannelID[1]).createInvite().then(invite =>
        message.channel.send(embed1).then(msg => {
          setTimeout(function(){
                msg.delete().then(msg => {
          })
  setTimeout(function(){
    message.delete(embed1)
    msg.channel.send(invite.url + " This the link bruh from channel : " + invite.channel).then(msg => {
    msg.react(':white_check_mark:');
    })
    })
  }, 5000);
})
        );
    }

    catch(error){
        console.error(`I could not create the invite for the channel: ${error}`);
        message.channel.send(embed);
    }
}
module.exports.help = {
    aliases: ['serverlink', 'ci'],
    name: 'createinvite',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}
