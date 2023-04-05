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
exports.InputPayrollUseCase = void 0;
const tsyringe_1 = require("tsyringe");
const AppError_1 = __importDefault(require("../../../../shared/errors/AppError"));
let InputPayrollUseCase = class InputPayrollUseCase {
    constructor(payrollRepository, userRepository, employeeRepository, positionsRepository, departmentsRepository) {
        this.payrollRepository = payrollRepository;
        this.userRepository = userRepository;
        this.employeeRepository = employeeRepository;
        this.positionsRepository = positionsRepository;
        this.departmentsRepository = departmentsRepository;
    }
    execute({ id, user_id, overtime50, overtime100, absences, bonus, cash_advances, backpay }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findById(user_id);
            if (!user) {
                throw new AppError_1.default("User doesn't Exists");
            }
            const listEmployeesPayrolls = [];
            // let employeePayroll: ICreatePayrollTO = {}
            const payrolls = yield this.payrollRepository.list(user.company_id);
            const employees = yield this.employeeRepository.list(user.company_id);
            const positions = yield this.positionsRepository.list(user.company_id);
            const departments = yield this.departmentsRepository.list(user.company_id);
            const payroll = yield this.payrollRepository.findById(id, user.company_id);
            if (!payroll) {
                throw new AppError_1.default("Payroll doesn't exists");
            }
            if (absences >= 0)
                absences = absences; //absences = absences ?? +payroll.absences 
            else
                absences = +payroll.absences;
            if (overtime50 >= 0)
                overtime50 = overtime50;
            else
                overtime50 = +payroll.overtime50;
            if (overtime100 >= 0)
                overtime100 = overtime100;
            else
                overtime100 = +payroll.overtime100;
            if (cash_advances >= 0)
                cash_advances = cash_advances;
            else
                cash_advances = +payroll.cash_advances;
            if (backpay >= 0)
                backpay = backpay;
            else
                backpay = +payroll.backpay;
            if (bonus >= 0)
                bonus = bonus;
            else
                bonus = +payroll.bonus;
            // console.log("auauauauau"+absences)
            if (employees.length <= 0) {
                throw new AppError_1.default("Employees Doesn't Exists");
            }
            function positionName(positionId) {
                return positions.find((position) => position.id === positionId);
            }
            function departmentName(departmentId) {
                return departments.find((department) => department.id === departmentId);
            }
            const employee = employees.find(employee => employee.id === payroll.employee_uid);
            // console.log(employee)
            if (employee) {
                let base_day = calcSalarioEmDias(payroll.month_total_workdays, +employee.salary);
                let base_hour = calcSalarioPorHora(base_day, payroll.day_total_workhours);
                let total_overtime = calcTotalHorasExtras(base_hour, overtime50, overtime100);
                let total_absences = calcTotalFaltas(absences, base_day);
                // let total_income = +calcTotalSalario(+employee.salary, total_overtime!, total_absences, +cash_advances!, +backpay!, +employee.bonus).toFixed(2)
                let total_income = +calcularSalarioBruto(+employee.salary, total_overtime, total_absences, +backpay, +bonus, +employee.subsidy).toFixed(2);
                let IRPS = retornarIRPS(+total_income, employee.dependents);
                let INSS = retornarINSS(+total_income);
                let INSS_Company = retornarINSS_Company(+total_income);
                let salary_liquid = calcularSalarioLiquido(+total_income, IRPS, INSS, +cash_advances);
                // console.log(parseFloat(employee.salary).toFixed(2))
                // console.log((+employee.salary).toFixed(2))
                let employeePayroll = {
                    id: payroll.id,
                    employee_uid: employee.id,
                    employee_name: employee.name,
                    dependents: employee.dependents,
                    position_name: (_a = positionName(employee.position_id)) === null || _a === void 0 ? void 0 : _a.name,
                    departament_name: (_b = departmentName(employee.department_id)) === null || _b === void 0 ? void 0 : _b.name,
                    nib: employee.nib,
                    social_security: employee.social_security,
                    nuit: employee.nuit,
                    salary_base: employee.salary,
                    salary_liquid: salary_liquid,
                    month: payroll.month,
                    year: payroll.year,
                    total_income: total_income,
                    overtime50,
                    overtime100,
                    total_overtime: total_overtime,
                    month_total_workdays: payroll.month_total_workdays,
                    day_total_workhours: payroll.day_total_workhours,
                    base_day: base_day,
                    base_hour: base_hour,
                    absences,
                    total_absences: total_absences,
                    cash_advances: cash_advances,
                    subsidy: employee.subsidy,
                    bonus: bonus,
                    backpay: backpay,
                    irps: IRPS,
                    inss_employee: retornarINSS(total_income),
                    inss_company: INSS_Company,
                    tabelaSalario: retornarTabela(+total_income, employee.dependents),
                    payrollDemo: retornarPayrollDemo(+employee.salary, overtime50, overtime100, payroll.month_total_workdays, payroll.day_total_workhours, absences, +cash_advances, +backpay, +employee.subsidy, +bonus, +total_income, +IRPS, +INSS)
                };
                //salvar no banco de dados
                this.payrollRepository.create(employeePayroll).then().
                    catch((err) => console.log(err));
                listEmployeesPayrolls.push(employeePayroll);
                console.log(listEmployeesPayrolls);
            }
            return listEmployeesPayrolls;
        });
    }
};
InputPayrollUseCase = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)("PayrollRepository")),
    __param(1, (0, tsyringe_1.inject)("UsersRepository")),
    __param(2, (0, tsyringe_1.inject)("EmployeesRepository")),
    __param(3, (0, tsyringe_1.inject)("PositionsRepository")),
    __param(4, (0, tsyringe_1.inject)("DepartmentsRepository")),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], InputPayrollUseCase);
