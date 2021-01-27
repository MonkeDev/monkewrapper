const monkeWrapper = require('./src/index');
const monke = new monkeWrapper();

(async () => {
    const res = (await monke.get('/canvas/gay', {imgUrl: 'IMG_URL'})).buffer();
    /* Eris */
    message.channel.send('https://api.monke.vip/', {file: res, name: 'gay.png'})
})()
monke.get('/canvas/gay', {imgUrl: 'https://monke.vip/static/monke.png'}).then(async res => {
    const buffer = await res.buffer();  
    
})
