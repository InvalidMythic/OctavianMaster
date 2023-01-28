/**
 * @file stop
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

module.exports = {
  name: 'stop',
  aliases: ['disconnect', 'leave'],
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    queue.stop()
    message.channel.send(`${client.emotes.success} | Stopped!`)
  }
}
