"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInit = void 0;
const constants_1 = require("../constants");
const role_model_1 = require("../models/role.model");
const admin_model_1 = require("../models/admin.model");
const dbInit = async () => {
    try {
        const dbInitAdmin = await role_model_1.Role.find();
        if (dbInitAdmin.length === 0) {
            for (let i = 0; i < constants_1.defaultRoles.length; i++) {
                await new role_model_1.Role({ roleName: constants_1.defaultRoles[i] }).save();
            }
            const roleAdminId = await role_model_1.Role.findOne({ roleName: constants_1.roleAdmin });
            for (let i = 0; i < constants_1.AdminDefault.length; i++) {
                await new admin_model_1.Admin({
                    ...constants_1.AdminDefault[i],
                    role: roleAdminId?._id
                }).save();
            }
        }
    }
    catch (e) {
        console.log(e);
    }
};
exports.dbInit = dbInit;
//# sourceMappingURL=db_init.js.map