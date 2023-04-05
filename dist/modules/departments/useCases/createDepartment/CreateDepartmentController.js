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
exports.CreateDepartmentController = void 0;
const tsyringe_1 = require("tsyringe");
const CreateDepartmentUseCase_1 = require("./CreateDepartmentUseCase");
class CreateDepartmentController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = request.user.id;
            const { name } = request.body;
            const createDepartmentUseCase = tsyringe_1.container.resolve(CreateDepartmentUseCase_1.CreateDepartmentUseCase);
            yield createDepartmentUseCase.execute({ name, user_id });
            return response.status(201).send();
        });
    }
}
exports.CreateDepartmentController = CreateDepartmentController;
