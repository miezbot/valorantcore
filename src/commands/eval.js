const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = async (client, message, args) => {
        if(message.author.id !== "312916765078192139") return message.channel.send("Only bot owner Miiez#8781")
    try {
      var code = args.join(" ");
      if (code === "client.token") return message.channel.send("Dont wanna do that 0_0")
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      
      const embed = new Discord.RichEmbed()
        .setColor("#ff4654")
        .addField(":inbox_tray: Input: ", `\`\`\`${code}\`\`\``)
        .addField(":outbox_tray: output: ", `\`\`\`js\n${clean(evaled)}\n\`\`\``)
      message.channel.send({embed})
    } catch (err) {
      const embed = new Discord.RichEmbed()
      .setColor("#ff4654")
      .addField(":inbox_tray: Input: ", `\`\`\`${code}\`\`\``)
      .addField(":outbox_tray: output: ", `\`\`\`${clean(err)}\`\`\``)
    message.channel.send({embed})
    }

function clean(text) {
  if (typeof(text) === 'string')
    return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
  else
      return text;
  }
}

  module.exports.help = {
    aliases: ['dev', 'dev1'],
    name: 'eval',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}
