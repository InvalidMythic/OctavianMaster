/**
 * @file autoplay
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../typings').LegacyCommand}
 */

module.exports = {
  name: 'autoplay',
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    const autoplay = queue.toggleAutoplay()
    message.channel.send(`${client.emotes.success} | AutoPlay: \`${autoplay ? 'On' : 'Off'}\``)
  }
}
