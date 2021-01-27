const monkeWrapper = require('monkewrapper');
const key = null; // If you have a key replace it with null.
const monke = new monkeWrapper(key);

const discord = require('discord.js');
const bot = new discord.Client();
bot.login('BOT_TOKEN');

bot.on('message', async message => {
    if(message.content.startsWith('!gay')) {
        const user = message.mentions.members.first() || message.author;
        const res = await (await monke.get('/canvas/gay', {imgUrl: user.avatarURL({format: 'png', size: 512})})).buffer();
        message.channel.send(new discord.MessageAttachment(res, 'gay.png'));
    };

    if(message.content == '!dog-fact') {
        const res = await (await monke.get('/facts/dog')).json();
        message.channel.send(res.fact);
    };

});