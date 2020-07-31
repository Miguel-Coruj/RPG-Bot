const ytdl = require('ytdl-core')

let volume = 1
const StreamOptions = {seek: 0, volume,}

let music = []
let VoiceChannel = msg.guild.channels.find( 
    channel => 
    channell.id === '737824739480961098'
    )
const stream = ytdl(urlStream, {filter: 'audioonly'})
const DJ = connection.playStream(stream, StreamOptions)

module.exports = {
    add(msg) {
        if(VoiceChannel === null) {
            msg.delete()
            msg.channel.send('Canal de audiu não foi encontrado')
        }
        VoiceChannel.join()
        .then(connection => {
            DJ()
        })
    },
    leave(msg) {
        VoiceChannel.join()
        .then(connection => {
            DJ.on('end', end => {
                VoiceChannel.leave()
            })
        })
    }
}