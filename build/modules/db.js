"use strict";
const mongoose = require("mongoose");
const logger_1 = require("../utils/logger");
const db_init_1 = require("../includes/db_init");
var DatabaseLib;
(function (DatabaseLib) {
    let config;
    DatabaseLib.configure = (param) => {
        config = param;
    };
    DatabaseLib.initDb = () => {
        const connectOption = {
            poolSize: 10,
            reconnectTries: 60,
            reconnectInterval: 1000,
            autoIndex: process.env.NODE_ENV === 'production' ? false : true,
            useNewUrlParser: true
        };
        mongoose.connect(config.uri, connectOption).catch((err) => {
            logger_1.default.error(` Failed to connect mongo at ${config.uri}`);
        });
        mongoose.connection.once('open', () => {
            logger_1.default.info('open connection');
        });
        (0, db_init_1.dbInit)();
        mongoose.connection.once('error', (error) => {
            logger_1.default.error(`error connection ${error}`);
        });
    };
})(DatabaseLib || (DatabaseLib = {}));
module.exports = DatabaseLib;
//# sourceMappingURL=db.js.map