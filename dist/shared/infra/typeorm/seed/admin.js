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
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
const uuid_1 = require("uuid");
const __1 = require("..");
function create() {
    return __awaiter(this, void 0, void 0, function* () {
        //createConnection;
        const connection = yield __1.AppDataSource.initialize();
        const id = (0, uuid_1.v4)();
        const password = yield (0, bcryptjs_1.hash)("admin", 8);
        yield connection.query(`INSERT INTO USERS(id, email, password, name, "isAdmin", driver_licence, created_at)  
        values('${id}',  'maumauxy94@gmail.com', '${password}', 'admin', true, 'sne' ,now())`);
        // await connection.query(
        //     "INSERT INTO USERS(id, name, email, password, is_admin, driver_licence, created_at) "+
        //     " values('"+id+"', 'HotFire', 'admin@rental.com', '"+password+"', true, Sne ,now())"
        // )
        yield connection.close;
    });
}
create().then(() => console.log("User Admin Created"));
