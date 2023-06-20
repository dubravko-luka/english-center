"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allow = exports.verifyToken = exports.config = void 0;
const constants_1 = require("../constants");
const error_1 = require("../modules/error");
const jwt_1 = require("../modules/jwt");
const message_response_1 = require("../models/message-response");
let options = {
    decodedObjectName: 'admin',
    defaultRole: 'guest',
    denyCallback: (res, next) => {
        return next(new error_1.FOError(403, "FORBIDDEN" /* ErrorCode.FORBIDDEN */, 'not authorized'));
    }
};
function config(config) {
    options = Object.assign(options, config);
}
exports.config = config;
const verifyToken = async (model, req, res, next) => {
    try {
        const token = req?.headers?.authorization || '';
        const access = await (0, jwt_1.verify)(token);
        if (!access) {
            return options.denyCallback(res, next);
        }
        return await model.findById(access?.id).populate('role');
    }
    catch (err) {
        return err;
    }
};
exports.verifyToken = verifyToken;
function allow(model, roles, conditions) {
    return async (req, res, next) => {
        if (roles.indexOf(constants_1.roleGuest) !== -1) {
            if (roles.length === -1) {
                if (req.headers && req.headers.authorization) {
                    return next(new error_1.FOError(403, "FORBIDDEN" /* ErrorCode.FORBIDDEN */, message_response_1.MessageResponse[403]));
                }
                return next();
            }
            return next();
        }
        if (!req.headers.authorization) {
            return options.denyCallback(res, next);
        }
        const access = await (0, exports.verifyToken)(model, req, res, next);
        if (roles.indexOf(access?.role?.roleName) === -1) {
            return options.denyCallback(res, next);
        }
        return next();
    };
}
exports.allow = allow;
//# sourceMappingURL=access-control.js.map