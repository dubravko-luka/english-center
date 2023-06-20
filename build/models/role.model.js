"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.roleSchema = void 0;
const mongoosePaginate = require("mongoose-paginate");
const mongooseTimestamp = require("mongoose-timestamp");
const mongooseBcrypt = require("mongoose-bcrypt");
const mongooseDelete = require("mongoose-delete");
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils");
/**
 * @typedef Role
 * @property {string} id
 * @property {string} roleName
 * @property {string} createdAt
 * @property {string} updatedAt
 */
/**
 * @typedef PagedRoles
 * @property {integer} total
 * @property {integer} limit
 * @property {integer} page
 * @property {integer} pages
 * @property {Array.<Role>} docs
 */
exports.roleSchema = new mongoose_1.Schema({
    roleName: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 20,
        required: true
    }
});
exports.roleSchema.plugin(mongoosePaginate);
exports.roleSchema.plugin(mongooseTimestamp);
exports.roleSchema.plugin(mongooseBcrypt);
exports.roleSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true
});
exports.roleSchema.post('save', async (err, doc, next) => {
    next((0, utils_1.getError)(err));
});
exports.roleSchema.post('findOneAndUpdate', (err, doc, next) => {
    next((0, utils_1.getError)(err));
});
/* tslint:disable */
exports.Role = (0, mongoose_1.model)('Role', exports.roleSchema);
/* tslint:enable */ 
//# sourceMappingURL=role.model.js.map