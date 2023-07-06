import { inject, injectable } from "tsyringe";
import AppError  from "../../../../shared/errors/AppError";
import { IEmployeesRepository } from "../../../employees/repositories/IEmployeesRepository";
import IPositionsRepository from "../../../positions/repositories/IPositionsRepository";
import IDepartmentsRepository from "../../../departments/repositories/IDepartmentsRepository";
import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";
import { ICreatePayrollEmployeeDTO } from "../../dtos/ICreatePayrollEmployeeDTO";
import { IPayrollEmployeeRepository } from "../../repositories/IPayrollEmployeeRepository";
import { IPayrollRepository } from "../../../payrolls/repositories/IPayrollRepository";
import ISettingRepository from "../../../settings/repositories/ISettingRepository";
import { NumValues } from "aws-sdk/clients/amplifyuibuilder";
import { IDateProvider } from "../../../../shared/container/provider/DateProvider/IDateProvider";
import { Employee } from "../../../employees/infra/typeorm/entities/Employee";
import { ICreateEmployeeDTO } from "../../../employees/dtos/ICreateEmployeeDTO";

export interface ISalario {
  salarioLiquido?: number;
  coeficiente: number;
  limiteNTributavel: number ;
  AResult?: number;
  AxB?: number;
  valorReter?: number;
  impostoPagarIRPS?: number;
}

export interface IPayrollDemo {
  overtime50?: number;
  overtime100?: number;
  month_total_workdays?: number;
  day_total_workhours?: number;
  totalAbsences?: number;
  cash_advances?: number;
  backpay?: number;
  bonus?: number;
  total_income?: number;
  salary_liquid?: number;
  IRPS?: number;
  INSS?: number
}

interface IRequestList {
  id?: string;
  user_id?: string;
  employee_id?: number;
  name?: string;
  dependents?: number;
  positionName?: string | null;
  departmentsName?: string | null;
  salary_base?: number | string;
  salary_liquid?: number | string;
  month?: string;
  year?: number;
  overtime50?: number;
  overtime100?: number;
  month_total_workdays?: number;
  day_total_workhours?: number;
  absences?: number;
  cash_advances?: number;
  backpay?: number;
  bonus?: number;
  IRPS?: number | string;
  INSS?: number | string;
  total_income?: number | string
  tabelaSalario?: ISalario;
  payrollDemo?: IPayrollDemo;
  syndicate_employee: number;
  ipa_employee?: number
  subsidy?: number;
  subsidy_transport?: number;
  subsidy_food?: number;
  subsidy_residence?: number;
  subsidy_medical?: number;
  subsidy_vacation?: number;
  subsidy_shift?: number;
  subsidy_night?: number;
  subsidy_risk?: number;
  subsidy_attendance?: number;
  subsidy_performance?: number;
  subsidy_leadership?: number;
  subsidy_commission?: number;
  salary_thirteenth?: number;
  salary_fourteenth?: number,
  inss_event?: number;
  inss_event_date?: Date;
  employee_loan?: number;
  loan_deduction?: number;
}


@injectable()
class InputPayrollEmployeeUseCase {

    constructor(@inject("PayrollRepository")
        private payrollRepository: IPayrollRepository,

        @inject("PayrollEmployeeRepository")
        private payrollEmployeeRepository: IPayrollEmployeeRepository,

        @inject("UsersRepository")
        private userRepository: IUsersRepository,
      
        @inject("EmployeesRepository")
        private employeeRepository: IEmployeesRepository,
        
        @inject("PositionsRepository")
        private positionsRepository: IPositionsRepository,

        @inject("DepartmentsRepository")
        private departmentsRepository: IDepartmentsRepository,

        @inject("SettingsRepository")
        private settingsRepository: ISettingRepository,
        ) {}

