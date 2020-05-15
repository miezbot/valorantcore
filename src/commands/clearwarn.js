const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first();
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("❌**Error:** You don't have the **Kick Members** permission!");
    if(message.mentions.users.size < 1) return message.reply('You must mention someone to clear their warns.').catch(console.error);
    if(!user) return message.reply("Couldn't find that user...");
    if(!warns[`${user.id}, ${message.guild.id}`]){
    warns[`${user.id}, ${message.guild.id}`] = {
        warns: 0
    };
}
    let reason = `${warns[`${user.id}, ${message.guild.id}`].warns} warnings have been cleared for this person`;
    if(warns[`${user.id}, ${message.guild.id}`].warns > 0) {
        warns[`${user.id}, ${message.guild.id}`] = {
        warns: 0
    };
    }else{
        reason = 'This user doesn\'t have any warnings:wink:'
    };

    fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
        if(err) throw err;
      });

    const embed = new Discord.RichEmbed()
    .setColor("#ff4654")
    .setTimestamp()
    .addField('Action:', 'Clear Warns', true)
    .addField('User:', `${user.username}#${user.discriminator}`, true)
    .addField('Result:',reason, true)
    message.channel.send({embed});
}

module.exports.help = {
    aliases: [],
    name: 'clearwarn',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}