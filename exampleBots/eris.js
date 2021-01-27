const monkeWrapper = require('monkewrapper');
const key = null; // If you have a key replace it with null.
const monke = new monkeWrapper(key);

const Client = require('eris').Client;

const bot = new Client('BOT_TOKEN', {defaultImageSize: 512});
bot.connect();

bot.on('messageCreate', async message => {
    if(message.content.startsWith('!gay')) {
        const user = message.mentions[0] || message.author;
        const res = await (await monke.get('/canvas/gay', {imgUrl: user.staticAvatarURL})).buffer();
        message.channel.createMessage('', {file: res, name: 'gay.png'});
    };

    if(message.content == '!dog-fact') {
        const res = await (await monke.get('/facts/dog')).json();
        message.channel.createMessage(res.fact);
    };

});