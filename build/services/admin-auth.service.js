"use strict";
const constant_1 = require("../models/constant");
const jwt_1 = require("../modules/jwt");
const utils_1 = require("../utils");
const error_1 = require("../modules/error");
const admin_forgot_password_model_1 = require("../models/admin-forgot-password.model");
const constants_1 = require("../constants");
const email_1 = require("../modules/email");
const RedisLib = require("../modules/redis");
const config_1 = require("../config");
const logger_1 = require("../utils/logger");
const sha256 = require('sha256');
var AdminAuthService;
(function (AdminAuthService) {
    AdminAuthService.login = async (model, params, parsedData) => {
        const role = model.modelName.toLowerCase();
        const query = { email: params.email };
        const doc = await model.findOne(query).populate('role');
        if (!doc) {
            throw new error_1.FOError(404, "NOT_FOUND" /* ErrorCode.NOT_FOUND */, `${role} not found`);
        }
        const valid = await doc.verifyPassword(params.password);
        if (!valid) {
            throw new error_1.FOError(401, "AUTHENTICATION_ERROR" /* ErrorCode.AUTHENTICATION_ERROR */, 'authentication failed');
        }
        params.password = undefined;
        const tokens = await (0, jwt_1.issueTokens)(model, doc.id, { role, id: doc.id });
        const cacheKey = (0, utils_1.generateRefreshTokenCacheKey)(doc.id, parsedData);
        // if (cacheKey) {
        //     await RedisLib.set(
        //         cacheKey,
        //         tokens.refreshToken,
        //         TIMESTAMP_CONSTANT.MILLISECONDS_PER_SECOND * config.jwtConfig[role].accessTokenExpiresIn
        //     )
        // }
        return {
            [role]: doc,
            token: tokens.accessToken,
            refreshToken: tokens.refreshToken
        };
    };
    AdminAuthService.refreshToken = async (model, id, parsedData) => {
        const cacheKey = await (0, utils_1.generateRefreshTokenCacheKey)(id, parsedData);
        if (!cacheKey) {
            throw new error_1.FOError(401, "AUTHENTICATION_ERROR" /* ErrorCode.AUTHENTICATION_ERROR */, 'refresh token has been expired');
        }
        const refreshToken = await RedisLib.get(cacheKey);
        const tokens = await (0, jwt_1.refresh)(model, id, { id, role: model.modelName.toLowerCase() }, refreshToken);
        await RedisLib.set(cacheKey, tokens.refreshToken, constant_1.TIMESTAMP_CONSTANT.MILLISECONDS_PER_SECOND * config_1.default.jwtConfig[model.modelName.toLowerCase()]);
        return {
            refreshToken: tokens.refreshToken,
            token: tokens.accessToken
        };
    };
    AdminAuthService.logout = async (model, req) => {
        const access = await (0, jwt_1.verify)(req?.authorization);
        if (!access) {
            throw new error_1.FOError(401, "AUTHENTICATION_ERROR" /* ErrorCode.AUTHENTICATION_ERROR */, 'authentication failed');
        }
        const query = { _id: access?.id };
        const doc = await model.findOne(query);
        doc.password = undefined;
        return await AdminAuthService.revokeToken(model, doc?.id);
    };
    AdminAuthService.forgotPassword = async (model, email) => {
        if (!email) {
            throw new error_1.FOError(400, "INVALID_PARAMETER" /* ErrorCode.INVALID_PARAMETER */, 'Invalid parameter error');
        }
        const adminExists = await model.findOne({
            email: email
        });
        if (!adminExists) {
            throw new error_1.FOError(404, "NOT_FOUND" /* ErrorCode.NOT_FOUND */, 'Not found account');
        }
        const passForgot = await admin_forgot_password_model_1.AdminForgotPass.findOne({ email: email, adminId: adminExists._id });
        if (passForgot &&
            Number((new Date().getTime() / 1000).toFixed(0)) - Number((new Date(passForgot?.updatedAt).getTime() / 1000).toFixed(0)) < constants_1.timeResendEmail) {
            throw new error_1.FOError(400, "BAD_REQUEST" /* ErrorCode.BAD_REQUEST */, `Can resend when 60 seconds`);
        }
        const hash = sha256(`userId=${adminExists._id}&email=${email}`);
        const linkResetPassFE = `https://cms.abc.com/init-password?user=${adminExists._id}&token=${hash}`;
        const html = constants_1.ForgotPassword.body.replace(/{#linkResetPassword}/g, linkResetPassFE);
        (0, email_1.sendEmail)(email, constants_1.ForgotPassword.subject, html).then((result) => {
            logger_1.default.info('send recovery email successfully');
        });
        if (passForgot) {
            await admin_forgot_password_model_1.AdminForgotPass.findByIdAndUpdate(passForgot._id, {
                hash: hash,
                expired: (new Date().getTime() / 1000) + constants_1.timeExpiredHashForgotPass
            }, {
                new: true
            });
        }
        else {
            await new admin_forgot_password_model_1.AdminForgotPass({
                hash: hash,
                email: email,
                adminId: adminExists._id,
                expired: (new Date().getTime() / 1000) + constants_1.timeExpiredHashForgotPass
            }).save();
        }
        return {
            success: true
        };
    };
    AdminAuthService.initPassword = async (model, query, body) => {
        if (!body.newpassword || !body.repassword || (body.newpassword !== body.repassword)) {
            throw new error_1.FOError(400, "INVALID_PARAMETER" /* ErrorCode.INVALID_PARAMETER */, 'Invalid parameter error');
        }
        const adminExs = await model.findById(query.userId);
        if (!adminExs) {
            throw new error_1.FOError(404, "NOT_FOUND" /* ErrorCode.NOT_FOUND */, 'Not found user');
        }
        const adminForgotExs = await admin_forgot_password_model_1.AdminForgotPass.findOne({
            adminId: query.userId,
            hash: query.hash
        });
        if (!adminForgotExs) {
            throw new error_1.FOError(404, "NOT_FOUND" /* ErrorCode.NOT_FOUND */, 'Not found request forgot password');
        }
        const now = new Date().getTime() / 1000;
        if (now > adminForgotExs.expired) {
            throw new error_1.FOError(408, "REQUEST_TIMEOUT" /* ErrorCode.REQUEST_TIMEOUT */, 'Link reset password expired');
        }
        if (adminForgotExs.hash !== query.hash) {
            throw new error_1.FOError(400, "INVALID_PARAMETER" /* ErrorCode.INVALID_PARAMETER */, 'Token incorrect');
        }
        await model.findByIdAndUpdate(adminExs._id, {
            password: body.newpassword
        }, {
            new: true
        });
        await admin_forgot_password_model_1.AdminForgotPass.deleteOne({ _id: adminForgotExs._id });
        return {
            success: true
        };
    };
    AdminAuthService.changePassword = async (model, header, body) => {
        const access = await (0, jwt_1.verify)(header?.authorization);
        if (!access) {
            throw new error_1.FOError(401, "AUTHENTICATION_ERROR" /* ErrorCode.AUTHENTICATION_ERROR */, 'authentication failed');
        }
        const query = { _id: access?.id };
        const doc = await model.findOne(query);
        const valid = await doc.verifyPassword(body.oldpassword);
        if (!valid) {
            throw new error_1.FOError(401, "AUTHENTICATION_ERROR" /* ErrorCode.AUTHENTICATION_ERROR */, 'authentication failed');
        }
        if (!body.newpassword || !body.repassword || (body.newpassword !== body.repassword)) {
            throw new error_1.FOError(400, "INVALID_PARAMETER" /* ErrorCode.INVALID_PARAMETER */, 'Invalid parameter error');
        }
        await model.findByIdAndUpdate(doc._id, {
            password: body.newpassword
        }, {
            new: true
        });
        await AdminAuthService.logout(model, header);
        return {
            success: true
        };
    };
    AdminAuthService.validateToken = async (model, header, body) => {
        return true;
    };
    AdminAuthService.revokeToken = async (model, id) => {
        await (0, jwt_1.revoke)(model, id);
        return {
            code: 200,
            success: true
        };
    };
})(AdminAuthService || (AdminAuthService = {}));
module.exports = AdminAuthService;
//# sourceMappingURL=admin-auth.service.js.map