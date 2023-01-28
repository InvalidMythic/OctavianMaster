/**
 * @file help
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

/**
 * @type {import('../../../typings').SlashInteractionCommand}
 */

const Discord = require('discord.js')

data: new SlashCommandBuilder()
.setName("Music Help")
.setDescription(
  "List all commands of bot or info about a specific command for the music bot."
)
.addStringOption((option) =>
  option
    .setName("command")
    .setDescription("The specific command to see the info of.")
),

module.exports = {
  name: 'musichelp',
  aliases: ['h', 'cmd', 'command'],
  run: async (client, message) => {
    message.channel.send({
      embeds: [
        new Discord.EmbedBuilder()
          .setTitle('Commands')
          .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(', '))
          .setColor('BLURPLE')
      ]
    })
  }
}
