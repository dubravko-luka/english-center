"use strict";
const redis = require("redis");
const util_1 = require("util");
const logger_1 = require("../utils/logger");
var RedisLib;
(function (RedisLib) {
    const WAIT_UNLIMITED = 0;
    let getAsync;
    let pub;
    let sub;
    let queue;
    let client;
    const handlerMap = new Map();
    RedisLib.configure = (config) => {
        pub = redis.createClient(config.url);
        sub = redis.createClient(config.url);
        queue = redis.createClient(config.url);
        client = redis.createClient(config.url);
        getAsync = (0, util_1.promisify)(client.get).bind(client);
    };
    RedisLib.get = async (key) => {
        return await getAsync(key);
    };
    RedisLib.set = async (key, value, expiredTime = 0) => {
        return new Promise((resolve, reject) => {
            client.set(key, value, (err, data) => {
                if (err) {
                    logger_1.default.error(`redis set is failed. key: ${key} value: ${value}`);
                    reject(err);
                }
                if (expiredTime) {
                    client.expire(key, expiredTime);
                }
                resolve();
            });
        });
    };
    RedisLib.remove = async (key) => {
        return new Promise((resolve, reject) => {
            client.del(key, (err, result) => {
                if (err) {
                    logger_1.default.error(`redis del is failed. key: ${key}`);
                    reject(err);
                }
                resolve();
            });
        });
    };
    const scan = async (cursor, prefix) => {
        return new Promise((resolve, reject) => {
            client.scan(cursor, 'MATCH', prefix, 'COUNT', 100, (err, res) => {
                if (err) {
                    reject();
                }
                resolve(res);
            });
        });
    };
    RedisLib.removeWithPrefix = async (cursor, prefix) => {
        const removeKeys = async (cursor) => {
            const list = await scan(cursor, prefix);
            const newCursor = list[0];
            const keys = list[1];
            await Promise.all(keys.map(async (key) => {
                await RedisLib.remove(key);
            }));
            if (newCursor === '0') {
                return;
            }
            await removeKeys(newCursor);
        };
        await removeKeys(cursor);
    };
})(RedisLib || (RedisLib = {}));
module.exports = RedisLib;
//# sourceMappingURL=redis.js.map