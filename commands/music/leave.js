/**
 * @file leave
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */

module.exports = {
  name: 'leave',
  run: async (client, message) => {
    client.distube.voices.leave(message)
  }
}
