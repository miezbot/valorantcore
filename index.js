// Definitions
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();
const emojiChannelID = '691968291391930369';
const request = require('request');
const db = require('quick.db')
/////////
const express = require("express");
const app = express();
const http = require("http")
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
// KONTOL
const activities_list = [
    "https://playvalorant.com/", 
    "Bot Official",
    "Prefix | vc! 🇮🇩"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
    client.user.setStatus('dnd') // Can be 'available', 'idle', 'dnd', or 'invisible'
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000);// Runs this every 10 seconds.
});

// Utils & config requiring

const utils = require("./utils/utils")
const config = require("./utils/config.json");

// Handlers

fs.readdir("./src/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./src/events/${file}`);
        let eventStart = eventFunction.run.bind(null, client);
        let eventName = file.split(".")[0];
        client.events.set(eventName, eventStart)
        client.on(eventName, (...args) => eventFunction.run(client, utils, ...args));
    });
});

fs.readdir('./src/commands/', (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
        let props = require(`./src/commands/${ f }`);
        props.fileName = f;
        client.commands.set(props.help.name, props);
        props.help.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

// Message Event (here because something could happen with event handler.)

client.on("message", message => {
    try {
        if (message.author.bot) return;
        if (message.content.indexOf(config.prefix) !== 0) return;

        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        let command = args.shift().toLowerCase();

        if (client.aliases.has(command)) command = client.commands.get(client.aliases.get(command)).help.name

        if (client.commands.get(command).config.restricted == true) {
            if (message.author.id !== config.ownerID) return utils.errorEmbed(message, ':warning: This command is restricted only to bot owners. :warning:')
        }

        if (client.commands.get(command).config.args == true) {
            if (!args[0]) return utils.errorEmbed(message, `Invalid arguments. Use: ${config.prefix + 'help ' + client.commands.get(command).help.name}`)
        }

        let commandFile = require(`./src/commands/${command}.js`);
        commandFile.run(client, message, args, utils);

    } catch (err) {
        if (err.message === `Cannot read property 'config' of undefined`) return;
        if (err.code == "MODULE_NOT_FOUND") return;
        console.error(err);
    }
}); 
client.on("message", async message => {
	if (message.content === '!fruits') {
	message.react('👍').then(() => message.react('👎'));

const filter = (reaction, user) => {
	return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};
    
message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
			message.author.send('Wutdefok.');
      message.channel.send('Check ur dm u mf ' + `<@!${message.author.id}>`)
		} else {
			message.reply('you reacted with a thumbs down.');
		}
	})
	.catch(collected => {
		message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
});
  }
})
client.on('message', async message => {
  if (message.author.bot) return; 
  var embed = new Discord.RichEmbed()
  .setTitle("Select Number")
  .setDescription("pick until emoji finish.")
  if (message.content.toLowerCase().startsWith('lofi!number')) {
    try {
      const sentMessage = await message.channel.send(embed);

      for (let n = 1; n <= 5; n++) await sentMessage.react(`${n}⃣`);

      const filter = (reaction, user) => ['1', '2', '3', '4', '5'].includes(reaction.emoji.name.slice(0, 1)) && user.id === message.author.id;
      const collected = await sentMessage.awaitReactions(filter, { maxMatches: 1, time: 5000 });

      if (collected.size === 0) {
        await sentMessage.clearReactions();
        await message.channel.send('Your time ran out.');
      } else {
        const reaction = collected.first();

        switch(reaction.emoji.name.slice(0, 1)) {
         case '1':
            await message.author.send('You chose `one`.');
            await message.channel.send('Check your dm son of a bitch.')
            break;
         case '2':
            await message.author.send('You chose `two`.');
            await message.channel.send('Check your dm son of a bitch.')
            break;
         case '3':
            await message.author.send('You chose `three`.');
            await message.channel.send('Check your dm son of a bitch.')
            break;
         case '4':
            await message.author.send('You chose `four`.');
            await message.channel.send('Check your dm son of a bitch.')
            break;
         case '5':
            await message.author.send('You chose `five`.');
            await message.channel.send('Check your dm son of a bitch.')
            break;
            
            
        }
      }
    } catch(err) {
      console.error(err);
    }
  }
});

