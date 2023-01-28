/**
 * @file leave
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

module.exports = {

  data: new SlashCommandBuilder()
  .setName("leave")
  .setDescription(
    "Tell the bot to leave your channel."
  )
  .addStringOption((option) =>
    option
      .setName("command")
      .setDescription("The specific command to see the info of.")
  ),

  name: 'leave',
  run: async (client, message) => {
    client.distube.voices.leave(message)
  }
}
