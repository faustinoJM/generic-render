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
exports.UpdateUserUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../../shared/errors/AppError"));
let UpdateUserUseCase = class UpdateUserUseCase {
    constructor(userRepository, companyRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
    }
    execute({ id, name, email, password, company_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findById(id);
            // const companyExists = await this.companyRepository.findById(company_id)
            // if (!companyExists) {
            //   throw new AppError("Company Doesnt Exists");
            // }
            if (!user) {
                throw new AppError_1.default("User doesn't exists");
            }
            // const passwordCHash = await hash(password, 8);
            user.password = yield (0, bcryptjs_1.hash)(password, 8);
            yield this.userRepository.create({ id, name, email, password: user.password, company_id: user.company_id });
            return user;
        });
    }
};
UpdateUserUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("UsersRepository")),
    __param(1, (0, tsyringe_1.inject)("CompanyRepository")),
    __metadata("design:paramtypes", [Object, Object])
], UpdateUserUseCase);
exports.UpdateUserUseCase = UpdateUserUseCase;
