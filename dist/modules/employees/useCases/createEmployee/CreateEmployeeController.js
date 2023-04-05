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
exports.CreateEmployeeController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateEmployeeUseCase_1 = require("./CreateEmployeeUseCase");
class CreateEmployeeController {
    handle(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = (_a = request.user) === null || _a === void 0 ? void 0 : _a.id;
            const { employee_id, name, dependents, salary, position_id, department_id, birth_date, place_birth, nationality, bi, marital_status, gender, address, contact, contact2, email, nuit, vacation, subsidy, department, position, start_date, employee_status, bank_name, bank_account, nib, social_security, } = request.body;
            const createEmployeeUseCase = tsyringe_1.container.resolve(CreateEmployeeUseCase_1.CreateEmployeeUseCase);
            yield createEmployeeUseCase.execute({ user_id, employee_id, name, dependents, salary, position_id, department_id, birth_date,
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
                department,
                position,
                start_date,
                employee_status,
                bank_name,
                bank_account,
                nib,
                social_security, });
            return response.status(201).send();
        });
    }
}
exports.CreateEmployeeController = CreateEmployeeController;