    async execute({ id, user_id, overtime50, overtime100,
                    absences, bonus, cash_advances, backpay,
                    subsidy,
                    subsidy_transport,
                    subsidy_food,
                    subsidy_residence,
                    subsidy_medical,
                    subsidy_vacation,
                    subsidy_shift,
                    subsidy_night,
                    subsidy_risk,
                    subsidy_attendance,
                    subsidy_performance,
                    subsidy_leadership,
                    subsidy_commission,
                    salary_thirteenth,
                    salary_fourteenth,
                    ipa_employee,
                    inss_event,
                    inss_event_date,
                    employee_loan,
                    loan_deduction,
                    }: IRequestList) {
                      
 


        const user = await this.userRepository.findById(user_id as any)

        if (!user) {
          throw new  AppError("User Auth doesn't Exists")
        }

        const listEmployeesPayrolls: ICreatePayrollEmployeeDTO[] = [];
        // let employeePayroll: ICreatePayrollTO = {}
        const payrolls = await this.payrollRepository.list(user.company_id)
        const employees = await this.employeeRepository.list(user.company_id);
        const positions = await this.positionsRepository.list(user.company_id)
        const departments = await this.departmentsRepository.list(user.company_id)  
        const settings = await this.settingsRepository.list(user.company_id,)
        const payrollEmployee = await this.payrollEmployeeRepository.findById(id as string, user.company_id);

        if (!payrollEmployee) {
          throw new AppError("Payroll doesn't exists")
        }

        const payroll = payrolls.find(data => data.id === payrollEmployee.payroll_id)

        if (!payroll) {
          throw new AppError("Payroll doesn't exists")
        }

        if (payroll.payroll_status === "true")
          throw new AppError("Payroll is Locked")

        if (absences! >= 0 && absences! <= 30)
          absences = absences //absences = absences ?? +payroll.absences 
        else
          absences = +payrollEmployee.absences 
        if (overtime50! >= 0) 
          overtime50 = overtime50
        else 
          overtime50 = +payrollEmployee.overtime50
        if (overtime100! >= 0) 
          overtime100 = overtime100
        else 
          overtime100 = +payrollEmployee.overtime100
        if (cash_advances! >= 0) 
          cash_advances = cash_advances
        else 
          cash_advances = +payrollEmployee.cash_advances
        if (backpay! >= 0) 
          backpay = backpay
        else 
          backpay = +payrollEmployee.backpay
        if (bonus! >= 0) 
          bonus = bonus
        else 
          bonus = +payrollEmployee.bonus
        if (payrollEmployee.absences === 0 && (+inss_event!) === 10)
          inss_event = payrollEmployee.inss_event
        if (payrollEmployee.absences > 0 && (+inss_event!) === 0)
          inss_event = payrollEmployee.inss_event
        if (absences! > 0 && payrollEmployee.inss_event === 0)
          inss_event = 10
        if (inss_event! < 0 || inss_event! > 10)
          inss_event = payrollEmployee.inss_event


        subsidy! >= 0 ? subsidy = subsidy : subsidy = +payrollEmployee.subsidy;
        subsidy_transport! >= 0 ? subsidy_transport = subsidy_transport : subsidy_transport = +payrollEmployee.subsidy_transport;
        subsidy_food! >= 0 ? subsidy_food = subsidy_food : subsidy_food = +payrollEmployee.subsidy_food;
        subsidy_residence! >= 0 ? subsidy_residence = subsidy_residence : subsidy_residence = +payrollEmployee.subsidy_residence;
        subsidy_medical! >= 0 ? subsidy_medical = subsidy_medical : subsidy_medical = +payrollEmployee.subsidy_medical;
        subsidy_vacation! >= 0 ? subsidy_vacation = subsidy_vacation : subsidy_vacation = +payrollEmployee.subsidy_vacation;
        subsidy_shift! >= 0 ? subsidy_shift = subsidy_shift : subsidy_shift = +payrollEmployee.subsidy_shift;
        subsidy_night! >= 0 ? subsidy_night = subsidy_night : subsidy_night = +payrollEmployee.subsidy_night;
        subsidy_risk! >= 0 ? subsidy_risk = subsidy_risk : subsidy_risk = +payrollEmployee.subsidy_risk;
        subsidy_attendance! >= 0 ? subsidy_attendance = subsidy_attendance : subsidy_attendance = +payrollEmployee.subsidy_attendance;
        subsidy_performance! >= 0 ? subsidy_performance = subsidy_performance : subsidy_performance = +payrollEmployee.subsidy_performance;
        subsidy_leadership! >= 0 ? subsidy_leadership = subsidy_leadership : subsidy_leadership = +payrollEmployee.subsidy_leadership;
        subsidy_commission! >= 0 ? subsidy_commission = subsidy_commission : subsidy_commission = +payrollEmployee.subsidy_commission;
        salary_thirteenth! >= 0 ? salary_thirteenth = salary_thirteenth : salary_thirteenth = +payrollEmployee.salary_thirteenth;
        salary_fourteenth! >= 0 ? salary_fourteenth = salary_fourteenth : salary_fourteenth = +payrollEmployee.salary_fourteenth;
        ipa_employee! >= 0 ? ipa_employee = ipa_employee : ipa_employee = +payrollEmployee.ipa_employee;
 
        const syndicate_tax = settings?.payroll_syndicate_tax ?? 1;

        if(employees.length <= 0) {
            throw new AppError("Employees Doesn't Exists");
        }

        function positionName(positionId: string) {
          return positions.find((position) => position.id === positionId)
        }

        function departmentName(departmentId: string) {
          return departments.find((department) => department.id === departmentId)
        }

        const employee =  employees.find(employee => employee.id === payrollEmployee.employee_id)
          // console.log(employee)
        if(employee) {
          let base_day = calcSalarioEmDias(+payrollEmployee.month_total_workdays, +employee.salary)
          let base_hour = calcSalarioPorHora(base_day, +payrollEmployee.day_total_workhours)
          let total_overtime = calcTotalHorasExtras(base_hour, overtime50!, overtime100!)
          let total_absences = calcTotalFaltas(absences!, base_day)
          let total_subsidy = ((subsidy)! + (subsidy_transport!) + (subsidy_food!) + (subsidy_residence!) + 
                            (subsidy_medical!) + (subsidy_vacation!) + (subsidy_shift!) + (subsidy_night!) +
                             (subsidy_risk!) + (subsidy_attendance!) + (subsidy_performance!) + (subsidy_leadership!) + 
                              (subsidy_commission!));
          // let total_subsidy = (+subsidy!) + (+subsidy_transport!) + (+subsidy_food!) + (+subsidy_residence!) + (+subsidy_medical!) + (+subsidy_vacation!)
          let total_income = +calcularSalarioBruto(+employee.salary, total_overtime!, total_absences, +backpay!, +bonus!, total_subsidy, salary_thirteenth!)
          let IRPS = retornarIRPS(+total_income!, employee.dependents) 
          let INSS_Employee = retornarINSS_Employee(+total_income!, employee.inss_status)
          let INSS_Company = retornarINSS_Company(+total_income, employee.inss_status)
          let syndicate_employee = retornarSyndicate_Tax(+total_income.toFixed(2), syndicate_tax, employee.syndicate_status)
          let salary_liquid = calcularSalarioLiquido(+total_income!, IRPS, INSS_Employee, +cash_advances!, syndicate_employee, ipa_employee!, +payrollEmployee.loan_deduction)

          let employeePayroll: ICreatePayrollEmployeeDTO = {
            id: payrollEmployee.id,
            payroll_id: payrollEmployee.payroll_id,
            employee_id: employee.id,
            employee_name: employee.name,
            dependents: employee.dependents,
            position_name: positionName(employee.position_id!)?.name,
            department_name: departmentName(employee.department_id!)?.name,
            nib: employee.nib,
            social_security: employee.social_security,
            nuit: employee.nuit,
            salary_base: employee.salary, 
            salary_liquid: salary_liquid as any,
            month: payrollEmployee.month,
            year: payrollEmployee.year,
            total_income: total_income  as any,
            overtime50,
            overtime100,
            total_overtime: total_overtime as any, //((+payroll.total_overtime) + total_overtime) as any,
            month_total_workdays: payrollEmployee.month_total_workdays,
            day_total_workhours: payrollEmployee.day_total_workhours,
            base_day: base_day as any,
            base_hour: base_hour as any,
            absences,
            total_absences: total_absences as any,
            cash_advances: cash_advances as any,
            subsidy: subsidy as any,
            bonus: bonus as any,
            backpay: backpay as any,
            irps: IRPS as any,
            inss_employee: INSS_Employee as any,
            inss_company: INSS_Company as any,
            total_inss: (INSS_Employee + INSS_Company) as any,
            syndicate_employee: syndicate_employee as any,
            ipa_employee: ipa_employee as any,
            subsidy_transport: subsidy_transport as any,
            subsidy_food: subsidy_food as any,
            subsidy_residence: subsidy_residence as any,
            subsidy_medical: subsidy_medical as any,
            subsidy_vacation: subsidy_vacation as any,
            subsidy_shift: subsidy_shift as any,
            subsidy_night: subsidy_night as any,
            subsidy_risk: subsidy_risk as any,
            subsidy_attendance: subsidy_attendance as any,
            subsidy_performance: subsidy_performance as any,
            subsidy_leadership: subsidy_leadership as any,
            subsidy_commission: subsidy_commission as any,
            salary_thirteenth: salary_thirteenth as any,
            salary_fourteenth: salary_fourteenth as any,
            employee_loan: payrollEmployee.employee_loan,
            loan_deduction: payrollEmployee.loan_deduction,
            inss_event: inss_event,
            // inss_event_date: new Date(Date.now()).toISOString() as any,
            tabelaSalario: retornarTabela(+total_income!, employee.dependents),
            payrollDemo: retornarPayrollDemo(+employee.salary, overtime50,
              overtime100, +payrollEmployee.month_total_workdays, +payrollEmployee.day_total_workhours, absences,
              +cash_advances!, +backpay!, +employee.subsidy, +bonus!, +total_income!, +IRPS!, +INSS_Employee!)
          };

          //salvar no banco de dados
          this.payrollEmployeeRepository.create(employeePayroll).then().
          catch((err) => console.log(err))
          if (employee.vacation > absences!)
            employee.vacation = employee.vacation - absences!
          else 
            employee.vacation = 0
          this.employeeRepository.create(employee).then().
          catch((err) => console.log(err))
          // console.log("78",employee)
          
          listEmployeesPayrolls.push(employeePayroll)
          console.log(listEmployeesPayrolls)
        }
        return listEmployeesPayrolls
    }
}

