

module.exports = async (bot, message) => {
	if (message.author.bot) return;

	const messageArray = message.content.split(' ');
	const cmd = messageArray[0];
	const args = messageArray.slice(1);

	if (message.author.bot || message.channel.type === 'dm') return;
	const prefix = "!";//접두사

	if (message.content.match(new RegExp(`^<@!?${bot.user.id}>( |)$`))) return message.channel.send(`${message.guild.name}의 접두사는 \`${prefix}입니다.\`\n\n도움말을 여시려면 \`${prefix}도움말을 입력해주세요!\``);

	if (!message.content.startsWith(prefix)) return;
	const commandfile = bot.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length).toString().toLowerCase()));;
	if (commandfile) {
		commandfile.run(bot, message, args);
	}

}