async function emojiMessage(message, validReactions) {
            for (const reaction of validReactions) await message.react(reaction);
        const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && (!user.bot)

        return message
            .awaitReactions(filter, {
                max: 1,
                time: 42000
            })
            .then(collected => collected.first() && collected.first().emoji.name);
}

async function deleteMessage(message) {

    const emoji = await emojiMessage(message, ["✅", "❌"]);
    console.log(emoji)
        // if the emoji is a tick:
    if (emoji === "❌") {
        // delete their message
        console.log("tick")
        if (message.deletable == true) {
            console.log("can delete")
            console.log("attempting to delete")
            message.delete()
        }
        if (!message.deletable == false) {
            "cannot delete"
        }
    } else if (emoji === "❌") { // if the emoji is a cross
        /*
         *  do something else
         */
        return;
    }

}


client.on('message', message => {

    if (message.channel.id === emojiChannelID) {
        // runs the function
        deleteMessage(message)
    }
    /*
     * do something else
     */
})

client.on('message', async message => {
  if (message.content === '!sata') {
    message.channel.send(`please say yes or no`).then(() => {
            message.channel.awaitMessages(response => response.content ===   {
                max: 1, // number of responses to collect
                time: 5000, //time that bot waits for answer in ms
                errors: ['time'],
            })
                .then((collected) => {
                    var pollRes = collected.first().content; //this is the first response collected
                    message.channel.send('You said ' + pollRes);
                    // Do something else here (save response in database)
                })
                .catch(() => { // if no message is collected
                    message.channel.send('I didnt catch that, Try again.');
                });
        });
};
})

  client.on("ready", () => {
function onlineStatus(){
let onlineBot = client.channels.find(ch => ch.id === '706852803464790076');
let usercount = client.channels.find(ch => ch.id === '706852786771460146');
  const guild = client.guilds.get('691945187454222386');
  var onlineCount = guild.members.filter(m => m.presence.status !== 'offline').size;
var memberCount = guild.memberCount;
onlineBot.setName(`🍭〢Online: ${onlineCount}`);
usercount.setName(`🛡〢Member: ${memberCount}`);
} setInterval(onlineStatus, 5000);
});

client.on("guildMemberAdd", member => {
  const guild = client.guilds.get('691945187454222386');
  let usercount = client.channels.find(ch => ch.id === '706852786771460146');
  var memberCount = guild.memberCount;
  memberCount.setName(`🛡〢Member: ${memberCount}`);
})

client.on("guildMemberRemove", member => {
  const guild = client.guilds.get('691945187454222386');
  let usercount = client.channels.find(ch => ch.id === '706852786771460146');
  var memberCount = guild.memberCount;
  memberCount.setName(`🛡〢Member: ${memberCount}`);
})

// Init discord giveaways
const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 1000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a client.giveawaysManager property to manage our giveaways!

client.on('guildMemberAdd', async member => {

  const serverstats = new db.table('ServerStats');
  let sguildid = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.guildid' })
  let tusers = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.totusers' })
  let membs = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.membcount' })
  let bots = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.botcount' })
  
	const totalsize = member.guild.memberCount;
	const botsize = member.guild.members.filter(m => m.user.bot).size;
	const humansize = totalsize - botsize;
  
  if(member.guild.id === sguildid) { 
		member.guild.channels.get(tusers).setName("Total Member : " + member.guild.memberCount);
		member.guild.channels.get(membs).setName("Member : " + humansize);
		member.guild.channels.get(bots).setName("Bot : " + member.guild.members.filter(m => m.user.bot).size);
	}
  });
  
  client.on('guildMemberRemove', async member => {

  const serverstats = new db.table('ServerStats');
  let sguildid = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.guildid' })
  let tusers = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.totusers' })
  let membs = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.membcount' })
  let bots = await serverstats.fetch(`Stats_${member.guild.id}`, { target: '.botcount' })
  
	const totalsize = member.guild.memberCount;
	const botsize = member.guild.members.filter(m => m.user.bot).size;
	const humansize = totalsize - botsize;
  
  if(member.guild.id === sguildid) { 
		member.guild.channels.get(tusers).setName("Total Member : " + member.guild.memberCount);
		member.guild.channels.get(membs).setName("Member : " + humansize);
		member.guild.channels.get(bots).setName("Bot : " + member.guild.members.filter(m => m.user.bot).size);
	}
  });
client.login(config.token /* If your token is stored in envorniment values use "process.env.TOKEN" */ );
