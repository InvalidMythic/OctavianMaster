/**
 * @file filters
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

module.exports = {

  data: new SlashCommandBuilder()
  .setName("filters")
  .setDescription(
    "See the list of filters for the bot's music."
  )
  .addStringOption((option) =>
    option
      .setName("command")
      .setDescription("The specific command to see the info of.")
  ),

  name: 'filter',
  aliases: ['filters'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    const filter = args[0]
    if (filter === 'off' && queue.filters.size) queue.filters.clear()
    else if (Object.keys(client.distube.filters).includes(filter)) {
      if (queue.filters.has(filter)) queue.filters.remove(filter)
      else queue.filters.add(filter)
    } else if (args[0]) return message.channel.send(`${client.emotes.error} | Not a valid filter`)
    message.channel.send(`Current Queue Filter: \`${queue.filters.names.join(', ') || 'Off'}\``)
  }
}
