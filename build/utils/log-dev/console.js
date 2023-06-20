"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleDevelopment = void 0;
function consoleDevelopment(ip, port) {
    return `\n
    You can now view client in the browser.\n
        Local: \t\t\thttp://localhost:${port}/\n
        On You Network: \thttp://${ip}:${port}/\n
        Swagger Local: \t\thttp://localhost:${port}/api-docs\n
        On Your Network: \thttp://${ip}:${port}/api-docs\n
    Note that the development build is not optimized.\n
    To create a production build, use npm run build.
        `;
}
exports.consoleDevelopment = consoleDevelopment;
//# sourceMappingURL=console.js.map