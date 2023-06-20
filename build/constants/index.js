"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPassword = exports.EmailVerify = exports.AdminDefault = exports.avatarDefault = exports.timeExpiredHashForgotPass = exports.timeExpiredCodeVerifyEmail = exports.timeResendEmail = exports.defaultPassword = exports.defaultRoles = exports.roleMod = exports.roleGuest = exports.roleAdmin = exports.Constants = void 0;
class Constants {
}
exports.Constants = Constants;
Constants.SECRET_JWT = "-----BEGIN RSA PRIVATE KEY-----\nMIICWwIBAAKBgQCIUtOcwE1GSaPDvDKIbkbrFtf2ufiTM59Cnn4h2VBuaJD4SPS6\nQqOGCZxJZZQ3U4sCqEhNJbKkHShH4ZqMOK6SfD+1P/XDQzNgp8wBBnRALD02HlaT\n23CJS0R+a+LO9A0VzQCqjUrM4EjRXeIK8VuW7jBiEOB65RoyoFS9sn9nDwIDAQAB\nAoGAZBC4ODWIA3IGfaTlSvP3ppTsDbVQ22xnGNWSLHKB8alb0IRs71P/CGKBj/a6\nJypxvY+dEtP7HzAv4yOc+BSbPtxo2BDdJx0USuMAJYRs0lUM9M3wJgIlqeM+6FSS\n/+nZtHZBfsnAAYAXPpgOZdikmzAtIz+R7qXOFH2M8vfYLdECQQDwUyrPLBRd8wN6\nUoAG7rlx1mmTab4Z6MlCDLo8p1LguvklmqM4LlD4hmg4Kyo2EGRvJ8NTcq4w352n\nAmMD46pjAkEAkTcX9tpvhl7rsX9gTJ5tYHXA332ag7on7gJ6cNcjadSVtZ44D5X9\nhyMGla+RB7LXXYRBDhkJTASLhlYAh756ZQJASBJI9lRbz0j/tAFlz65sAs2wX7sI\nfbCoGpzChUoQusCX00UqycBqG/4C50VapVgJJqSgGTh9ML7/AoTeuN3fzQJAIWun\nlUWCg09XOTuSgy+3BoszP3xd0lFGnU1utoec+99UMT9fsZ6YgcB65HpKi5YKYNhu\nTHtQm3E0V091wcgBzQJAXmvJ97UmjB7nJClkjksLcE2fsbWQSwljtjDkTHUSAXh4\nHZxiHBbH2x5dSCAK7vJOKXmqb3kRVk0Y15MyKB4QTQ==\n-----END RSA PRIVATE KEY-----";
Constants.PUBLIC_JWT = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCIUtOcwE1GSaPDvDKIbkbrFtf2\nufiTM59Cnn4h2VBuaJD4SPS6QqOGCZxJZZQ3U4sCqEhNJbKkHShH4ZqMOK6SfD+1\nP/XDQzNgp8wBBnRALD02HlaT23CJS0R+a+LO9A0VzQCqjUrM4EjRXeIK8VuW7jBi\nEOB65RoyoFS9sn9nDwIDAQAB\n-----END PUBLIC KEY-----";
Constants.ALGORITHM_JWT = "RS256";
Constants.PORT = 8081;
Constants.NODE_ENV = "production";
Constants.HOSTNAME_SERVER = "";
Constants.MONGODB_URI = "mongodb+srv://admin:admin@reviewphim.bzwnnor.mongodb.net/reviewPhim";
Constants.REDIS_URI = 'redis://redis:6379';
Constants.EMAIL_HOST = 'smtp.gmail.com';
Constants.EMAIL_PORT = 465;
Constants.EMAIL_USERNAME = 'richard.nmp98@gmail.com';
Constants.EMAIL_PASSWORD = 'amxsvbyeiktchhqy';
Constants.EMAIL_SENDER = 'HMA <richard.nmp98@gmail.com>';
Constants.USER_ACCESS_TOKEN_EXPIRES_IN = 60000000;
Constants.USER_REFRESH_TOKEN_EXPIRES_IN = 60000000;
exports.roleAdmin = 'admin';
exports.roleGuest = 'guest';
exports.roleMod = 'mod';
exports.defaultRoles = [exports.roleAdmin, exports.roleGuest, exports.roleMod];
exports.defaultPassword = '12345678@ab';
exports.timeResendEmail = 60;
exports.timeExpiredCodeVerifyEmail = 300;
exports.timeExpiredHashForgotPass = 300;
exports.avatarDefault = 'https://bafybeidtutyrfva5nyapjwzrvbdoypijim6kulifdn4ut6fgopmicng5tq.ipfs.infura-ipfs.io/';
exports.AdminDefault = [
    {
        firstName: "Admin",
        lastName: "1",
        phone: "038777999",
        email: "richard.nmp98@gmail.com",
        password: exports.defaultPassword,
        avatar: exports.avatarDefault,
        emailVerified: true,
        gender: "M"
    },
    {
        firstName: "Admin",
        lastName: "2",
        phone: "0387776666",
        email: "dangvanchieugcd@gmail.com",
        password: exports.defaultPassword,
        avatar: exports.avatarDefault,
        emailVerified: true,
        gender: "M"
    }
];
exports.EmailVerify = {
    subject: 'Verify Email',
    body: `
    <div style="display: flex; align-items: center; justify-content: center;width: 100%; border-radius: 5px; padding: 30px 0px; box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;">
        <div style="max-width: 720px; width: 100%; margin: auto; border-radius: 10px; border: 1px solid rgba(199, 199, 199, 0.5); box-shadow: 3px 3px 15px 5px rgba(199, 199, 199, 0.5); padding: 40px; box-sizing: border-box;">
            <p style="text-align: center; font-weight: 600; font-size: 30px;">ABC Co., Ltd</p>
            <div style="padding: 20px; box-sizing: border-box;">
                <p style="">This is the admin account verification email</p>
                <p style="">Please enter the following number to complete account verification</p>
                <p style="">Verification code is valid for 5 minutes</p>
                <p style="text-align: center; font-weight: 600; font-size: 28px; letter-spacing: 10px;">{#codeVerify}</p>
                <p style=""><span style="font-weight: bold">Note:</span> This is an automated email</p>
                <p style="">Please do not reply to this email</p>
                <p style="">If you are having trouble verifying your admin account, please contact us by email: <span style="font-weight: bold">abc@abc.com</span></p>
                <p style="">Thank you so much!</p>
                <p style="font-weight: bold">ABC Co., Ltd</p>
            </div>
        </div>
    </div>
    `
};
exports.ForgotPassword = {
    subject: 'Reset Password',
    body: `
    <div style="display: flex; align-items: center; justify-content: center;width: 100%; border-radius: 5px; padding: 30px 0px; box-sizing: border-box; font-family: Arial, Helvetica, sans-serif;">
        <div style="max-width: 720px; width: 100%; margin: auto; border-radius: 10px; border: 1px solid rgba(199, 199, 199, 0.5); box-shadow: 3px 3px 15px 5px rgba(199, 199, 199, 0.5); padding: 40px; box-sizing: border-box;">
            <p style="text-align: center; font-weight: 600; font-size: 30px;">ABC Co., Ltd</p>
            
            <div style="padding: 20px; box-sizing: border-box;">
                <p style="">Here is the password reset email</p>
                <p style="">Please click on the link below to reset your new password</p>
                <p style="">Link reset password is valid for 5 minutes</p>
                <a href="{#linkResetPassword}">{#linkResetPassword}</a>
                <p style=""><span style="font-weight: bold">Note:</span> This is an automated email</p>
                <p style="">Please do not reply to this email</p>
                <p style="">If you are having problems recovering your password, please contact us by email: <span style="font-weight: bold">abc@abc.com</span></p>
                <p style="">Thank you so much!</p>
                <p style="font-weight: bold">ABC Co., Ltd</p>
            </div>
        </div>
    </div>
    `
};
//# sourceMappingURL=index.js.map