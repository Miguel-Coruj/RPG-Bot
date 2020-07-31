const ytdl = require('ytdl-core')

let pronto = false

let music = []

module.exports = {
    join(msg){
        if(msg.member.voice.channel){
            msg.member.voice.channel.join()
            pronto = true
        }else{
            msg.channel.send('Entre em um canal de voz')
        }

        msg.delete()
    },
    add(msg) {
        if(pronto){
            var url = msg.content.replace('!play ','')
            if(ytdl.validateURL(url)){
                msg.member.voice.channel.connection.play(ytdl(url, { quality: 'highestaudio' }));
            }else{
                msg.channel.send('Link invalido')
            }
        }else{
            this.join(msg)
        }
        
    },
    leave(msg) {
        if(msg.member.voice.channel){
            msg.member.voice.channel.leave()
            pronto = false
        }else{
            msg.channel.send('Entre em um canal de voz')
        }

        msg.delete()
        }
}