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
exports.SinglePayrollUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../../shared/errors/AppError"));
let SinglePayrollUseCase = class SinglePayrollUseCase {
    constructor(payrollRepository, userRepository, employeeRepository, positionsRepository, departmentsRepository) {
        this.payrollRepository = payrollRepository;
        this.userRepository = userRepository;
        this.employeeRepository = employeeRepository;
        this.positionsRepository = positionsRepository;
        this.departmentsRepository = departmentsRepository;
    }
    execute(id, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findById(user_id);
            if (!user) {
                throw new AppError_1.default("User doesn't Exists");
            }
            const payroll = yield this.payrollRepository.findById(id, user.company_id);
            if (!payroll) {
                throw new AppError_1.default("Payroll doesn't exists");
            }
            const employee = yield this.employeeRepository.findById(payroll.employee_uid, user.company_id);
            if (employee) {
                const positionName = yield this.positionsRepository.findById(employee.position_id);
                const departmentName = yield this.departmentsRepository.findById(employee.department_id);
                let employeePayroll = {
                    id: payroll.id,
                    employee_uid: employee.id,
                    employee_id: employee.employee_id,
                    employee_name: employee.name,
                    dependents: employee.dependents,
                    position_name: positionName === null || positionName === void 0 ? void 0 : positionName.name,
                    departament_name: departmentName === null || departmentName === void 0 ? void 0 : departmentName.name,
                    nib: employee.nib,
                    nuit: employee.nuit,
                    social_security: employee.social_security,
                    vacation: employee.vacation,
                    salary_base: payroll.salary_base,
                    salary_liquid: payroll.salary_liquid,
                    month: payroll.month,
                    year: payroll.year,
                    total_income: payroll.total_income,
                    overtime50: payroll.overtime50,
                    totalOvertime50: payroll.overtime50 * (+payroll.base_hour) * 1.5,
                    overtime100: payroll.overtime100,
                    totalOvertime100: payroll.overtime100 * (+payroll.base_hour) * 2,
                    total_overtime: payroll.total_overtime,
                    month_total_workdays: payroll.month_total_workdays,
                    day_total_workhours: payroll.day_total_workhours,
                    base_day: payroll.base_day,
                    base_hour: payroll.base_hour,
                    absences: payroll.absences,
                    total_absences: payroll.total_absences,
                    cash_advances: payroll.cash_advances,
                    subsidy: payroll.subsidy,
                    bonus: payroll.bonus,
                    backpay: payroll.backpay,
                    irps: payroll.irps,
                    inss_employee: payroll.inss_employee,
                    inss_company: payroll.inss_company,
                    tabelaSalario: payroll.tabelaSalario,
                    payrollDemo: payroll.payrollDemo
                };
                return employeePayroll;
            }
            else {
                let employeePayroll = {
                    id: payroll.id,
                    employee_uid: null,
                    employee_id: null,
                    employee_name: payroll.employee_name,
                    dependents: payroll.dependents,
                    position_name: payroll.position_name,
                    departament_name: payroll.departament_name,
                    nib: payroll.nib,
                    nuit: payroll.nuit,
                    social_security: payroll.nuit,
                    vacation: 0,
                    salary_base: payroll.salary_base,
                    salary_liquid: payroll.salary_liquid,
                    month: payroll.month,
                    year: payroll.year,
                    total_income: payroll.total_income,
                    overtime50: payroll.overtime50,
                    totalOvertime50: payroll.overtime50 * (+payroll.base_hour) * 1.5,
                    overtime100: payroll.overtime100,
                    totalOvertime100: payroll.overtime100 * (+payroll.base_hour) * 2,
                    total_overtime: payroll.total_overtime,
                    month_total_workdays: payroll.month_total_workdays,
                    day_total_workhours: payroll.day_total_workhours,
                    base_day: payroll.base_day,
                    base_hour: payroll.base_hour,
                    absences: payroll.absences,
                    total_absences: payroll.total_absences,
                    cash_advances: payroll.cash_advances,
                    subsidy: payroll.subsidy,
                    bonus: payroll.bonus,
                    backpay: payroll.backpay,
                    irps: payroll.irps,
                    inss_employee: payroll.inss_employee,
                    inss_company: payroll.inss_company,
                    tabelaSalario: payroll.tabelaSalario,
                    payrollDemo: payroll.payrollDemo
                };
                return employeePayroll;
            }
            // horasExtras50 = horasExtras50 * salarioPorHora * 1.5
            // horasExtras100 = horasExtras100 * salarioPorHora * 2
        });
    }
};
SinglePayrollUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("PayrollRepository")),
    __param(1, (0, tsyringe_1.inject)("UsersRepository")),
    __param(2, (0, tsyringe_1.inject)("EmployeesRepository")),
    __param(3, (0, tsyringe_1.inject)("PositionsRepository")),
    __param(4, (0, tsyringe_1.inject)("DepartmentsRepository")),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], SinglePayrollUseCase);
exports.SinglePayrollUseCase = SinglePayrollUseCase;
