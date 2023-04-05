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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserUseCase = void 0;
const tsyringe_1 = require("tsyringe");
// interface IRequest {
//     name: string;
//     username: string;
//     password: string;
//     email: string;
//     driver_licence: string;
// }
let ListUserUseCase = class ListUserUseCase {
    constructor(userRepository, companyRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const companies = yield this.companyRepository.list();
            const users = yield this.userRepository.list();
            users.forEach(user => {
                var _a;
                user.company_name = (_a = companies === null || companies === void 0 ? void 0 : companies.find((company) => company.id === user.company_id)) === null || _a === void 0 ? void 0 : _a.company_name;
            });
            return users;
        });
    }
};
ListUserUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("UsersRepository")),
    __param(1, (0, tsyringe_1.inject)("CompanyRepository")),
    __metadata("design:paramtypes", [Object, Object])
], ListUserUseCase);
exports.ListUserUseCase = ListUserUseCase;
