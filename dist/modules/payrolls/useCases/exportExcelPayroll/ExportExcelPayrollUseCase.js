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
exports.ExportExcelPayrollUseCase = void 0;
const tsyringe_1 = require("tsyringe");
let ExportExcelPayrollUseCase = class ExportExcelPayrollUseCase {
    constructor(payrollRepository, employeeRepository, positionsRepository, departmentsRepository) {
        this.payrollRepository = payrollRepository;
        this.employeeRepository = employeeRepository;
        this.positionsRepository = positionsRepository;
        this.departmentsRepository = departmentsRepository;
    }
    execute(year, month) {
        return __awaiter(this, void 0, void 0, function* () {
            //     const payrolls = await this.payrollRepository.list()
            //     const employees = await this.employeeRepository.list();
            //     const positions = await this.positionsRepository.list("")
            //     const departments = await this.departmentsRepository.list("") 
            //     const listEmployeesPayrolls: ICreatePayrollDTO2[] = [];
            //     let payrolls2: Payroll[] = []
            //     function positionName(positionId: string) {
            //       return positions.find((position) => position.id === positionId)
            //     }
            //     function departmentName(departmentId: string) {
            //       return departments.find((department) => department.id === departmentId)
            //     }
            //     if(month && year && payrolls) {
            //       payrolls2 = payrolls.filter(payroll => payroll.month === month && payroll.year === year)
            //       // return payrolls2;
            //     } else if(!month && year && payrolls) {
            //       payrolls2 = payrolls.filter(payroll => payroll.year === year)
            //       // return payrolls2
            //     } else if(month && !year && payrolls) {
            //       payrolls2 = payrolls.filter(payroll => payroll.month === month)
            //       // return payrolls2
            //     } else {
            //       payrolls2 = payrolls
            //     }
            //     payrolls2.map((payroll) =>{
            //       const employee =  employees.find(employee => employee.id === payroll.employee_uid)
            //       // console.log(employee)
            //       if(!employee) {
            //         throw new AppError("Employee doesn exists")
            //       }
            //      let employeePayroll: ICreatePayrollDTO2 = {
            //         id: payroll.id,
            //         employee_uid: employee.id,
            //         employee_id: employee.employee_id,
            //         employee_name: employee.name,
            //         dependents: employee.dependents,
            //         position_name: positionName(employee.position_id!)?.name,
            //         departament_name: departmentName(employee.department_id!)?.name,
            //         salary_base: payroll.salary_base, 
            //         salary_liquid: payroll.salary_liquid,
            //         month: payroll.month,
            //         year: payroll.year,
            //         total_income: payroll.total_income ,
            //         overtime50: payroll.overtime50,
            //         overtime100: payroll.overtime100,
            //         total_overtime: payroll.total_overtime,
            //         month_total_workdays: payroll.month_total_workdays,
            //         day_total_workhours: payroll.day_total_workhours,
            //         base_day: payroll.base_day,
            //         base_hour: payroll.base_hour,
            //         absences: payroll.absences,
            //         total_absences: payroll.total_absences as any,
            //         cash_advances: payroll.cash_advances,
            //         bonus: payroll.bonus,
            //         backpay: payroll.backpay,
            //         irps: payroll.irps,
            //         inss_employee: payroll.inss_employee,
            //         inss_company: payroll.inss_company,
            //         tabelaSalario: payroll.tabelaSalario,
            //         payrollDemo: payroll.payrollDemo
            //       };
            //       listEmployeesPayrolls.push(employeePayroll)
            //     })
            //     return listEmployeesPayrolls
            //     // return payrolls
        });
    }
};
ExportExcelPayrollUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("PayrollRepository")),
    __param(1, (0, tsyringe_1.inject)("EmployeesRepository")),
    __param(2, (0, tsyringe_1.inject)("PositionsRepository")),
    __param(3, (0, tsyringe_1.inject)("DepartmentsRepository")),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], ExportExcelPayrollUseCase);
exports.ExportExcelPayrollUseCase = ExportExcelPayrollUseCase;
