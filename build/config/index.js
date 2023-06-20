"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("../models/constant");
const enum_1 = require("../models/enum");
const constants_1 = require("../constants");
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
class Config {
    constructor() {
        this.env = process.env.NODE_ENV || constants_1.Constants.NODE_ENV;
        this.port = Number(process.env.PORT) || Number(constants_1.Constants.PORT);
        this.databaseConfig = {
            uri: process.env.MONGODB_URI || constants_1.Constants.MONGODB_URI
        };
        this.hostname_server = process.env.HOSTNAME_SERVER || constants_1.Constants.HOSTNAME_SERVER;
        this.jwtConfig = {
            secret: process.env.SECRET_JWT || constants_1.Constants.SECRET_JWT,
            public: process.env.PUBLIC_JWT || constants_1.Constants.PUBLIC_JWT,
            algorithm: process.env.ALGORITHM_JWT || constants_1.Constants.ALGORITHM_JWT,
            admin: {
                accessTokenExpiresIn: Number(process.env.USER_ACCESS_TOKEN_EXPIRES_IN) || constant_1.TIMESTAMP_CONSTANT.SECONDS_PER_DAY * 7,
                refreshTokenExpiresIn: Number(process.env.USER_REFRESH_TOKEN_EXPIRES_IN) || constant_1.TIMESTAMP_CONSTANT.SECONDS_PER_DAY * 7
            },
            mod: {
                accessTokenExpiresIn: Number(process.env.USER_ACCESS_TOKEN_EXPIRES_IN) || constant_1.TIMESTAMP_CONSTANT.SECONDS_PER_DAY * 7,
                refreshTokenExpiresIn: Number(process.env.USER_REFRESH_TOKEN_EXPIRES_IN) || constant_1.TIMESTAMP_CONSTANT.SECONDS_PER_DAY * 7
            }
        };
        this.redisConfig = {
            url: process.env.REDIS_URI || constants_1.Constants.REDIS_URI
        };
        this.defaultLanguage = enum_1.LANGUAGES.VIE,
            this.emailConfig = {
                host: process.env.EMAIL_HOST || constants_1.Constants.EMAIL_HOST,
                port: Number(process.env.EMAIL_PORT) || constants_1.Constants.EMAIL_PORT,
                username: process.env.EMAIL_USERNAME || constants_1.Constants.EMAIL_USERNAME,
                password: process.env.EMAIL_PASSWORD || constants_1.Constants.EMAIL_PASSWORD,
                senderEmail: process.env.EMAIL_SENDER || constants_1.Constants.EMAIL_SENDER,
            };
    }
}
exports.default = new Config();
//# sourceMappingURL=index.js.map