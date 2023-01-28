/**
 * @file nowplaying
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

module.exports = {

	data: new SlashCommandBuilder()
		.setName("nowplaying")
		.setDescription(
			"View the currently playing song."
		)
		.addStringOption((option) =>
			option
				.setName("command")
				.setDescription("The specific command to see the info of.")
		),

  name: 'nowplaying',
  aliases: ['np'],
  inVoiceChannel: true,
  run: async (client, message, args) => {
    const queue = client.distube.getQueue(message)
    if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
    const song = queue.songs[0]
    message.channel.send(`${client.emotes.play} | I'm playing **\`${song.name}\`**, by ${song.user}`)
  }
}
