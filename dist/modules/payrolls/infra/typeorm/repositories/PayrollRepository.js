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
exports.PayrollRepository = void 0;
const typeorm_1 = require("../../../../../shared/infra/typeorm");
const Payroll_1 = require("../entities/Payroll");
class PayrollRepository {
    constructor() {
        this.repository = typeorm_1.AppDataSource.getRepository(Payroll_1.Payroll);
    }
    create({ id, employee_uid, company_id, employee_name, dependents, position_name, departament_name, nib, social_security, nuit, salary_base, salary_liquid, month, year, overtime50, overtime100, total_overtime, month_total_workdays, day_total_workhours, base_day, base_hour, absences, total_absences, cash_advances, backpay, subsidy, bonus, irps, inss_employee, inss_company, total_income }) {
        return __awaiter(this, void 0, void 0, function* () {
            const payroll = this.repository.create({
                id,
                company_id,
                employee_uid,
                employee_name,
                position_name,
                dependents,
                departament_name,
                nib,
                social_security,
                nuit,
                salary_base,
                salary_liquid,
                month,
                year,
                overtime50,
                overtime100,
                total_overtime,
                month_total_workdays,
                day_total_workhours,
                base_day,
                base_hour,
                total_absences,
                absences,
                cash_advances,
                backpay,
                subsidy,
                bonus,
                irps,
                inss_employee,
                inss_company,
                total_income
            });
            yield this.repository.save(payroll);
        });
    }
    findByEmployeeId(employee_uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const payroll = yield this.repository.findOne({
                where: { employee_uid }
            });
            return payroll;
        });
    }
    findById(id, company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payroll = yield this.repository.findOne({
                where: { id, company_id }
            });
            // console.log("ByyyyyyyyyyyyID:  ", payroll)
            return payroll;
        });
    }
    findByMouth(month, company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payroll = yield this.repository.findOne({
                where: { month, company_id }
            });
            return payroll;
        });
    }
    findByYear(year, company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payroll = yield this.repository.findOne({
                where: { year, company_id }
            });
            return payroll;
        });
    }
    findAllByYear(year, company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payrolls = yield this.repository.find({
                where: { year, company_id }
            });
            return payrolls;
        });
    }
    findAllByMonth(month, company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payrolls = yield this.repository.find({
                where: { month, company_id }
            });
            return payrolls;
        });
    }
    findAllByYearAndByMonth(year, month, company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const payrolls = yield this.repository.find({
                where: { month, year, company_id }
            });
            return payrolls;
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
    deleteAllByYearAndMonth(year, month, company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete({ year: year, month: month, company_id: company_id });
        });
    }
}
exports.PayrollRepository = PayrollRepository;
