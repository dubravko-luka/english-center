"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMyRequest = void 0;
// User
const isMyRequest = (req) => {
    return req.user.id === req.params.id || req.user.id === req.query.userId;
};
exports.isMyRequest = isMyRequest;
//# sourceMappingURL=auth-control.js.map