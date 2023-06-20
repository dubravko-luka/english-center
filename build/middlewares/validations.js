"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkResetPassword = exports.checkAuthInitAdmin = exports.checkAuthLogin = exports.checkEmail = exports.checkName = void 0;
const express_validator_1 = require("express-validator");
const minMax = {
    email: [10, 50],
    phone: [9, 12],
    name: [1, 20],
    password: [8, 20]
};
const isValidLetters = (text) => {
    const letters = `^[-A-Za-z0-9_-àáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũ
    ụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ ]*$`;
    return new RegExp(letters.normalize('NFC')).test(text.normalize('NFC'));
};
function checkBase(type, field, minMax = undefined) {
    const baseCheck = (0, express_validator_1.check)(field);
    if (!minMax) {
        return baseCheck;
    }
    const typeCheckFunc = `is${type === 'String' ? 'Length' : type}`;
    return baseCheck[typeCheckFunc]({ min: minMax[0] })
        .withMessage(`${field} is too ${type === 'String' ? 'short' : 'small'}`)[typeCheckFunc]({ max: minMax[1] })
        .withMessage(`${field} is too ${type === 'String' ? 'long' : 'big'}`);
}
function checkString(field, minMax = undefined) {
    return checkBase('String', field, minMax);
}
exports.checkName = [
    checkString('firstName', minMax.name).custom(value => (isValidLetters(value))).optional(),
    checkString('lastName', minMax.name).custom(value => (isValidLetters(value))).optional(),
];
exports.checkEmail = [
    (0, express_validator_1.check)('email').isEmail().exists()
];
exports.checkAuthLogin = [
    (0, express_validator_1.check)('email').isEmail().exists(),
    checkString('password', minMax.password).exists()
];
exports.checkAuthInitAdmin = [
    (0, express_validator_1.check)('email').isEmail().exists(),
    checkString('phone', minMax.phone).exists()
];
exports.checkResetPassword = [
    checkString('newpassword', minMax.password).exists(),
    checkString('repassword', minMax.password).exists()
];
//# sourceMappingURL=validations.js.map