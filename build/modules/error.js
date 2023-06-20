"use strict";
const _ = require("lodash");
/**
 * @typedef SubError
 * @property {string} code
 * @property {string} message
 * @property {string} parameter
 */
/**
 * @typedef Error
 * @property {integer} statusCode
 * @property {Array.<SubError>} errors
 */
var ErrorLib;
(function (ErrorLib) {
    class FOError extends Error {
        constructor(...args) {
            super();
            this.code = 500;
            this.errors = [];
            if (typeof args[0] === 'number') {
                this.code = args[0];
                if (typeof args[1] === 'string' && args[4]) {
                    const [code, message, parameter, displayMessage] = args.slice(1, 5);
                    let custom = {};
                    if (args[5] && typeof args[5] === 'object')
                        custom = args[5];
                    this.errors = [_.omitBy({
                            code,
                            message: displayMessage,
                            parameter,
                            log: message,
                            custom
                        }, _.isUndefined)];
                }
                else if (typeof args[1] === 'string') {
                    const [code, message, parameter] = args.slice(1, 4);
                    this.errors = [_.omitBy({ code, message, parameter }, _.isUndefined)];
                }
                else {
                    this.errors = _.flatten([args[1]]).map((e) => _.omitBy(e, _.isUndefined));
                }
                if (typeof args[1] === 'string' && args[6]) {
                    this.payload = args[6];
                }
                else if (typeof args[1] !== 'string' && args[2]) {
                    this.payload = args[2];
                }
            }
            else {
                this.code = 500;
                this.errors = [{
                        code: "INTERNAL_ERROR" /* ErrorCode.INTERNAL_ERROR */,
                        message: 'unsupported error'
                    }];
                this.payload = args[0].payload;
                if (typeof args[0] === 'object') {
                    if (isErrorObj(args[0])) {
                        this.code = args[0].code;
                        this.errors = args[0].errors;
                    }
                    else if (args[0] instanceof Error) {
                        const e = args[0];
                        this.errors[0].message = e.message;
                    }
                }
            }
        }
    }
    ErrorLib.FOError = FOError;
    function isErrorObj(obj) {
        return (_.isNumber(obj.code) &&
            _.isArray(obj.errors) &&
            !_.isEmpty(obj.errors) &&
            _.every(obj.errors, (error) => _.isString(error.code)));
    }
})(ErrorLib || (ErrorLib = {}));
module.exports = ErrorLib;
//# sourceMappingURL=error.js.map