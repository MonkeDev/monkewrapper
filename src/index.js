const p = require('phin');
const e = require('./endpoints.json');
const err = require('./errors.json');

/**
 * Make a request with the MonkeDev API
 */
const monke = async (endpoint, args) => {
    this.endpoint = endpoint;

    if(!e.endpoints.includes(this.endpoint)) throw err.cannotFind;

        if(this.endpoint === "/npm") {
            let query;
            if(args.query) 
                query = args.query;
            else 
                throw err.addQuery;

            const res = await p({
                url: `https://monke.vip/api/npm?name=${query}`,
                parse: "json"
            });

            return res.body;
        }
        const res = await p({
            url: `https://monke.vip/api${this.endpoint}`,
            parse: "json"
        });
            return res.body;
} 

module.exports = monke;