const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     var d = new Date,
dformat = [d.getMonth()+1,
       d.getDate(),
       d.getFullYear()].join('/')+' '+
      [d.getHours(),
       d.getMinutes(),
       d.getSeconds()].join(':')
  let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`${bot.user.username}`+ " Bot Information")
    .setColor("#ff4654")
    .setThumbnail(bicon)
    .addField("Created at : ",`\t${dformat}`)
    .addField("Developer : ",`Miiez#8781`)
    .setTimestamp()

    message.channel.send(botembed);
}

module.exports.help = {
    aliases: ['bot', 'infobot'],
    name: 'botinfo',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}