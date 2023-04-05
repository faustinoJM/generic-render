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
exports.DeleteUserController = void 0;
const tsyringe_1 = require("tsyringe");
const DeleteUserUseCase_1 = require("./DeleteUserUseCase");
class DeleteUserController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            console.log("asdas");
            const deleteUserUseCase = tsyringe_1.container.resolve(DeleteUserUseCase_1.DeleteUserUseCase);
            const user = yield deleteUserUseCase.execute(id);
            return response.json(user);
        });
    }
}
exports.DeleteUserController = DeleteUserController;
