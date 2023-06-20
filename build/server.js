"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const app_1 = require("./app");
const logger_1 = require("./utils/logger");
const console_1 = require("./utils/log-dev/console");
const network = require("network");
const PORT = process.env.PORT || config_1.default.port;
const server = app_1.default.listen(PORT, async () => {
    await network.get_private_ip((err, ip) => {
        // console.clear()
        logger_1.default.info((0, console_1.consoleDevelopment)(ip, config_1.default.port));
    });
});
//# sourceMappingURL=server.js.map