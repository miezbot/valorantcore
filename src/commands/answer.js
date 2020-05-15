const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let Invite = message.guild.channels.first().createInvite()
    let Owner = message.author;
    if(Owner.id !== "312916765078192139" && Owner.id !== "436480791279697920") return message.reply("Only the bot owner can use this command!")
   var error = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle("Usage Command")
    .setFooter('Command for Answer Bug Report')
    .setDescription("`usage : vc!answer <id> <answer>`")
  
    const id = args.shift();
    const sayMessage = args.join(" ")
    if(!sayMessage) return message.channel.send(error)
    

   let contact = new Discord.RichEmbed()
   .setAuthor(Owner.username)
   .setColor("#ff4654")
   .setThumbnail(Owner.displayAvatarURL)
   .setTitle("Response  from your contact!")
   .addField("Response:", sayMessage)
   .addField("Support Server", "[We Made Legend](https://discord.gg/zJYzD4P)")
   .setTimestamp()

    bot.users.get(id).send(contact);

    let chanemb = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setDescription(`Message sent to <@${id}>`);

    message.channel.send(chanemb).then(msg => {msg.delete(5000)});


        message.delete();

      }
module.exports.help = {
    aliases: [],
    name: 'answer',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}