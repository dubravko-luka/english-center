"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCodeHTTP = void 0;
class StatusCodeHTTP {
}
exports.StatusCodeHTTP = StatusCodeHTTP;
// 1xx Informational
StatusCodeHTTP[100] = `Continue`;
StatusCodeHTTP[101] = `Switching protocols`;
StatusCodeHTTP[102] = `Processing`;
StatusCodeHTTP[103] = `Early Hints`;
// 2xx Succesful
StatusCodeHTTP[200] = `OK`;
StatusCodeHTTP[201] = `Created`;
StatusCodeHTTP[202] = `Accepted`;
StatusCodeHTTP[203] = `Non-Authoritative Information`;
StatusCodeHTTP[204] = `No Content`;
StatusCodeHTTP[205] = `Reset Content`;
StatusCodeHTTP[206] = `Partial Content`;
StatusCodeHTTP[207] = `Multi-Status`;
StatusCodeHTTP[208] = `Already Reported`;
StatusCodeHTTP[226] = `IM Used`;
// 3xx Redirection
StatusCodeHTTP[300] = `Multiple Choices`;
StatusCodeHTTP[301] = `Moved Permanently`;
StatusCodeHTTP[302] = `Found (Previously "Moved Temporarily")`;
StatusCodeHTTP[303] = `See Other`;
StatusCodeHTTP[304] = `Not Modified`;
StatusCodeHTTP[305] = `Use Proxy`;
StatusCodeHTTP[306] = `Switch Proxy`;
StatusCodeHTTP[307] = `Temporary Redirect`;
StatusCodeHTTP[308] = `Permanent Redirect`;
// 4xx Client Error	 
StatusCodeHTTP[400] = `Bad Request`;
StatusCodeHTTP[401] = `Unauthorized`;
StatusCodeHTTP[402] = `Payment Required`;
StatusCodeHTTP[403] = `Forbidden`;
StatusCodeHTTP[404] = `Not Found`;
StatusCodeHTTP[405] = `Method Not Allowed`;
StatusCodeHTTP[406] = `Not Acceptable`;
StatusCodeHTTP[407] = `Proxy Authentication Required`;
StatusCodeHTTP[408] = `Request Timeout`;
StatusCodeHTTP[409] = `Conflict`;
StatusCodeHTTP[410] = `Gone`;
StatusCodeHTTP[411] = `Length Required`;
StatusCodeHTTP[412] = `Precondition Failed`;
StatusCodeHTTP[413] = `Payload Too Large`;
StatusCodeHTTP[414] = `URI Too Long`;
StatusCodeHTTP[415] = `Unsupported Media Type`;
StatusCodeHTTP[416] = `Range Not Satisfiable`;
StatusCodeHTTP[417] = `Expectation Failed`;
StatusCodeHTTP[418] = `I'm a Teapot`;
StatusCodeHTTP[421] = `Misdirected Request`;
StatusCodeHTTP[422] = `Unprocessable Entity`;
StatusCodeHTTP[423] = `Locked`;
StatusCodeHTTP[424] = `Failed Dependency`;
StatusCodeHTTP[425] = `Too Early`;
StatusCodeHTTP[426] = `Upgrade Required`;
StatusCodeHTTP[428] = `Precondition Required`;
StatusCodeHTTP[429] = `Too Many Requests`;
StatusCodeHTTP[431] = `Request Header Fields Too Large`;
StatusCodeHTTP[451] = `Unavailable For Legal Reasons`;
// 5xx Server Error
StatusCodeHTTP[500] = `Internal Server Error`;
StatusCodeHTTP[501] = `Not Implemented`;
StatusCodeHTTP[502] = `Bad Gateway`;
StatusCodeHTTP[503] = `Service Unavailable`;
StatusCodeHTTP[504] = `Gateway Timeout`;
StatusCodeHTTP[505] = `HTTP Version Not Supported`;
StatusCodeHTTP[506] = `Variant Also Negotiates`;
StatusCodeHTTP[507] = `Insufficient Storage`;
StatusCodeHTTP[508] = `Loop Detected`;
StatusCodeHTTP[510] = `Not Extended`;
StatusCodeHTTP[511] = `Network Authentication Required`;
//# sourceMappingURL=status-code-http.js.map