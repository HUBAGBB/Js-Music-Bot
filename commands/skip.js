module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('명령어 사용전 음성 채널에 들어가 있어야합니다');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.skip(message)

        message.channel.send('DONE!')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "스킵",
    aliases: ["s"]
}
