"use strict";
const jwt = require("jsonwebtoken");
const randToken = require("rand-token");
const moment = require("moment");
const error_1 = require("../modules/error");
const refresh_token_model_1 = require("../models/refresh-token.model");
const index_1 = require("../config/index");
var JWTLib;
(function (JWTLib) {
    let config;
    JWTLib.configure = (param) => {
        config = param;
    };
    const issueAccessToken = (accountType, payload) => {
        return jwt.sign(payload, index_1.default.jwtConfig.secret, { algorithm: index_1.default.jwtConfig.algorithm, expiresIn: index_1.default.jwtConfig[accountType.toLowerCase()].accessTokenExpiresIn });
    };
    const issueRefreshToken = async (model, id) => {
        await JWTLib.revoke(model, id);
        const token = randToken.uid(256);
        const refreshToken = new refresh_token_model_1.RefreshToken({
            token,
            accountId: id,
            accountType: model.modelName.toUpperCase()
        });
        await refreshToken.save();
        return refreshToken.token;
    };
    JWTLib.issueTokens = async (model, id, payload) => {
        return {
            accessToken: issueAccessToken(model.modelName, payload),
            refreshToken: await issueRefreshToken(model, id)
        };
    };
    JWTLib.refresh = async (model, id, payload, refreshToken) => {
        const token = await refresh_token_model_1.RefreshToken.findOne({ token: refreshToken });
        if (!token) {
            throw new error_1.FOError(401, "AUTHENTICATION_ERROR" /* ErrorCode.AUTHENTICATION_ERROR */, 'refresh token has been expired');
        }
        if (moment().diff(token.createdAt, 'second') > config[model.modelName.toLowerCase()].refreshTokenExpiresIn) {
            throw new error_1.FOError(401, "AUTHENTICATION_ERROR" /* ErrorCode.AUTHENTICATION_ERROR */, 'refresh token has been expired');
        }
        return JWTLib.issueTokens(model, id, payload);
    };
    JWTLib.revoke = async (model, id) => {
        await refresh_token_model_1.RefreshToken.deleteMany({
            accountId: id,
            accountType: model.modelName.toUpperCase()
        });
    };
    JWTLib.verify = (accessToken) => {
        const decoded = jwt.verify(accessToken, index_1.default.jwtConfig.public, { algorithms: [index_1.default.jwtConfig.algorithm] });
        delete decoded.iat;
        // delete decoded.exp
        return decoded;
    };
    JWTLib.decode = (accessToken) => {
        const decoded = jwt.decode(accessToken);
        return decoded;
    };
})(JWTLib || (JWTLib = {}));
module.exports = JWTLib;
//# sourceMappingURL=jwt.js.map