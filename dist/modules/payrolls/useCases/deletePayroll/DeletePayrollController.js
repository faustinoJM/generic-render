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
exports.DeletePayrollController = void 0;
const tsyringe_1 = require("tsyringe");
const DeletePayrollUseCase_1 = require("./DeletePayrollUseCase");
class DeletePayrollController {
    handle(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = (_a = request.user) === null || _a === void 0 ? void 0 : _a.id;
            // const id = request.params.id
            const { year, month } = request.body;
            const deletePayrollUseCase = tsyringe_1.container.resolve(DeletePayrollUseCase_1.DeletePayrollUseCase);
            const employee = yield deletePayrollUseCase.execute(year, month, user_id);
            return response.status(200).json(employee);
        });
    }
}
exports.DeletePayrollController = DeletePayrollController;
