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
exports.SingleEmployeeUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../../shared/errors/AppError"));
let SingleEmployeeUseCase = class SingleEmployeeUseCase {
    constructor(employeeRepository, userRepository, positionRepository, departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.userRepository = userRepository;
        this.positionRepository = positionRepository;
        this.departmentRepository = departmentRepository;
    }
    execute(id, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findById(user_id);
            if (!user) {
                throw new AppError_1.default("User doesn't Exists");
            }
            const employee = yield this.employeeRepository.findById(id, user.company_id);
            if (!employee) {
                throw new AppError_1.default("Employee doesn't exists");
            }
            const position = yield this.positionRepository.findById(employee.position_id);
            const department = yield this.departmentRepository.findById(employee.department_id);
            employee.position_id ? employee.position_id = position === null || position === void 0 ? void 0 : position.name : "";
            employee.department_id ? employee.department_id = department === null || department === void 0 ? void 0 : department.name : "";
            return employee;
        });
    }
};
SingleEmployeeUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("EmployeesRepository")),
    __param(1, (0, tsyringe_1.inject)("UsersRepository")),
    __param(2, (0, tsyringe_1.inject)("PositionsRepository")),
    __param(3, (0, tsyringe_1.inject)("DepartmentsRepository")),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], SingleEmployeeUseCase);
exports.SingleEmployeeUseCase = SingleEmployeeUseCase;
