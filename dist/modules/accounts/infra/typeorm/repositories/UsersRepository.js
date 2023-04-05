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
exports.UsersRepository = void 0;
const User_1 = require("../entities/User");
const typeorm_1 = require("../../../../../shared/infra/typeorm");
class UsersRepository {
    constructor() {
        this.repository = typeorm_1.AppDataSource.getRepository(User_1.User);
    }
    create({ name, password, email, id, avatar, is_admin, company_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.repository.create({
                name, password, email, id, is_admin, company_id
            });
            yield this.repository.save(user);
        });
    }
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.findOne({
                where: { name }
            });
            return user;
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.findOne({
                where: { email }
            });
            return user;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.findOne({
                where: { id }
            });
            return user;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield this.repository.find();
            return list;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
        });
    }
}
exports.UsersRepository = UsersRepository;
