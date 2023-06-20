"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminForgotPass = exports.adminForgotPassSchema = void 0;
const mongoosePaginate = require("mongoose-paginate");
const mongooseTimestamp = require("mongoose-timestamp");
const mongooseBcrypt = require("mongoose-bcrypt");
const mongooseDelete = require("mongoose-delete");
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils");
/**
 * @typedef AdminForgotPass
 * @property {string} id
 * @property {string} hash
 * @property {Admin.model} adminId
 * @property {string} email
 * @property {string} expired
 * @property {string} createdAt
 * @property {string} updatedAt
 */
exports.adminForgotPassSchema = new mongoose_1.Schema({
    hash: {
        type: String,
        trim: true,
        required: true
    },
    adminId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Admin"
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: (0, utils_1.getRegExRule)('email')
    },
    expired: {
        type: Number,
        required: true
    }
});
exports.adminForgotPassSchema.plugin(mongoosePaginate);
exports.adminForgotPassSchema.plugin(mongooseTimestamp);
exports.adminForgotPassSchema.plugin(mongooseBcrypt);
exports.adminForgotPassSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true
});
exports.adminForgotPassSchema.post('save', async (err, doc, next) => {
    next((0, utils_1.getError)(err));
});
exports.adminForgotPassSchema.post('findOneAndUpdate', (err, doc, next) => {
    next((0, utils_1.getError)(err));
});
/* tslint:disable */
exports.AdminForgotPass = (0, mongoose_1.model)('AdminForgotPass', exports.adminForgotPassSchema);
/* tslint:enable */ 
//# sourceMappingURL=admin-forgot-password.model.js.map