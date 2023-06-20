"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshTokenCacheKey = exports.getError = exports.getEnumValues = exports.getRegExRule = void 0;
const error_1 = require("../modules/error");
const getRegExRule = function (type) {
    switch (type) {
        case 'email':
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        case 'url':
            return /[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        case 'date':
            // yyyy-mm-dd
            return /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    }
};
exports.getRegExRule = getRegExRule;
const getEnumValues = (enumerator) => {
    if (!enumerator) {
        return [];
    }
    return Object.keys(enumerator).filter(key => isNaN(Number(key))).map(key => enumerator[key]);
};
exports.getEnumValues = getEnumValues;
const getError = (err) => {
    if (err.message.includes('E11000')) {
        if (err.message.includes('phone')) {
            return new error_1.FOError(409, "DUPLICATE" /* ErrorCode.DUPLICATE */, 'this phone number is already in use', 'phone');
        }
        if (err.message.includes('email')) {
            return new error_1.FOError(409, "DUPLICATE" /* ErrorCode.DUPLICATE */, 'this email address is already in use', 'email');
        }
        return new error_1.FOError(409, "DUPLICATE" /* ErrorCode.DUPLICATE */, 'duplicate key entry');
    }
    return new error_1.FOError(400, "INVALID_PARAMETER" /* ErrorCode.INVALID_PARAMETER */, err.message);
};
exports.getError = getError;
const generateRefreshTokenCacheKey = (id, data) => {
    try {
        return `userId:${id}:refreshtoken:userIp:${data.userIp}:device:${data.userAgent.device?.type}${data.userAgent.client.name}${data.userAgent.os?.name}${data.userAgent.device?.type}${data.userAgent.device?.brand}`;
    }
    catch (_) {
        return '';
    }
};
exports.generateRefreshTokenCacheKey = generateRefreshTokenCacheKey;
//# sourceMappingURL=index.js.map