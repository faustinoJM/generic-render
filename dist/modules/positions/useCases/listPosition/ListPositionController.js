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
exports.ListPositionController = void 0;
const tsyringe_1 = require("tsyringe");
const ListPositionUseCase_1 = require("./ListPositionUseCase");
class ListPositionController {
    handle(request, response) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = (_a = request.user) === null || _a === void 0 ? void 0 : _a.id;
            const listPositionUseCase = tsyringe_1.container.resolve(ListPositionUseCase_1.ListPositionUseCase);
            const positions = yield listPositionUseCase.execute(user_id);
            return response.json(positions);
        });
    }
}
exports.ListPositionController = ListPositionController;
