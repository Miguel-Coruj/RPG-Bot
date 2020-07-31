const Discord = require('discord.js');
const client = new Discord.Client();

const dado = require('./commands/dado')
const Music = require('./commands/Music')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Vida de RPG')
});

client.on('message', async msg => {
    if(msg.author.bot) return
    if(msg.channel.id === '738149319663943880'){
    dado.dado(msg)
  }
  if(msg.content === '🎲?'){
    msg.delete()
    msg.channel.send("```:game_die: [numero-1] [numero-2] até 10 numeros ```")
  }
  if(msg.content === '<:RPG:738811431461584989> clear'){
    const featched = await msg.channel.messages.fetch({ limit: 100 })
    msg.channel.bulkDelete(featched)
  }
    Music(msg, client)
});

client.login('NzM4NTA1ODk4NDg5NTQ0NzE2.XyM5Ng.YtuCi_7aUvo_qKgJcV5di3GBsGk');