"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_controller_1 = require("../controllers/config.controller");
const admin_auth_controller_1 = require("../controllers/admin-auth.controller");
class Routes {
    constructor() {
        this.router = express.Router();
        this.router.use('/config', new config_controller_1.default().router);
        /************************************************************
         *                            DANGER                        *
         ************************************************************/
        // ADMIN
        this.router.use('/admin', new admin_auth_controller_1.default().router);
    }
}
exports.default = new Routes().router;
//# sourceMappingURL=v1.js.map