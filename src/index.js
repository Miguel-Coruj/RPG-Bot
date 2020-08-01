require('dotenv/config')
const Discord = require('discord.js');
const client = new Discord.Client();

const dado = require('./commands/dado')
const Music = require('./commands/Music')

client.on('ready', () => {
    let status = [
        'Vida de RPG',
        'Vida de bot',
        'Vida em servidor',
        {name: `${client.users.cache.size} Pessoas sendo ouvidas`, type: 'LISTENING'}
    ]

  console.log(`Logged in as ${client.user.tag}!`);

  function setStatus(){
        let ran = status[Math.floor(Math.random()*status.length)]
        client.user.setActivity(ran)
    }
    setStatus()
    setInterval(() => setStatus(),5000)
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
  if(msg.content === '<:rpg:738811431461584989> clear'){
    const featched = await msg.channel.messages.fetch({ limit: 100 })
    msg.channel.bulkDelete(featched)
  }
    Music(msg, client)
});

client.login(process.env.token);