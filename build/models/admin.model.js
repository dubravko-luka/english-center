"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.adminSchema = void 0;
const mongoosePaginate = require("mongoose-paginate");
const mongooseTimestamp = require("mongoose-timestamp");
const mongooseBcrypt = require("mongoose-bcrypt");
const mongooseDelete = require("mongoose-delete");
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils");
const constants_1 = require("../constants");
/**
 * @typedef Admin
 * @property {string} id
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} phone
 * @property {string} email
 * @property {string} password
 * @property {string} avatar
 * @property {string} emailVerified
 * @property {Role.model} role
 * @property {string} createdAt
 * @property {string} updatedAt
 */
/**
 * @typedef PagedAdmin
 * @property {integer} total
 * @property {integer} limit
 * @property {integer} page
 * @property {integer} pages
 * @property {Array.<Admin>} docs
 */
exports.adminSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 20,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 20,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: (0, utils_1.getRegExRule)('email')
    },
    phone: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        bcrypt: true,
        rounds: 9
    },
    avatar: {
        type: String,
        default: constants_1.avatarDefault
    },
    emailVerified: {
        type: Boolean,
        default: false,
        required: true
    },
    role: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Role"
    }
}, {
    toObject: {
        virtuals: true,
        transform: (doc, ret) => {
            delete ret.id;
            delete ret.__v;
            delete ret.password;
        }
    },
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            delete ret.id;
            delete ret.__v;
            delete ret.password;
        }
    }
});
exports.adminSchema.plugin(mongoosePaginate);
exports.adminSchema.plugin(mongooseTimestamp);
exports.adminSchema.plugin(mongooseBcrypt);
exports.adminSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true
});
exports.adminSchema.index({ email: 1 }, { unique: true });
exports.adminSchema.index({ phone: 1 }, { unique: true });
exports.adminSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});
exports.adminSchema.post('save', async (err, doc, next) => {
    next((0, utils_1.getError)(err));
});
exports.adminSchema.post('findOneAndUpdate', (err, doc, next) => {
    next((0, utils_1.getError)(err));
});
/* tslint:disable */
exports.Admin = (0, mongoose_1.model)('Admin', exports.adminSchema);
/* tslint:enable */ 
//# sourceMappingURL=admin.model.js.map