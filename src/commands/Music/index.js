const controller = require('./ControllerMusic')

module.exports = (msg, client) => {
    if(msg.content.toLowerCase().startsWith("🎵play")) {
        controller.add(msg, client)
    }
    if(msg.content.toLowerCase().startsWith("🎵leave")) {
        controller.leave(msg, client)
    }
}