/**
 * @file pause
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */

module.exports = {
  name: 'pause',
  aliases: ['pause', 'hold'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    if (queue.paused) {
      queue.resume()
      return message.channel.send('Resumed the song for you :)')
    }
    queue.pause()
    message.channel.send('Paused the song for you :)')
  }
}
