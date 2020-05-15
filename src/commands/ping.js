// This is a template.
const { RichEmbed } = require("discord.js");

module.exports.run = async (client, msg) => {
  try {
    const m = await msg.channel.send("Ping...");
    const embed = new RichEmbed()
      .setColor("#ff4654")
      .addField("⏳ Latency", `__${m.createdTimestamp - msg.createdTimestamp}ms__`)
      .addField("💓 API", `__${Math.floor(client.ping)}ms__`);
    return m.edit(`🏓 P${"o".repeat(Math.floor(client.ping) % 5 === 0 ? 0 : Math.floor(Math.random() * 5))}ng..`, { embed: embed });
  } catch (e) {
    return msg.channel.send(`Oh no an error occured :( ${e.message} try again later`);
  }
};


// Aliases, name, description and usage

module.exports.help = {
    aliases: ['peng', 'pepo', 'saymepinguselessbot'],
    name: 'ping',
    description: 'pong wow!',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}
