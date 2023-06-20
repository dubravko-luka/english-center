"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshToken = exports.refreshTokenSchema = void 0;
const mongoosePaginate = require("mongoose-paginate");
const mongooseTimestamp = require("mongoose-timestamp");
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils");
const enum_1 = require("./enum");
/**
 * @typedef RefreshToken
 * @property {string} refreshToken
 * @property {string} token
 */
exports.refreshTokenSchema = new mongoose_1.Schema({
    accountId: {
        type: String
    },
    accountType: {
        type: String,
        enum: (0, utils_1.getEnumValues)(enum_1.ACCOUNT_TYPE)
    },
    token: {
        type: String
    }
});
exports.refreshTokenSchema.index({ token: 1 });
exports.refreshTokenSchema.index({ accountId: 1, accountType: 1 });
exports.refreshTokenSchema.index({ createdAt: 1 });
exports.refreshTokenSchema.index({ updatedAt: 1 });
exports.refreshTokenSchema.plugin(mongoosePaginate);
exports.refreshTokenSchema.plugin(mongooseTimestamp);
/* tslint:disable */
exports.RefreshToken = (0, mongoose_1.model)('RefreshToken', exports.refreshTokenSchema);
/* tslint:enable */
//# sourceMappingURL=refresh-token.model.js.map