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
exports.EmployeesRepository = void 0;
const typeorm_1 = require("../../../../../shared/infra/typeorm");
const Employee_1 = require("../entities/Employee");
class EmployeesRepository {
    constructor() {
        this.repository = typeorm_1.AppDataSource.getRepository(Employee_1.Employee);
    }
    create({ id, company_id, employee_id, name, dependents, salary, position_id, department_id, birth_date, place_birth, nationality, bi, marital_status, gender, address, contact, contact2, email, nuit, vacation, subsidy, department, position, start_date, employee_status, bank_name, bank_account, nib, social_security, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.repository.create({
                id, company_id, employee_id, name, salary, dependents, position_id, department_id, birth_date,
                place_birth,
                nationality,
                bi,
                marital_status,
                gender,
                address,
                contact,
                contact2,
                email,
                nuit,
                vacation,
                subsidy,
                start_date,
                employee_status,
                bank_name,
                bank_account,
                nib,
                social_security,
            });
            yield this.repository.save(user);
        });
    }
    findByName(name, bi, company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.findOne({
                where: { name, bi, company_id }
            });
            return user;
        });
    }
    // async findByEmployeeId(employee_id: number): Promise<Employee | null> {
    //     const user = await this.repository.findOne({ 
    //       where: { employee_id }
    //      });
    //     return user;
    // }
    findById(id, company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.findOne({
                where: { id, company_id }
            });
            // console.log("ByyyyyyyyyyyyID:  ", user)
            return user;
        });
    }
    list(company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield this.repository.find({
                where: { company_id }
            });
            return list;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
        });
    }
}
exports.EmployeesRepository = EmployeesRepository;
