"use strict";
const nodemailer = require("nodemailer");
const logger_1 = require("../utils/logger");
var EmailLib;
(function (EmailLib) {
    let senderEmail;
    let mailer;
    EmailLib.configure = (config) => {
        senderEmail = config.senderEmail;
        mailer = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: config.port,
            secure: config.port === 465,
            auth: {
                user: config.username,
                pass: config.password
            }
        });
    };
    EmailLib.sendEmail = async (to, subject, body, from, text) => {
        if (!mailer) {
            logger_1.default.error('[EMAIL SERVICE] Email service is not initialized');
            return false;
        }
        try {
            await mailer.sendMail({
                from: from || senderEmail,
                to,
                subject,
                text,
                html: body
            });
            logger_1.default.info(`[EMAIL SERVICE] Email is sent to (${to}) with subject (${subject}) and body (${body})`);
            return true;
        }
        catch (err) {
            logger_1.default.error(`[EMAIL SERVICE] Email sent failed: ${JSON.stringify(err)}`);
            return false;
        }
    };
})(EmailLib || (EmailLib = {}));
module.exports = EmailLib;
//# sourceMappingURL=email.js.map