exports.InputPayrollUseCase = InputPayrollUseCase;
function calcularSalario(salary, dependents) {
    let coeficiente = CalcCoeficiente(salary);
    let limiteNTributavel = CalcLimiteNaoTributavel(salary);
    let AResult = salary - limiteNTributavel;
    let AxB = AResult * coeficiente;
    let valorReter = CalcValorReter(limiteNTributavel, dependents);
    let impostoPagarIRPS = calcImpostoPagarIRPS(AxB, valorReter);
    let salarioLiquido = salary - impostoPagarIRPS - (salary * 0.03);
    return salarioLiquido;
}
function retornarTabela(salary, dependents) {
    let coeficiente = CalcCoeficiente(salary);
    let limiteNTributavel = CalcLimiteNaoTributavel(salary);
    let AResult = salary - limiteNTributavel;
    let AxB = AResult * coeficiente;
    let valorReter = CalcValorReter(limiteNTributavel, dependents);
    let impostoPagarIRPS = calcImpostoPagarIRPS(AxB, valorReter);
    let salarioLiquido = calcularSalario(salary, impostoPagarIRPS);
    const salario = {
        coeficiente: coeficiente,
        limiteNTributavel: limiteNTributavel,
        AResult: AResult,
        AxB: AxB,
        valorReter: valorReter,
        impostoPagarIRPS: impostoPagarIRPS,
        salarioLiquido: salarioLiquido
    };
    return salario;
}
function retornarIRPS(salary, dependents) {
    let coeficiente = CalcCoeficiente(salary);
    let limiteNTributavel = CalcLimiteNaoTributavel(salary);
    let AResult = salary - limiteNTributavel;
    let AxB = AResult * coeficiente;
    let valorReter = CalcValorReter(limiteNTributavel, dependents);
    let impostoPagarIRPS = calcImpostoPagarIRPS(AxB, valorReter);
    return impostoPagarIRPS;
}
function retornarINSS(salary) {
    return salary * 0.03;
}
function retornarINSS_Company(salary) {
    return salary * 0.04;
}
function retornarPayrollDemo(salary_base, overtime50, overtime100, month_total_workdays, day_total_workhours, totalAbsences, cash_advances, backpay, bonus, subsidy, salary_liquid, IRPS, INSS) {
    let daySalary = calcSalarioEmDias(month_total_workdays, salary_base);
    let hourSalary = calcSalarioPorHora(daySalary, day_total_workhours);
    overtime50 = calcTotalHoraExtra50(hourSalary, overtime50);
    overtime100 = calcTotalHoraExtra100(hourSalary, overtime100);
    totalAbsences = calcTotalFaltas(totalAbsences, daySalary);
    cash_advances = cash_advances;
    subsidy = subsidy;
    let totalSalario = +calcularSalarioBruto(salary_base, overtime100 + overtime50, totalAbsences, backpay, bonus, subsidy).toFixed(2);
    salary_liquid = calcularSalario(totalSalario, IRPS);
    backpay = backpay;
    bonus = bonus;
    // IRPS = IRPS
    const salario = {
        overtime50,
        overtime100,
        month_total_workdays,
        day_total_workhours,
        totalAbsences,
        cash_advances,
        backpay,
        bonus,
        salary_liquid,
        IRPS,
        INSS
    };
    return salario;
}
function CalcCoeficiente(salary) {
    if (salary <= 20249.99)
        return 0;
    if (salary < 20750)
        return 0.1;
    if (salary < 21000)
        return 0.1;
    if (salary < 21250)
        return 0.1;
    if (salary < 21750)
        return 0.1;
    if (salary < 22250)
        return 0.1;
    if (salary < 32750)
        return 0.15;
    if (salary < 60750)
        return 0.2;
    if (salary < 144750)
        return 0.25;
    if (salary >= 144750)
        return 0.32;
    return null;
}
function CalcLimiteNaoTributavel(salary) {
    if (salary <= 20249.99)
        return 20249.99;
    if (salary < 20750)
        return 20250;
    if (salary < 21000)
        return 20750;
    if (salary < 21250)
        return 21000;
    if (salary < 21750)
        return 21250;
    if (salary < 22250)
        return 21750;
    if (salary < 32750)
        return 22250;
    if (salary < 60750)
        return 32750;
    if (salary < 144750)
        return 60750;
    if (salary >= 144750)
        return 144750;
    return null;
}
function CalcValorReter(LimiteNTributavel, dependents) {
    if (LimiteNTributavel == 20249.99)
        return 0;
    if (LimiteNTributavel == 20250)
        return 0;
    if (LimiteNTributavel == 20750) {
        if (dependents == 0)
            return 50;
        else
            return 0;
    }
    if (LimiteNTributavel == 21000) {
        if (dependents == 0)
            return 75;
        if (dependents == 1)
            return 25;
        else
            return 0;
    }
    if (LimiteNTributavel == 21250) {
        if (dependents == 0)
            return 100;
        if (dependents == 1)
            return 50;
        if (dependents == 2)
            return 25;
        else
            return 0;
    }
    if (LimiteNTributavel == 21750) {
        if (dependents == 0)
            return 150;
        if (dependents == 1)
            return 100;
        if (dependents == 2)
            return 75;
        if (dependents == 3)
            return 50;
        else
            return 0;
    }
    if (LimiteNTributavel == 22250) {
        if (dependents == 0)
            return 200;
        if (dependents == 1)
            return 150;
        if (dependents == 2)
            return 125;
        if (dependents == 3)
            return 100;
        if (dependents == 4)
            return 50;
        else
            return 50;
    }
    if (LimiteNTributavel == 32750) {
        if (dependents == 0)
            return 1775;
        if (dependents == 1)
            return 1725;
        if (dependents == 2)
            return 1700;
        if (dependents == 3)
            return 1675;
        if (dependents == 4)
            return 1625;
        else
            return 1625;
    }
    if (LimiteNTributavel == 60750) {
        if (dependents == 0)
            return 7375;
        if (dependents == 1)
            return 7325;
        if (dependents == 2)
            return 7300;
        if (dependents == 3)
            return 7275;
        if (dependents == 4)
            return 7225;
        else
            return 7225;
    }
    if (LimiteNTributavel == 144750) {
        if (dependents == 0)
            return 28375;
        if (dependents == 1)
            return 28325;
        if (dependents == 2)
            return 28300;
        if (dependents == 3)
            return 28275;
        if (dependents == 4)
            return 28225;
        else
            return 28225;
    }
    return null;
}
function calcImpostoPagarIRPS(axb, valorReter) {
    return axb + valorReter;
}
function calcSalarioEmDias(totalDiasTrabalhoMes, salario_base) {
    return salario_base / totalDiasTrabalhoMes;
}
function calcSalarioPorHora(salarioEmDias, totalHorasTrabalhoDia) {
    return salarioEmDias / totalHorasTrabalhoDia;
}
function calcTotalHoraExtra50(salarioPorHora, horasExtras50) {
    return horasExtras50 * salarioPorHora * 1.5;
}
function calcTotalHoraExtra100(salarioPorHora, horasExtras100) {
    return horasExtras100 * salarioPorHora * 2;
}
function calcTotalHorasExtras(salarioPorHora, horasExtras50, horasExtras100) {
    horasExtras50 = horasExtras50 * salarioPorHora * 1.5;
    horasExtras100 = horasExtras100 * salarioPorHora * 2;
    return horasExtras50 + horasExtras100;
}
function calcTotalFaltas(faltas, salarioEmDias) {
    return faltas * salarioEmDias;
}
function calcularSalarioBruto(salario_base, totalHorasExtras, totalDescontoFaltas, totalRetroativos, bonus, subsidio) {
    return salario_base + totalHorasExtras - totalDescontoFaltas + totalRetroativos + bonus + subsidio;
}
function calcularSalarioLiquido(totalSalario, IRPS, INSS_Employee, totalAdiantamento) {
    return totalSalario - IRPS - INSS_Employee - totalAdiantamento;
}
