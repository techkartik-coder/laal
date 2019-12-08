module.exports = {
    name: 'ping',
    cooldown: 5,
	description: 'Ping!',
	execute(message, args) {
		message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
			});
		}
}