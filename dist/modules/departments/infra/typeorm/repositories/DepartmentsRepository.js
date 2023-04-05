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
const typeorm_1 = require("../../../../../shared/infra/typeorm");
const Department_1 = __importDefault(require("../entities/Department"));
class DepartmentsRepository {
    constructor() {
        this.ormRepository = typeorm_1.AppDataSource.getRepository(Department_1.default);
    }
    create({ id, company_id, department_id, name }) {
        return __awaiter(this, void 0, void 0, function* () {
            const appointment = this.ormRepository.create({
                id,
                company_id,
                department_id,
                name
            });
            yield this.ormRepository.save(appointment);
            return appointment;
        });
    }
    findByName(name, company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findDepartment = yield this.ormRepository.findOne({
                where: { name, company_id }
            });
            return findDepartment;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const findDepartment = yield this.ormRepository.findOne({
                where: { id }
            });
            return findDepartment;
        });
    }
    list(company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield this.ormRepository.find({
                where: { company_id }
            });
            return list;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ormRepository.delete(id);
        });
    }
}
exports.default = DepartmentsRepository;
