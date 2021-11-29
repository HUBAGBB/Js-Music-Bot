module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('명령어 사용전 음성 채널에 들어가 있어야합니다');
    
    const music = args.join(" ");

    bot.distube.play(message, music)
}

module.exports.config = {
    name: "재생",
    aliases: ['p']
}
