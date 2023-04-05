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
exports.UpdatePositionController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdatePositionUseCase_1 = require("./UpdatePositionUseCase");
class UpdatePositionController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = request.body;
            const id = request.params.id;
            const updatePositionUseCase = tsyringe_1.container.resolve(UpdatePositionUseCase_1.UpdatePositionUseCase);
            const position = yield updatePositionUseCase.execute({ id, name });
            return response.status(204).json(position);
        });
    }
}
exports.UpdatePositionController = UpdatePositionController;
