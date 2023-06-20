"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlingError = void 0;
const error_1 = require("../modules/error");
const logger_1 = require("../utils/logger");
const _ = require("lodash");
const handlingError = (err, req, res, next) => {
    let errors = undefined;
    if (err.hasOwnProperty('array')) {
        if (err.array()[0].param === '_error') {
            errors = err.array()[0].nestedErrors;
        }
        else {
            errors = err.array();
        }
    }
    // Handle express-validator error
    const caught = (errors) ? new error_1.FOError(400, errors.map(item => ({
        code: "INVALID_PARAMETER" /* ErrorCode.INVALID_PARAMETER */,
        message: item.msg,
        parameter: item.param
    }))) : customizeMessage(new error_1.FOError(err));
    logger_1.default.error(JSON.stringify(caught));
    if (process.env.NODE_ENV !== 'production') {
    }
    if (!caught.code) {
        caught.code = 500;
    }
    res.status(caught.code).json(caught);
};
exports.handlingError = handlingError;
const customizeMessage = (err) => {
    err.errors = err.errors.map((error) => {
        if (error.message) {
            for (const key in error.custom) {
                const replaceKey = new RegExp(`\{\{${key}\}\}`, 'g');
                error.message = error.message.replace(replaceKey, error.custom[key]);
            }
        }
        return _.pick(error, ['code', 'message', 'parameter', 'log']);
    });
    return err;
};
//# sourceMappingURL=handling-error.js.map