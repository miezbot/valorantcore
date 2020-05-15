exports.run = async (client, message, args) => {
    const newName = message.content.split(' ');

     if(message.author.id !== "312916765078192139") return message.channel.send("Only bot owner Miiez#8781")
    try{
        client.user.setUsername(newName[1])
            .then(user => message.channel.send(`My new username is **${user.username}**`))
            .catch(console.error);
    }
    catch(error){
        message.channel.send("I could not set my new username :sob:");
    }
}
module.exports.help = {
    aliases: [],
    name: 'rename',
    description: 'Change Username BOT',
    usage: 'PREFIXping'
}

// Configuration

module.exports.config = {
    args: false, /* The command requires arguments? Could be false or true. */
    restricted: false, /* Can only owner use the command? Could be false or true. */
    category: 'Utils' /* You can make a category help command with this. */
}