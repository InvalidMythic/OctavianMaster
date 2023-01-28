/**
 * @file stop
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

module.exports = {

  data: new SlashCommandBuilder()
  .setName("stop")
  .setDescription(
    "Stop the bot's music."
  )
  .addStringOption((option) =>
    option
      .setName("command")
      .setDescription("The specific command to see the info of.")
  ),

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
