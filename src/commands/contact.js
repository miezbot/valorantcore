const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0] == "help"){
    var error1 = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle("Usage Command")
    .setFooter('Command for Contact the developer | delete in 10sec')
    .setDescription("`usage : vc!contact <message>`")

    message.channel.send(error1).then(msg => {msg.delete(10000)});
    message.delete(10000)
    return
    
  } 
  var error = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle("Error!")
    .setDescription("what do you want to convey to the developer?")
    .setFooter("vc!contact help | deleve in 5sec")

    let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()
    let Sender = message.author;
    const sayMessage = args.join(" ");
    message.delete(5000)
    if(!sayMessage) return message.channel.send(error).then(msg => {msg.delete(5000)});

   let contact = new Discord.RichEmbed()
   .setColor("#ff4654")
   .setThumbnail(Sender.displayAvatarURL)
   .setDescription(`Contact message from [${message.guild.name}](${Invite.url})`)
   .setTitle("Message from contact command!")
   .addField("User", Sender, true)
   .addField("User ID: ", Sender.id, true)
   .addField("Message: ", sayMessage)
   .setTimestamp()

    bot.users.get("312916765078192139").send(contact);

    let embed = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTitle("Message Sent!")
    .setDescription("Your contact message has been sent!")
    .addField("Reqested by ", Sender)
    .addField("Message: ", sayMessage)
    .setFooter("Thanks you for contacting with the Developer.!")

    message.channel.send(embed).then(msg => {msg.delete(10000)});

        message.delete();
}
module.exports.help = {
    aliases: ['kontak'],
    name: 'contact',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}

