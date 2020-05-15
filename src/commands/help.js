  const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {
  let helpIcon = bot.user.displayAvatarURL;
  let helpEmbed = new Discord.RichEmbed()
    .setTitle(":robot: Bot Commands")
    .setColor("#ff4654")
    .setThumbnail(helpIcon)
    .addField(":tools: Dev","\n`vc!say`\t`vc!eval`\t`vc!rename`\n`vc!answer`\t`vc!serverlist`")
    .addField(":wrench: Moderation","\n`vc!report`\t`vc!ban`\t`vc!kick`\n`vc!purge`\t`vc!lockdown`\t`vc!unlockdown`\n`vc!warn`\t`vc!warnlevel`\t`vc!clearwarn`\t`vc!serverstats`")
    .addField("\t:bookmark: Information","\n`vc!serverinfo`\t`vc!botinfo`\t`vc!info`\n`vc!ping`\t`vc!invite`\t`vc!createinvite`\n`vc!avatar`\t`vc!color`\t`vc!channelinfo`")
    .addField("\t<:hmm:704592500567965707> Fun","\n`vc!copypastas`\t`vc!cn`\t`vc!reverse`\n`vc!joke`\t`vc!8ball`\t`vc!rate`\t`vc!hastebin`\n`vc!math`\t`vc!osu`\t`vc!meme`\t`vc!dog`\t`vc!cat`")
    .addField("\t:radio: Radio's","\n`vc!lofi`\t`vc!jpop`\t`vc!kpop`\t`vc!stop`")
    .addField("\t:tada: Giveaway","\n`vc!giveaway`")
    .setFooter("Contact me with vc!contact")
    .setTimestamp();    

  message.channel.send(helpEmbed).then(msg =>{
    msg.react("691976250943864872")
const filter = (reaction, user) => {
	return ('691976250943864872').includes(reaction.emoji.name) && user.id === message.author.id};    
message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '691976250943864872') {
			message.author.send('Wutdefok.');
      message.channel.send('Check ur dm u mf ' + `<@!${message.author.id}>`)
		} 
	}) 
  })
}



module.exports.help = {
    aliases: ['tolong', 'tulung'],
    name: 'help',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}