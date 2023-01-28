/**
 * @file forward
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

module.exports = {

  data: new SlashCommandBuilder()
  .setName("foward")
  .setDescription(
    "Seek forward in the song."
  )
  .addStringOption((option) =>
    option
      .setName("command")
      .setDescription("The specific command to see the info of.")
  ),

  name: 'forward',
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    if (!args[0]) {
      return message.channel.send(`${client.emotes.error} | Please provide time (in seconds) to go forward!`)
    }
    const time = Number(args[0])
    if (isNaN(time)) return message.channel.send(`${client.emotes.error} | Please enter a valid number!`)
    queue.seek((queue.currentTime + time))
    message.channel.send(`Forwarded the song for ${time}!`)
  }
}
