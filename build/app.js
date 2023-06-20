"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("./config");
const expressSwaggerGenerator = require("express-swagger-generator");
const helmet = require("helmet");
const cors = require("cors");
const DatabaseLib = require("./modules/db");
const handling_error_1 = require("./middlewares/handling-error");
const v1_1 = require("./routes/v1");
const EmailLib = require("./modules/email");
const parse_request_1 = require("./middlewares/parse-request");
const RedisLib = require("./modules/redis");
const JWTLib = require("./modules/jwt");
const dotenv = require('dotenv');
dotenv.config();
// import * as Websocket from "./modules/websocket";
class App {
    constructor() {
        this.app = express();
        this.config();
        this.moduleSetup();
    }
    config() {
        this.swaggerGenerator();
        this.app.use(parse_request_1.parseRequestMiddleware);
        this.app.use(helmet());
        this.app.use(express.json({ limit: "10mb" }));
        this.app.use(express.urlencoded({ extended: false }));
        if (process.env.NODE_ENV !== "production") {
            this.app.use(cors({
                origin: [
                    'http://localhost:3000',
                    'http://localhost:3001',
                    'http://localhost:3002',
                ]
            }));
        }
        else {
            this.app.use(cors({
                origin: [
                    'https://review-phim.vercel.app',
                ]
            }));
        }
        this.app.use(express.static("src"));
        this.app.get("/healthcheck", (req, res) => {
            res.sendStatus(200);
        });
        this.app.use("/v1", v1_1.default);
        this.app.use((req, res, next) => {
            const err = new Error('Not Found');
            next(err);
        });
        this.app.use(handling_error_1.handlingError);
        this.app.set("trust proxy", true);
        this.handleRuntimeError();
    }
    swaggerGenerator() {
        if (process.env.NODE_ENV !== "production") {
            const expressSwagger = expressSwaggerGenerator(this.app);
            const options = {
                swaggerDefinition: {
                    info: {
                        description: "API document for admin server",
                        title: "Admin API",
                        version: "1.0.0",
                    },
                    host: `localhost:${config_1.default.port}`,
                    basePath: "/v1",
                    produces: ["application/json"],
                    consumes: ["application/json"],
                    schemes: ['http', 'https'],
                    securityDefinitions: {
                        JWT: {
                            type: 'apiKey',
                            in: 'header',
                            name: 'Authorization',
                            description: 'Token authenticate'
                        },
                    },
                },
                basedir: __dirname,
                files: ["./**/*.ts"],
            };
            expressSwagger(options);
        }
    }
    handleRuntimeError() {
        process.on("unhandledRejection", (err, p) => {
            const error = err instanceof Error
                ? {
                    errName: err.name,
                    errMessage: err.message,
                    ...(err.stack && { errStack: err.stack }),
                }
                : err;
            console.error(`Unhandled Rejection at: Promise ${JSON.stringify(p)}, reason: ${JSON.stringify(error)}`);
        });
        process.on("uncaughtExeption", (err, p) => {
            const error = err instanceof Error
                ? {
                    errName: err.name,
                    errMessage: err.message,
                    ...(err.stack && { errStack: err.stack }),
                }
                : err;
            console.error(`uncaught Exeption at: Promise ${JSON.stringify(p)}, reason: ${JSON.stringify(error)}`);
        });
    }
    moduleSetup() {
        // Websocket.configure()
        DatabaseLib.configure(config_1.default.databaseConfig);
        DatabaseLib.initDb();
        JWTLib.configure(config_1.default.jwtConfig);
        RedisLib.configure(config_1.default.redisConfig);
        EmailLib.configure(config_1.default.emailConfig);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map