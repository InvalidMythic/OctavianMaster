/**
 * @file Fuck You Trigger
 * @author LoneMythic
 * @since 0.0.1
 * @version 0.0.1
 */
/**
 * @type {import('../../typings').TriggerCommand}
 */
module.exports = {
	name: ["fuck you"],

	execute(message, args) {
		// Put all your trigger code over here. This code will be executed when any of the element in the "name" array is found in the message content.

		message.channel.send({
			content: "No, fuck you asshole",
		});
	},
};
