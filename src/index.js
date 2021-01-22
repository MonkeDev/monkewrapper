const p = require('phin');
const e = require('./endpoints.json');
const err = require('./errors.json');

/**
 * Make a request with the MonkeDev API
 */
const monke = async (endpoint, /*options*/) => {
    this.endpoint = endpoint;

    if(!e.endpoints.includes(this.endpoint)) throw err.cannotFind;

        const res = await p({
            url: `https://monke.vip/api/${this.endpoint}`,
            parse: "json"
        });
            return res.body;
} 

module.exports = monke;