"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("../../container");
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("../typeorm");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((err, request, response, next) => {
    if (err instanceof AppError_1.default) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    }
    console.log(err);
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});
app.get("/", (request, response) => {
    return response.json({ message: "hello world" });
});
const server = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield typeorm_1.AppDataSource.initialize();
        console.log("database initialize");
        app.listen(process.env.PORT || 3333);
        console.log("server is listening On port:", 3333);
    }
    catch (err) {
        console.log(err);
    }
});
server();
