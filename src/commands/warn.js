const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
//const mysql = require('mysql');
//const file = require('../mysql.json');

exports.run = async (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  //let logchannel = message.guild.channels.find('name', 'logs');
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("❌**Error:** You don't have the **Kick Members** permission!");
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  if (message.mentions.users.first().id === message.author.id) return message.reply('I can\' let you do that, self-harm is bad:facepalm:');
  if (message.mentions.users.first().id === "312916765078192139") return message.reply("You can't warn my Developer:wink:");
  //if (!logchannel) return message.channel.send('I cannot find a logs channel');
  if (reason.length < 1) reason = 'No reason supplied.';
  
  if(!warns[`${user.id}, ${message.guild.id}`]) warns[`${user.id}, ${message.guild.id}`] = {
    warns: 0
  };

  warns[`${user.id}, ${message.guild.id}`].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
    if(err) throw err;
  });

  const embed = new Discord.RichEmbed()
  .setColor(0xFFFF00)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Warned by:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Number of warnings:', warns[`${user.id}, ${message.guild.id}`].warns)
  .addField('Reason', reason)
  let kontol = "KONTOL"
  let logchannel = message.guild.channels.find('name', 'logs');
  if  (!logchannel){
    message.channel.send({embed})
  }else{
    client.channels.get(logchannel.id).send({embed});
    message.channel.send({embed})
  }
  if(user.bot) return;
  message.mentions.users.first().send(embed).catch(e =>{
    if(e) return 
  });


  if(warns[`${user.id}, ${message.guild.id}`].warns == 2){
    let muteRole = message.guild.roles.find('name', 'Valorant Muted')

    let mutetime = "60s";
    message.guild.members.get(user.id).addRole(muteRole.id);
    message.reply(`${user.tag} has been temporarily muted 60 seconds`);

    setTimeout(function(){
      message.guild.members.get(user.id).removeRole(muteRole.id).then(msg =>{
      message.channel.send(`${user.tag} has been remove muted`)})
    }, ms(mutetime)
    )
  }

  if(warns[`${user.id}, ${message.guild.id}`].warns == 3){
    message.guild.member(user).kick(reason);
    message.reply('That Dumb Boi have been kicked :facepalm:')
  }

  if(warns[`${user.id}, ${message.guild.id}`].warns == 5){
    message.guild.member(user).ban(reason);
    message.reply('You won\' have to worry about that shit-head any longer, I have Banned them!');
  }

};

module.exports.help = {
    aliases: ['warned'],
    name: 'warn',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}
