"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_model_1 = require("../models/menu.model");
const express_validator_1 = require("express-validator");
const MenuService = require("../services/menu.service");
const acl = require("../middlewares/access-control");
const admin_model_1 = require("../models/admin.model");
class ConfigController {
    constructor() {
        this.menu = async (req, res, next) => {
            try {
                (0, express_validator_1.validationResult)(req).throw();
                const result = await MenuService.menu(menu_model_1.Menu, req.parsedData);
                res.json(result);
            }
            catch (err) {
                next(err);
            }
        };
        this.createMenu = async (req, res, next) => {
            try {
                (0, express_validator_1.validationResult)(req).throw();
                const result = await MenuService.createMenu(menu_model_1.Menu, req.body, req.parsedData);
                res.json(result);
            }
            catch (err) {
                next(err);
            }
        };
        this.router = (0, express_1.Router)();
        this.routes();
    }
    /**
     * @typedef MenuInitRequest
     * @property {string} nameVi.required
     * @property {string} nameEn.required
     * @property {integer} index.required
     * @property {string} href.required
     * @property {boolean} isParent.required
     * @property {boolean} visible.required
     * @property {Array.<string>} childs
     */
    routes() {
        /**
         * Client Get Menu
         * Access level: Guest
         * @route GET /config/menu
         * @group Config Menu
         * @returns {Array.<Menu>} 200 - Success
         * @returns {Error.model} 400 - Invalid parameter error
         * @returns {Error.model} 500 - Internal error
         */
        this.router.get('/menu', this.menu);
        /**
         * Create Get Menu
         * Access level: Admin
         * @route POST /config/menu
         * @group Config Menu
         * @security JWT
         * @param {MenuInitRequest.model} data.body.required
         * @returns {Array.<Menu>} 200 - Success
         * @returns {Error.model} 400 - Invalid parameter error
         * @returns {Error.model} 500 - Internal error
         */
        this.router.post('/menu', acl.allow(admin_model_1.Admin, ['admin', 'mod']), this.createMenu);
    }
}
exports.default = ConfigController;
//# sourceMappingURL=config.controller.js.map