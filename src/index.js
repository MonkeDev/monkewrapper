const f = require('node-fetch').default;
const e = require('./endpoints.json');
const err = require('./errors.json');

const baseUrl = 'https://api.monke.vip';

const monkewrapper = class {
    constructor(key) {
        this.key = key;
    };

    makeQuery(obj) {
        if(this.key) obj.key = this.key;
        let q = ''
        for (const key in obj) {
            const val = Object.getOwnPropertyDescriptor(obj, key)?.value;
            if(q.length == 0) {
                q += `?${encodeURI(key)}=${encodeURI(val)}`
            } else {
                q += `&${encodeURI(key)}=${encodeURI(val)}`
            };
        }
        return q;
    }
    async get(endPoint, query) {
        if(!e.endpoints.includes(endPoint)) throw err.cannotFind;
        let toFetch = baseUrl + endPoint + this.makeQuery(query);
        const res = await f(toFetch)
        return res;
    };
};


module.exports = monkewrapper;