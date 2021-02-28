const express = require("express");

let _express, _config;


class Server {
    constructor({ config, router }) {
        _express = express().use(router);
        _config = config;
    }


    start() {
        return new Promise(resolve => {
            _express.listen(_config.PORT, () => {
                console.log(`APP is running on port: ${ _config.PORT }`);
                resolve();
            })
        })
    }
}


module.exports = Server;