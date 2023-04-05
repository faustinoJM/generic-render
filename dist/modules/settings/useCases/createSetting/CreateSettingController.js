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
exports.CreateSettingController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateSettingUseCase_1 = require("./CreateSettingUseCase");
class CreateSettingController {
    handle(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = (_a = request.user) === null || _a === void 0 ? void 0 : _a.id;
            const { company_name, company_telephone, company_contact, company_email, company_website, company_fax, company_address, company_province, company_city, postal_code, company_country, company_avatar, payroll_total_workdays_month, payroll_total_workhours_day, overtime, absences, cash_advances, bonus, backpay, subsidy, flag } = request.body;
            const createSettingUseCase = tsyringe_1.container.resolve(CreateSettingUseCase_1.CreateSettingUseCase);
            yield createSettingUseCase.execute({
                user_id,
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
            return response.status(201).send();
        });
    }
}
exports.CreateSettingController = CreateSettingController;