function calcularSalario(salary: number, dependents: number) {
  let coeficiente = CalcCoeficiente(salary)
  let limiteNTributavel = CalcLimiteNaoTributavel(salary)
  let AResult = salary - limiteNTributavel!
  let AxB = AResult * coeficiente!
  let valorReter = CalcValorReter(limiteNTributavel!, dependents)
  let impostoPagarIRPS = calcImpostoPagarIRPS(AxB, valorReter!)
  let salarioLiquido = salary - impostoPagarIRPS - (salary * 0.03)
  
  return salarioLiquido;
}

function retornarTabela(salary: number, dependents: number) {
  let coeficiente = CalcCoeficiente(salary)
  let limiteNTributavel = CalcLimiteNaoTributavel(salary)
  let AResult = salary - limiteNTributavel!
  let AxB = AResult * coeficiente!
  let valorReter = CalcValorReter(limiteNTributavel!, dependents)
  let impostoPagarIRPS = calcImpostoPagarIRPS(AxB, valorReter!)
  let salarioLiquido = calcularSalario(salary, impostoPagarIRPS)

  const salario: ISalario = {
    coeficiente:  coeficiente!,
    limiteNTributavel: limiteNTributavel!,
    AResult: AResult,
    AxB: AxB,
    valorReter: valorReter!,
    impostoPagarIRPS: impostoPagarIRPS,
    salarioLiquido: salarioLiquido

  }
  
  return salario;
}

