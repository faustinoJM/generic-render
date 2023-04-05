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
exports.CreatePayrollController = void 0;
const tsyringe_1 = require("tsyringe");
const CreatePayrollUseCase_1 = require("./CreatePayrollUseCase");
class CreatePayrollController {
    handle(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = (_a = request.user) === null || _a === void 0 ? void 0 : _a.id;
            const { month, year, } = request.body;
            const createPayrollUseCase = tsyringe_1.container.resolve(CreatePayrollUseCase_1.CreatePayrollUseCase);
            const payrolls = yield createPayrollUseCase.execute(month, year, user_id);
            return response.status(201).json(payrolls);
        });
    }
}
exports.CreatePayrollController = CreatePayrollController;
