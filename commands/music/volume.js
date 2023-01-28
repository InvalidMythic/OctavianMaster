/**
 * @file volume
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

module.exports = {

  data: new SlashCommandBuilder()
  .setName("volume")
  .setDescription(
    "Adjust the bot's volume."
  )
  .addStringOption((option) =>
    option
      .setName("command")
      .setDescription("The specific command to see the info of.")
  ),

  name: 'volume',
  aliases: ['v', 'set', 'set-volume'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    const volume = parseInt(args[0])
    if (isNaN(volume)) return message.channel.send(`${client.emotes.error} | Please enter a valid number!`)
    queue.setVolume(volume)
    message.channel.send(`${client.emotes.success} | Volume set to \`${volume}\``)
  }
}
