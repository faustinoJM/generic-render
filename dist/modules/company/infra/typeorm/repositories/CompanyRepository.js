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
const Company_1 = __importDefault(require("../entities/Company"));
class CompanyRepository {
    constructor() {
        this.ormRepository = typeorm_1.AppDataSource.getRepository(Company_1.default);
    }
    create({ id, company_name, company_contact, company_email, company_address, company_province, company_city, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const company = this.ormRepository.create({
                id,
                company_name,
                company_contact,
                company_email,
                company_address,
                company_province,
                company_city,
            });
            yield this.ormRepository.save(company);
            return company;
        });
    }
    findByName(company_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const company = yield this.ormRepository.findOne({
                where: { company_name }
            });
            return company;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const company = yield this.ormRepository.findOne({
                where: { id }
            });
            return company;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const company = yield this.ormRepository.find();
            return company;
        });
    }
}
exports.default = CompanyRepository;
