"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../../../modules/accounts/infra/typeorm/entities/User");
const UserTokens_1 = require("../../../modules/accounts/infra/typeorm/entities/UserTokens");
const Company_1 = __importDefault(require("../../../modules/company/infra/typeorm/entities/Company"));
const Department_1 = __importDefault(require("../../../modules/departments/infra/typeorm/entities/Department"));
const Employee_1 = require("../../../modules/employees/infra/typeorm/entities/Employee");
const Payroll_1 = require("../../../modules/payrolls/infra/typeorm/entities/Payroll");
const Position_1 = __importDefault(require("../../../modules/positions/infra/typeorm/entities/Position"));
const Setting_1 = __importDefault(require("../../../modules/settings/infra/typeorm/entities/Setting"));
const options = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "payroll_single",
    // url: "postgres://jhkdfoxm:q_zM2AjeX07zyuWXgCpRLLEMxnX3b-v0@raja.db.elephantsql.com/jhkdfoxm",
    // url: "postgres://elint:uYQvjaysQl0dhEvkcUj8Gxe1p8jsMTLD@dpg-cgj809mbb6mo06k1h0rg-a.oregon-postgres.render.com/payroll_render",
    // url: "postgres://pkwqfmrt:Jag1KJ8Ug_qwj79XtDoq8pTLQlcNHV9k@babar.db.elephantsql.com/pkwqfmrt", 
    logging: true,
    synchronize: false,
    entities: [
        Company_1.default, User_1.User, UserTokens_1.UserTokens, Employee_1.Employee, Department_1.default, Position_1.default, Payroll_1.Payroll, Setting_1.default
        // "./src/modules/users/infra/typeorm/entities/.ts",
        // "./src/modules/appointments/infra/typeorm/entities/.ts"
    ],
    subscribers: [
        "subscriber/*.js"
    ],
    entitySchemas: [
        "schema/*.json"
    ],
    migrations: [
        // "./src/shared/infra/typeorm/migrations/*.ts"
        `${__dirname}/**/migrations/*.{ts,js}`
    ],
    cli: {
        entitiesDir: "entity",
        migrationsDir: "src/database",
        subscribersDir: "subscriber"
    }
};
exports.AppDataSource = new typeorm_1.DataSource(options);