function retornarIRPS(salary: number, dependents: number) {
  let coeficiente = CalcCoeficiente(salary)
  let limiteNTributavel = CalcLimiteNaoTributavel(salary)
  let AResult = salary - limiteNTributavel!
  let AxB = AResult * coeficiente!
  let valorReter = CalcValorReter(limiteNTributavel!, dependents)
  let impostoPagarIRPS = calcImpostoPagarIRPS(AxB, valorReter!)
  
  return impostoPagarIRPS;
}

function retornarINSS_Employee(salary: number, inss_status: string) {
  return inss_status ==="true" ? salary * 0.03 : 0;
}

function retornarINSS_Company(salary: number, inss_status: string) {
  return inss_status ==="true" ? salary * 0.04 : 0;
}

function retornarSyndicate_Tax(salary: number, syndicate_tax: number, syndicate_status: string) {
  syndicate_tax = syndicate_tax / 100;

  return syndicate_status === "true" ? salary * syndicate_tax : 0
}

function retornarPayrollDemo(salary_base: number,  overtime50?: number,
  overtime100?: number,
  month_total_workdays?: number,
  day_total_workhours?: number,
  totalAbsences?: number,
  cash_advances?: number,
  backpay?: number,
  bonus?: number,
  subsidy?: number,
  salary_liquid?: number,
  IRPS?: number,
  INSS?: number) {
  let daySalary = calcSalarioEmDias(month_total_workdays!, salary_base)
  let hourSalary = calcSalarioPorHora(daySalary, day_total_workhours!)
  overtime50 = calcTotalHoraExtra50(hourSalary, overtime50!)
  overtime100 = calcTotalHoraExtra100(hourSalary, overtime100!)
  totalAbsences = calcTotalFaltas(totalAbsences!, daySalary)
  cash_advances = cash_advances
  subsidy = subsidy
  let totalSalario = +calcularSalarioBruto(salary_base, overtime100 + overtime50 , totalAbsences, backpay!, bonus!, subsidy!, 0).toFixed(2)
  salary_liquid = calcularSalario(totalSalario, IRPS!)
  backpay = backpay
  bonus = bonus
  // IRPS = IRPS

 

  const salario: IPayrollDemo = {
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

  }
  
  return salario;
}

