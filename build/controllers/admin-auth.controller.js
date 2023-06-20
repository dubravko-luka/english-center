"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const acl = require("../middlewares/access-control");
const validation = require("../middlewares/validations");
const express_1 = require("express");
const admin_model_1 = require("../models/admin.model");
const express_validator_1 = require("express-validator");
const AdminAuthService = require("../services/admin-auth.service");
class AdminAuthController {
    constructor() {
        this.login = async (req, res, next) => {
            try {
                (0, express_validator_1.validationResult)(req).throw();
                const result = await AdminAuthService.login(admin_model_1.Admin, req.body, req.parsedData);
                res.json(result);
            }
            catch (err) {
                next(err);
            }
        };
        this.refreshToken = async (req, res, next) => {
            try {
                (0, express_validator_1.validationResult)(req).throw();
                const result = await AdminAuthService.refreshToken(admin_model_1.Admin, req.params.id, req.parsedData);
                res.json(result);
            }
            catch (err) {
                next(err);
            }
        };
        this.logout = async (req, res, next) => {
            try {
                (0, express_validator_1.validationResult)(req).throw();
                const result = await AdminAuthService.logout(admin_model_1.Admin, req?.headers);
                res.json(result);
            }
            catch (err) {
                next(err);
            }
        };
        this.forgotPassword = async (req, res, next) => {
            try {
                (0, express_validator_1.validationResult)(req).throw();
                const result = await AdminAuthService.forgotPassword(admin_model_1.Admin, req.body.email);
                res.json(result);
            }
            catch (err) {
                next(err);
            }
        };
        this.initPassword = async (req, res, next) => {
            try {
                (0, express_validator_1.validationResult)(req).throw();
                const result = await AdminAuthService.initPassword(admin_model_1.Admin, req?.query, req?.body);
                res.json(result);
            }
            catch (err) {
                next(err);
            }
        };
        this.changePassword = async (req, res, next) => {
            try {
                (0, express_validator_1.validationResult)(req).throw();
                const result = await AdminAuthService.changePassword(admin_model_1.Admin, req?.headers, req?.body);
                res.json(result);
            }
            catch (err) {
                next(err);
            }
        };
        this.validateToken = async (req, res, next) => {
            try {
                (0, express_validator_1.validationResult)(req).throw();
                const result = await AdminAuthService.validateToken(admin_model_1.Admin, req?.headers, req?.body);
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
     * @typedef AdminInitRequest
     * @property {string} firstName.required
     * @property {string} lastName.required
     * @property {string} phone.required
     * @property {string} email.required
     */
    /**
     * @typedef AdminLoginRequest
     * @property {string} email.required
     * @property {string} password.required
     */
    /**
     * @typedef VerifyEmail
     * @property {integer} code.required
     */
    /**
     * @typedef SendForgotPassword
     * @property {string} email.required
     */
    /**
     * @typedef InitNewPassword
     * @property {string} newpassword
     * @property {string} repassword
     */
    /**
     * @typedef ChangePass
     * @property {string} oldpassword
     * @property {string} newpassword
     * @property {string} repassword
     */
    routes() {
        /**
         * Login for admin
         * Access level: Guest
         * @route POST /admin/login
         * @group Admin
         * @param {AdminLoginRequest.model} data.body.required
         * @returns {Admin.model} 200 - Success
         * @returns {Error.model} 400 - Invalid parameter error
         * @returns {Error.model} 401 - Authentication error
         * @returns {Error.model} 500 - Internal error
         */
        this.router.post('/login', acl.allow(admin_model_1.Admin, ['guest']), validation.checkAuthLogin, this.login);
        /**
         * Refresh user's refresh token
         * Access level: Guest
         * @route POST /admin/{id}/token
         * @group Admin
         * @param {string} id.path.required
         * @returns {RefreshToken.model} 200 - Success
         * @returns {Error.model} 401 - Unauthorized error
         * @returns {Error.model} 403 - Forbidden error
         * @returns {Error.model} 500 - Internal error
         */
        this.router.post('/:id/token', acl.allow(admin_model_1.Admin, ['guest']), this.refreshToken);
        /**
         * Validate token
         * Access level: Admin, Mod
         * @route GET /admin/token/validate
         * @group Admin
         * @security JWT
         * @returns {RefreshToken.model} 200 - Success
         * @returns {Error.model} 401 - Unauthorized error
         * @returns {Error.model} 403 - Forbidden error
         * @returns {Error.model} 500 - Internal error
         */
        this.router.get('/token/validate', acl.allow(admin_model_1.Admin, ['admin', 'mod']), this.validateToken);
        /**
         * Admin logout
         * Access level: Admin, Mod
         * @route GET /admin/logout
         * @group Admin
         * @security JWT
         * @returns {} 200 - Success
         * @returns {Error.model} 403 - Forbidden error
         * @returns {Error.model} 500 - Internal error
         */
        this.router.get('/logout', acl.allow(admin_model_1.Admin, ['admin', 'mod']), this.logout);
        /**
         * Send mail forgot password
         * Access level: Guest
         * @route POST /admin/password
         * @group Admin
         * @param {SendForgotPassword.model} data.body.required
         * @returns {} 200 - Success
         * @returns {Error.model} 400 - Invalid parameter error
         * @returns {Error.model} 404 - Not found error
         * @returns {Error.model} 500 - Internal error
         */
        this.router.post('/password', acl.allow(admin_model_1.Admin, ['guest']), validation.checkEmail, this.forgotPassword);
        /**
         * init new password when submit send forgot password
         * Access level: Guest
         * @route PUT /admin/password
         * @group Admin
         * @param {string} userId.query.required
         * @param {string} hash.query.required
         * @param {InitNewPassword.model} data.body.required
         * @returns {} 200 - Success
         * @returns {Error.model} 400 - Invalid parameter error
         * @returns {Error.model} 404 - Not found error
         * @returns {Error.model} 500 - Internal error
         */
        this.router.put('/password', acl.allow(admin_model_1.Admin, ['guest']), validation.checkResetPassword, this.initPassword);
        /**
         * Change password
         * Access level: Admin, Mod
         * @route PUT /admin/change-password
         * @group Admin
         * @security JWT
         * @param {ChangePass.model} data.body.required
         * @returns {} 200 - Success
         * @returns {Error.model} 401 - Unauthorized error
         * @returns {Error.model} 403 - Forbidden error
         * @returns {Error.model} 500 - Internal error
         */
        this.router.put('/change-password', acl.allow(admin_model_1.Admin, ['admin', 'mod']), validation.checkResetPassword, this.changePassword);
    }
}
exports.default = AdminAuthController;
//# sourceMappingURL=admin-auth.controller.js.map