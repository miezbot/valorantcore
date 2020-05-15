const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true

    let role = args.join(` `)
    if(!role) return message.reply("Specific Role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");

    const status = {
        false: "No",
        true: "Yes"
      }

    let roleemebed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("ID", gRole.id, inline )
    .addField("Name", gRole.name, inline)
    .addField("Mention", `<@${gRole.id}>`, inline)
    .addField("Hex", gRole.hexColor, inline)
    .addField("Members", gRole.members.size, inline)
    .addField("Position", gRole.position, inline)
    .addField("Hoisted", status[gRole.hoist], inline)
    .addField("Mentionable", status[gRole.mentionable], inline)
    .addField("Managed", status[gRole.managed], inline)
    
    message.channel.send(roleemebed);

}

module.exports.help = {
    aliases: ['role'],
    name: 'roleinfo',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}