function CalcCoeficiente (salary: number) {
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
  
   return null
}

function CalcLimiteNaoTributavel(salary: number) {
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
  
  return null
}

function CalcValorReter(LimiteNTributavel: number, dependents: number) {
  if (LimiteNTributavel == 20249.99) 
    return 0;
  if (LimiteNTributavel == 20250)
    return 0;
  if (LimiteNTributavel == 20750) {
    if(dependents == 0)
      return 50;
    else 
      return 0
    } 
  if (LimiteNTributavel == 21000) {
    if(dependents == 0)
      return 75;
    if(dependents == 1)
      return 25;
    else 
      return 0;
  }
  if (LimiteNTributavel == 21250) {
    if(dependents == 0)
      return 100;
    if(dependents == 1)
      return 50;
    if(dependents == 2)
      return 25;
    else 
      return 0;
  }
  if (LimiteNTributavel == 21750) {
    if(dependents == 0)
      return 150;
    if(dependents == 1)
      return 100;
    if(dependents == 2)
      return 75;
    if(dependents == 3)
      return 50;
    else 
      return 0;
  }
  if (LimiteNTributavel == 22250) {
    if(dependents == 0)
    return 200;
    if(dependents == 1)
      return 150;
    if(dependents == 2)
      return 125;
    if(dependents == 3)
      return 100;
    if(dependents == 4)
      return 50;
    else 
      return 50;
  }
  if (LimiteNTributavel == 32750) {
    if(dependents == 0)
    return 1775;
    if(dependents == 1)
      return 1725;
    if(dependents == 2)
      return 1700;
    if(dependents == 3)
      return 1675;
    if(dependents == 4)
      return 1625;
    else 
      return 1625;
  }
  if (LimiteNTributavel == 60750) {
    if(dependents == 0)
    return 7375;
    if(dependents == 1)
      return 7325;
    if(dependents == 2)
      return 7300;
    if(dependents == 3)
      return 7275;
    if(dependents == 4)
      return 7225;
    else 
      return 7225;
  }
  if (LimiteNTributavel == 144750) {
    if(dependents == 0)
      return 28375;
    if(dependents == 1)
      return 28325;
    if(dependents == 2)
      return 28300;
    if(dependents == 3)
      return 28275;
    if(dependents == 4)
      return 28225;
    else 
      return 28225;
  }
  return  null
}

function calcImpostoPagarIRPS(axb: number, valorReter: number) {
  return axb + valorReter
}

function calcSalarioEmDias(totalDiasTrabalhoMes: number, salario_base: number) {
  return salario_base / totalDiasTrabalhoMes
}

function calcSalarioPorHora(salarioEmDias: number, totalHorasTrabalhoDia: number) {
  return salarioEmDias / totalHorasTrabalhoDia
}

function calcTotalHoraExtra50(salarioPorHora: number, horasExtras50: number) {
  return  horasExtras50 * salarioPorHora * 1.5
}
function calcTotalHoraExtra100(salarioPorHora: number, horasExtras100: number) {
  return  horasExtras100 * salarioPorHora * 2
}
function calcTotalHorasExtras(salarioPorHora: number, horasExtras50: number, horasExtras100: number) {
  horasExtras50 = horasExtras50 * salarioPorHora * 1.5
  horasExtras100 = horasExtras100 * salarioPorHora * 2
  return horasExtras50 + horasExtras100;
}

function calcTotalFaltas(faltas: number, salarioEmDias: number) {
    return faltas * salarioEmDias
}

function calcularSalarioBruto(salario_base: number, totalHorasExtras: number,
   totalDescontoFaltas: number,  totalRetroativos: number, bonus: number, total_subsidio: number, salary_thirteenth: number) {
    
  return salario_base + totalHorasExtras - totalDescontoFaltas + totalRetroativos + bonus + total_subsidio + salary_thirteenth;
}

function calcularSalarioLiquido(totalSalario: number, IRPS: number, INSS_Employee: number, totalAdiantamento: number, syndicate_employee: number, ipa_employee: number, employeeLoan: number) {
  return totalSalario - IRPS - INSS_Employee - totalAdiantamento - syndicate_employee - ipa_employee - employeeLoan;
}


export { InputPayrollEmployeeUseCase }

