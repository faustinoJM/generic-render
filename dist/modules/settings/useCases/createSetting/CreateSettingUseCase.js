"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.CreateSettingUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../../shared/errors/AppError"));
let CreateSettingUseCase = class CreateSettingUseCase {
    constructor(settingRepository, userRepository) {
        this.settingRepository = settingRepository;
        this.userRepository = userRepository;
    }
    execute(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findById(data.user_id);
            if (!user) {
                throw new AppError_1.default("User doesn't Exists");
            }
            const settingAlreadyExists = yield this.settingRepository.findById(user.company_id);
            if (settingAlreadyExists) {
                // Case settingAlreadyExists update
                yield this.settingRepository.create({
                    id: settingAlreadyExists.id,
                    company_id: settingAlreadyExists.company_id,
                    company_name: data.company_name,
                    company_telephone: data.company_telephone,
                    company_contact: data.company_contact,
                    company_email: data.company_email,
                    company_website: data.company_website,
                    company_fax: data.company_fax,
                    company_address: data.company_address,
                    company_province: data.company_province,
                    company_city: data.company_city,
                    postal_code: data.postal_code,
                    company_country: data.company_country,
                    company_avatar: data.company_avatar,
                    payroll_total_workdays_month: data.payroll_total_workdays_month,
                    payroll_total_workhours_day: data.payroll_total_workhours_day,
                    overtime: data.overtime,
                    absences: data.absences,
                    cash_advances: data.cash_advances,
                    bonus: data.bonus,
                    backpay: data.backpay,
                    subsidy: data.subsidy,
                });
            }
            else {
                // Case Setting doesn't Exists  create new
                data.company_id = user.company_id;
                data.payroll_total_workdays_month = (_a = data.payroll_total_workdays_month) !== null && _a !== void 0 ? _a : 26;
                data.payroll_total_workdays_month = (_b = data.payroll_total_workdays_month) !== null && _b !== void 0 ? _b : 8;
                data.overtime = (_c = data.overtime) !== null && _c !== void 0 ? _c : "true";
                data.absences = (_d = data.absences) !== null && _d !== void 0 ? _d : "true";
                data.cash_advances = (_e = data.cash_advances) !== null && _e !== void 0 ? _e : "true";
                data.bonus = (_f = data.bonus) !== null && _f !== void 0 ? _f : "true";
                data.backpay = (_g = data.backpay) !== null && _g !== void 0 ? _g : "true";
                data.subsidy = (_h = data.subsidy) !== null && _h !== void 0 ? _h : "true";
                yield this.settingRepository.create(data);
            }
        });
    }
};
CreateSettingUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("SettingsRepository")),
    __param(1, (0, tsyringe_1.inject)("UsersRepository")),
    __metadata("design:paramtypes", [Object, Object])
], CreateSettingUseCase);
exports.CreateSettingUseCase = CreateSettingUseCase;
