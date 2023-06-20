"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRequestMiddleware = void 0;
const requestIp = require("request-ip");
const DeviceDetector = require("device-detector-js");
const deviceDetector = new DeviceDetector();
const parseRequestMiddleware = (req, res, next) => {
    const userAgent = req.headers['user-agent'];
    req.parsedData = {
        userIp: requestIp.getClientIp(req),
        originUserAgent: userAgent,
        userAgent: deviceDetector.parse(userAgent)
    };
    next();
};
exports.parseRequestMiddleware = parseRequestMiddleware;
//# sourceMappingURL=parse-request.js.map