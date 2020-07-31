module.exports = {
    dado(msg) {
        const msgDado = msg.content.split(' ')
        const [ dado, num, num2, num3, num4, num5, num6, num7, num8, num9, num10 ] = msgDado
        console.log(dado+ " " + num)
        if (/🎲$/i.test(dado)) {
        msg.delete()
          msg.channel.send('-------------------------------')
        if(num2)
        msg.channel.send('1°🎲 '+Math.floor(Math.random() * num + 1));
        else
        msg.channel.send('🎲 '+Math.floor(Math.random() * num + 1));
        }
        if (num2) {
        msg.delete()
        msg.channel.send('2°🎲 '+Math.floor(Math.random() * num2 + 1));
        }
        if (num3) {
        msg.delete()
        msg.channel.send('3°🎲 '+Math.floor(Math.random() * num3 + 1));
        }
        if (num4) {
        msg.delete()
        msg.channel.send('4°🎲 '+Math.floor(Math.random() * num4 + 1));
        }
        if (num5) {
        msg.delete()
        msg.channel.send('5°🎲 '+Math.floor(Math.random() * num5 + 1));
        }
        if (num6) {
            msg.delete()
            msg.channel.send('6°🎲 '+Math.floor(Math.random() * num5 + 1));
        }
        if (num7) {
            msg.delete()
            msg.channel.send('7°🎲 '+Math.floor(Math.random() * num5 + 1));
        }
        if (num8) {
            msg.delete()
            msg.channel.send('8°🎲 '+Math.floor(Math.random() * num5 + 1));
        }
        if (num9) {
            msg.delete()
            msg.channel.send('9°🎲 '+Math.floor(Math.random() * num5 + 1));
        }
        if (num10) {
            msg.delete()
            msg.channel.send('10°🎲 '+Math.floor(Math.random() * num5 + 1));
        }
    }
}