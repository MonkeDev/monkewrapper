# MonkeDev API Wrapper

### This wrapper was created to make the [MonkeDev API](https://api.monke.vip/docs) easier to use for you HTTP beginners. If you need more help you can join our [discord server](https://discord.gg/tqeyYrS43A)!
---
## MonkeDev API Docs
### Please check out the [documentation](https://api.monke.vip/docs) for information of each endpoint!
# Installation
```
npm i monkewrapper
```



# Example
```js
const monkeWrapper = require('monkewrapper');
const monke = new monkeWrapper('API_KEY'); // If you do not have a key leave blank
(async () => {
    const res = await (await monke.get('/facts/dog')).json();
    console.log(res);
})();
```
  
# Implementation
### Discord.js bots
```js
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
```
### Eris Bot
```js
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
```

## Endpoints
`/attachments/monkey`,

`/facts/monkey`,\
`/facts/cat`,\
`/facts/dog`,

`/canvas/gay`

## query Object
### Please indentify the `parameters` of the url in the `query object` for endpoints with required/optional parameters **Example:** `{ imgUrl: "https://exmaple.com/image.png" }` | https://api.monke.vip/canvas/gay?imgUrl=https://exmaple.com/image.png
