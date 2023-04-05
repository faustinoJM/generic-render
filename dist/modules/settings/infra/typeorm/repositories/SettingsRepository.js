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
const Setting_1 = __importDefault(require("../entities/Setting"));
class SettingsRepository {
    constructor() {
        this.ormRepository = typeorm_1.AppDataSource.getRepository(Setting_1.default);
    }
    create({ id, company_id, company_name, company_telephone, company_contact, company_email, company_website, company_fax, company_address, company_province, company_city, postal_code, company_country, company_avatar, payroll_total_workdays_month, payroll_total_workhours_day, overtime, absences, cash_advances, bonus, backpay, subsidy, flag }) {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = this.ormRepository.create({
                id,
                company_id,
                company_name,
                company_telephone,
                company_contact,
                company_email,
                company_website,
                company_fax,
                company_address,
                company_province,
                company_city,
                postal_code,
                company_country,
                company_avatar,
                payroll_total_workdays_month,
                payroll_total_workhours_day,
                overtime,
                absences,
                cash_advances,
                bonus,
                backpay,
                subsidy, flag
            });
            yield this.ormRepository.save(setting);
            return setting;
        });
    }
    findByName(company_name, company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield this.ormRepository.findOne({
                where: { company_name, company_id }
            });
            return setting;
        });
    }
    findById(company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const setting = yield this.ormRepository.findOne({
                where: { company_id }
            });
            return setting;
        });
    }
    list(company_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const settings = yield this.ormRepository.findOne({
                where: { company_id }
            });
            return settings;
        });
    }
}
exports.default = SettingsRepository;
