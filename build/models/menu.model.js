"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.menuSchema = void 0;
const mongoosePaginate = require("mongoose-paginate");
const mongooseTimestamp = require("mongoose-timestamp");
const mongooseBcrypt = require("mongoose-bcrypt");
const mongooseDelete = require("mongoose-delete");
const mongoose_1 = require("mongoose");
const utils_1 = require("../utils");
/**
 * @typedef Menu
 * @property {string} id
 * @property {string} nameVi
 * @property {string} nameEn
 * @property {string} href
 * @property {integer} index
 * @property {boolean} isParent
 * @property {boolean} visible
 * @property {Array.<Menu>} childs
 * @property {string} createdAt
 * @property {string} updatedAt
 */
/**
 * @typedef PagedMenu
 * @property {integer} total
 * @property {integer} limit
 * @property {integer} page
 * @property {integer} pages
 * @property {Array.<Menu>} docs
 */
exports.menuSchema = new mongoose_1.Schema({
    nameVi: {
        type: String,
        trim: true,
    },
    nameEn: {
        type: String,
        trim: true,
    },
    href: {
        type: String,
        requried: true,
        trim: true,
    },
    index: {
        type: Number,
        requried: true,
        unique: true,
    },
    isParent: {
        type: Boolean,
        default: false,
        required: true
    },
    visible: {
        type: Boolean,
        default: false,
        required: true
    },
    childs: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Menu"
        }]
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
exports.menuSchema.plugin(mongoosePaginate);
exports.menuSchema.plugin(mongooseTimestamp);
exports.menuSchema.plugin(mongooseBcrypt);
exports.menuSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true
});
exports.menuSchema.index({ createdAt: 1 });
exports.menuSchema.index({ updatedAt: 1 });
exports.menuSchema.post('save', async (err, doc, next) => {
    next((0, utils_1.getError)(err));
});
exports.menuSchema.post('findOneAndUpdate', (err, doc, next) => {
    next((0, utils_1.getError)(err));
});
/* tslint:disable */
exports.Menu = (0, mongoose_1.model)('Menu', exports.menuSchema);
/* tslint:enable */ 
//# sourceMappingURL=menu.model.js.map