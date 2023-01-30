/**
 * @file resume
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */

module.exports = {
  name: 'resume',
  aliases: ['resume', 'unpause'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    if (queue.paused) {
      queue.resume()
      message.channel.send('Resumed the song for you :)')
    } else {
      message.channel.send('The queue is not paused!')
    }
  }
}
