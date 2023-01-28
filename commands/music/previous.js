/**
 * @file previous
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

module.exports = {

  data: new SlashCommandBuilder()
  .setName("previous")
  .setDescription(
    "Play the previous song."
  )
  .addStringOption((option) =>
    option
      .setName("command")
      .setDescription("The specific command to see the info of.")
  ),

  name: 'previous',
  inVoiceChannel: true,
  run: async (client, message) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    const song = queue.previous()
    message.channel.send(`${client.emotes.success} | Now playing:\n${song.name}`)
  }
}
