/**
 * @file previous
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */

module.exports = {
  name: 'previous',
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    const song = queue.previous()
    message.channel.send(`${client.emotes.success} | Now playing:\n${song.name}`)
  }
}
